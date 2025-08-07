import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, rgba(139, 92, 246, .9), rgba(244, 114, 182, .9))',
          color: 'white',
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: 0.5,
        }}
      >
        DS
      </div>
    ),
    size
  )
}
