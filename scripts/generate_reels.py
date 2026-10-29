import os, math, subprocess
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import imageio_ffmpeg

ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
os.makedirs("public/videos", exist_ok=True)
os.makedirs("public/images/reels", exist_ok=True)

W, H = 540, 960
FPS = 24
DURATION = 4.0
TOTAL_FRAMES = int(FPS * DURATION)

reels = [
    {
        "id": "hero-reel",
        "title": "CONCERT & STAGE HIGHLIGHTS",
        "location": "D Y Patil Stadium, Pune",
        "tag": "LIVE · 14 MIN TURNAROUND",
        "base_color": (181, 22, 27),
        "accent_color": (230, 57, 70),
        "theme": "stage",
        "freq": 160,
    },
    {
        "id": "garba-night",
        "title": "NAVRATRI 2026 · 8,000+ CROWD",
        "location": "Sivru Fab Corner, Akurdi",
        "tag": "EVENT REEL · POSTED SAME NIGHT",
        "base_color": (210, 40, 30),
        "accent_color": (255, 180, 0),
        "theme": "garba",
        "freq": 220,
    },
    {
        "id": "drone-dagdusheth",
        "title": "JUGNU DRONE SHOW · DAGDUSHETH",
        "location": "Ganeshotsav, Pune",
        "tag": "DRONE REEL · AERIAL REVEAL",
        "base_color": (15, 25, 60),
        "accent_color": (0, 210, 255),
        "theme": "drone",
        "freq": 330,
    },
    {
        "id": "pune-metro",
        "title": "PUNE METRO · MILESTONE REEL",
        "location": "Civil Court Interchange, Pune",
        "tag": "CIVIC & TRANSIT",
        "base_color": (20, 45, 30),
        "accent_color": (0, 230, 140),
        "theme": "metro",
        "freq": 260,
    },
    {
        "id": "industrial-plant",
        "title": "HONDA & HYUNDAI MIDC PLANT",
        "location": "Chakan MIDC, Pune",
        "tag": "INDUSTRIAL & SAFETY DAY",
        "base_color": (30, 30, 40),
        "accent_color": (255, 120, 20),
        "theme": "industrial",
        "freq": 140,
    },
    {
        "id": "corporate-launch",
        "title": "GLOBAL TECH SUMMIT & AWARDS",
        "location": "JW Marriott Pune",
        "tag": "CORPORATE · CUT FOR LINKEDIN",
        "base_color": (15, 20, 45),
        "accent_color": (130, 90, 255),
        "theme": "corporate",
        "freq": 300,
    },
    {
        "id": "wedding-ceremony",
        "title": "ROYAL MAHARASHTRIAN WEDDING",
        "location": "Sunny's World, Pune",
        "tag": "WEDDING · BEFORE RECEPTION",
        "base_color": (60, 15, 25),
        "accent_color": (255, 190, 120),
        "theme": "wedding",
        "freq": 390,
    },
    {
        "id": "college-fest",
        "title": "INDUS FIESTA · ALUMNI MEET",
        "location": "D Y Patil University, Akurdi",
        "tag": "INSTITUTIONAL · 16 REELS",
        "base_color": (18, 18, 30),
        "accent_color": (240, 50, 130),
        "theme": "college",
        "freq": 280,
    },
]

