import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Simple branded OG image
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background:
            'linear-gradient(135deg, #1f2937 0%, #0b1220 40%, #1e1633 100%)',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(600px 300px at 20% 30%, rgba(139, 92, 246, 0.25), transparent), radial-gradient(500px 300px at 80% 70%, rgba(244, 114, 182, 0.25), transparent)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            color: 'white',
            padding: '72px 80px',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: '#9CA3AF',
              letterSpacing: 1,
            }}
          >
            Data Science • Information Systems
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              background:
                'linear-gradient(90deg, #A78BFA 0%, #F472B6 45%, #60A5FA 100%)',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              maxWidth: 980,
            }}
          >
            Your Name
          </div>
          <div
            style={{
              fontSize: 34,
              color: '#D1D5DB',
              maxWidth: 1000,
            }}
          >
            Projects, research, skills, and creative timelines that turn data into insight.
          </div>
        </div>
      </div>
    ),
    size
  )
}