def render_frame(reel, frame_idx):
    img = Image.new("RGB", (W, H), (13, 13, 15))
    draw = ImageDraw.Draw(img)
    t = frame_idx / TOTAL_FRAMES
    
    bc = reel["base_color"]
    ac = reel["accent_color"]
    
    # Background gradient
    for y in range(0, H, 4):
        ratio = y / H
        r = int(13 + (bc[0] * 0.4 - 13) * ratio + math.sin(t * math.pi * 2 + ratio * 3) * 15)
        g = int(13 + (bc[1] * 0.4 - 13) * ratio)
        b = int(15 + (bc[2] * 0.4 - 15) * ratio + math.cos(t * math.pi * 2 + ratio * 3) * 15)
        r = max(0, min(255, r))
        g = max(0, min(255, g))
        b = max(0, min(255, b))
        draw.rectangle([(0, y), (W, y + 4)], fill=(r, g, b))
        
    theme = reel["theme"]
    cx, cy = W / 2, H * 0.45
    
    if theme == "stage":
        # Sweeping stage spotlights
        for i in range(5):
            angle = math.sin(t * math.pi * 2 + i * 1.2) * 0.6
            x_end = cx + math.sin(angle) * 400
            draw.line([(cx + (i - 2) * 50, H), (x_end, cy - 150)], fill=(ac[0], ac[1], ac[2]), width=12)
        # Crowd silhouette
        for x in range(0, W, 20):
            h_crowd = 120 + int(math.sin(x * 0.05 + t * 10) * 20 + math.cos(x * 0.1) * 30)
            draw.ellipse([x - 15, H - h_crowd, x + 25, H + 50], fill=(5, 5, 8))
            
    elif theme == "garba":
        # Swirling dandiya festive rings
        for ring in range(6):
            rad = 80 + ring * 45 + math.sin(t * math.pi * 2 + ring) * 25
            col = ac if ring % 2 == 0 else bc
            bbox = [cx - rad, cy - rad, cx + rad, cy + rad]
            start_deg = int((t * 360 * 1.5 + ring * 50) % 360)
            draw.arc(bbox, start=start_deg, end=start_deg + 160, fill=col, width=8)
            
    elif theme == "drone":
        # Drone grid formation lights
        for i in range(12):
            for j in range(8):
                dx = cx - 180 + i * 32 + math.sin(t * math.pi * 2 + j * 0.5) * 15
                dy = cy - 120 + j * 32 + math.cos(t * math.pi * 2 + i * 0.5) * 15
                dist = math.hypot(dx - cx, dy - cy)
                brightness = max(0.2, min(1.0, math.sin(dist * 0.03 - t * 8) * 0.5 + 0.5))
                c = (int(ac[0] * brightness), int(ac[1] * brightness), int(ac[2] * brightness))
                draw.ellipse([dx - 4, dy - 4, dx + 4, dy + 4], fill=c)
                
    elif theme == "metro":
        # High speed track perspective lines
        for track in range(6):
            offset = (t * 2 + track * 0.3) % 1.0
            x1 = cx + (track - 2.5) * 25
            y1 = cy - 50
            x2 = cx + (track - 2.5) * 160
            y2 = H - 50
            draw.line([(x1, y1), (x2, y2)], fill=ac, width=4)
        draw.rounded_rectangle([cx - 100, cy - 20, cx + 100, cy + 90], radius=15, fill=(40, 50, 60), outline=ac, width=4)
        
    elif theme == "industrial":
        # Welding sparks & robot arm
        draw.line([(cx - 120, cy + 120), (cx, cy)], fill=(120, 120, 130), width=16)
        draw.line([(cx, cy), (cx + 80, cy + 80)], fill=(90, 90, 100), width=12)
        # Sparks bursting
        for sp in range(16):
            sp_angle = t * math.pi * 8 + sp * 0.4
            sp_dist = 20 + ((t * 4 + sp * 0.1) % 1.0) * 100
            sx = cx + 80 + math.cos(sp_angle) * sp_dist
            sy = cy + 80 + math.sin(sp_angle) * sp_dist
            draw.ellipse([sx - 3, sy - 3, sx + 3, sy + 3], fill=(255, 200, 50))
            
    elif theme == "corporate":
        # Modern keynote presentation beams & display cards
        draw.rounded_rectangle([cx - 160, cy - 100, cx + 160, cy + 80], radius=12, fill=(20, 25, 45), outline=ac, width=3)
        draw.rectangle([cx - 140, cy - 80, cx - 40, cy - 20], fill=(ac[0], ac[1], ac[2]))
        draw.line([(cx - 140, cy + 20), (cx + 120, cy + 20)], fill=(200, 200, 220), width=4)
        draw.line([(cx - 140, cy + 45), (cx + 80, cy + 45)], fill=(150, 150, 180), width=4)
        
    elif theme == "wedding":
        # Floating rose petals & bokeh orbs
        for b in range(12):
            bx = (b * 47 + t * 50) % W
            by = (b * 79 + t * 120) % (H - 200) + 100
            sz = 14 + (b % 5) * 8
            draw.ellipse([bx - sz, by - sz, bx + sz, by + sz], fill=(240, 120, 140))
            
    elif theme == "college":
        # Concert laser diamond beams
        for k in range(4):
            rot = t * math.pi * 2 + k * (math.pi / 2)
            pts = [
                (cx + math.cos(rot) * 160, cy + math.sin(rot) * 160),
                (cx + math.cos(rot + 1.57) * 90, cy + math.sin(rot + 1.57) * 90),
                (cx - math.cos(rot) * 160, cy - math.sin(rot) * 160),
                (cx - math.cos(rot + 1.57) * 90, cy - math.sin(rot + 1.57) * 90),
            ]
            draw.polygon(pts, outline=ac, fill=None)
            
    # Camera REC overlay UI
    # Top bar
    rec_pulse = (math.sin(t * math.pi * 4) + 1) * 0.5 > 0.3
    if rec_pulse:
        draw.ellipse([30, 40, 48, 58], fill=(230, 57, 70))
    draw.text((60, 42), "REC", fill=(255, 255, 255))
    
    # Timecode
    sec = int(t * DURATION * 3 + 12)
    frames = int((t * 24 * 4) % 24)
    tc_str = f"00:14:{sec:02d}:{frames:02d}"
    draw.text((360, 42), tc_str, fill=(255, 255, 255))
    
    # 4 viewfinder corners
    c_len = 24
    draw.line([(30, 75), (30 + c_len, 75)], fill=(255, 255, 255), width=2)
    draw.line([(30, 75), (30, 75 + c_len)], fill=(255, 255, 255), width=2)
    
    draw.line([(W - 30, 75), (W - 30 - c_len, 75)], fill=(255, 255, 255), width=2)
    draw.line([(W - 30, 75), (W - 30, 75 + c_len)], fill=(255, 255, 255), width=2)
    
    draw.line([(30, H - 180), (30 + c_len, H - 180)], fill=(255, 255, 255), width=2)
    draw.line([(30, H - 180), (30, H - 180 - c_len)], fill=(255, 255, 255), width=2)
    
    draw.line([(W - 30, H - 180), (W - 30 - c_len, H - 180)], fill=(255, 255, 255), width=2)
    draw.line([(W - 30, H - 180), (W - 30, H - 180 - c_len)], fill=(255, 255, 255), width=2)
    
    # Bottom info pill
    draw.rounded_rectangle([30, H - 150, W - 30, H - 50], radius=16, fill=(10, 10, 12), outline=(50, 50, 55), width=1)
    # Tag
    draw.text((45, H - 138), reel["tag"], fill=(230, 57, 70))
    # Title
    draw.text((45, H - 114), reel["title"], fill=(255, 255, 255))
    # Location
    draw.text((45, H - 85), f"📍 {reel['location']}", fill=(180, 180, 185))
    
    return img

# Generate each reel video + poster
for idx, reel in enumerate(reels):
    print(f"Generating reel {idx + 1}/{len(reels)}: {reel['id']}...")
    poster = render_frame(reel, frame_idx=12)
    poster.save(f"public/images/reels/{reel['id']}-poster.jpg", quality=90)
    
    # Pipe frames to ffmpeg
    video_out = f"public/videos/{reel['id']}.mp4"
    audio_freq = reel["freq"]
    
    cmd = [
        ffmpeg_exe, "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{W}x{H}",
        "-pix_fmt", "rgb24",
        "-r", str(FPS),
        "-i", "-",
        "-f", "lavfi",
        "-i", f"sine=frequency={audio_freq}:duration={DURATION}",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-preset", "veryfast",
        "-crf", "26",
        "-c:a", "aac",
        "-b:a", "64k",
        "-shortest",
        video_out
    ]
    
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for f in range(TOTAL_FRAMES):
        frame = render_frame(reel, f)
        proc.stdin.write(frame.tobytes())
    proc.stdin.close()
    proc.wait()
    print(f"Done {reel['id']}: {os.path.getsize(video_out)} bytes")

print("All reels synthesized successfully!")
