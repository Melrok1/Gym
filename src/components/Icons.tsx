type IconProps = {
  name: 'cart' | 'user' | 'heart' | 'logout'
  className?: string
  width?: number | string
  height?: number | string
  color?: string
}

export default function Icon({ name, className = '', width = '1.5rem', height = '2rem', color = 'currentColor' }: IconProps) {
  switch (name) {
    case 'cart':
      return (
        <svg
        className={className}
        width={width}
        height={height}
        viewBox="680.7 197.5 39 28"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        >
					<path
						d="m709.9 206-2.8-8.5h-14.2L690 206h-9.3l.5 1.4 6.2 18.1h25.2l6.7-19.5h-9.4zm-15.1 17.4-1-6.5h5v6.5h-4zm-11.1-15.2h6.5l1 
						6.5h-5.3l-2.2-6.5zm8.8 0h6.4v6.5h-5.4l-1-6.5zm8.5 8.7h5l-1 6.5h-4v-6.5zm0-2.2v-6.5h6.4l-1 6.5H701zm8.6-6.5h6.5l-2.2 
						6.5h-5.3l1-6.5zm-15.2-8.5h11l2.1 6.3h-15.3l2.2-6.3zm-7.7 17.2h5l1 6.5h-3.8l-2.2-6.5zm24.3 6.5h-3.7l1-6.5h5l-2.3 6.5z"
					/>
        </svg>
      )

    case 'user':
      return (
        <svg
        className={className}
        width={width}
        height={height}
        viewBox="-112.6 200 23 28"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        >
					<path
						d="m709.9 206-2.8-8.5h-14.2L690 206h-9.3l.5 1.4 6.2 18.1h25.2l6.7-19.5h-9.4zm-15.1 17.4-1-6.5h5v6.5h-4zm-11.1-15.2h6.5l1 
						6.5h-5.3l-2.2-6.5zm8.8 0h6.4v6.5h-5.4l-1-6.5zm8.5 8.7h5l-1 6.5h-4v-6.5zm0-2.2v-6.5h6.4l-1 6.5H701zm8.6-6.5h6.5l-2.2 
						6.5h-5.3l1-6M-91.5 213.4c-.8-1.3-1.8-2.5-3-3.5.5-1 .7-2 .7-3.2 0-2.1-.8-4-2.2-5.3-1.4-1.4-3.3-2.2-5.3-2.2s-4 .8-5.3 
						2.2c-1.4 1.4-2.2 3.3-2.2 5.3 0 1.1.3 2.2.7 3.2-1.2.9-2.3 2.1-3 3.5-.9 1.7-1.5 3.6-1.5 5.6v8.2h22.7V219c-.2-2-.7-3.9-1.6-5.6zm-13.7-10.4c1-1 2.3-1.6 
						3.8-1.6s2.8.6 3.8 1.6 1.6 2.3 1.6 3.8c0 1.1-.3 2.1-.8 2.9-.2.3-.4.5-.6.8-.4.4-.8.7-1.3 1-.8.4-1.7.7-2.6.7-1 
						0-1.8-.2-2.6-.7-.8-.4-1.4-1-1.9-1.8s-.8-1.8-.8-2.9c-.2-1.5.4-2.8 1.4-3.8zm13 22.1h-18.4V219c0-1.7.4-3.2 1.2-4.5.6-1 1.4-2 2.3-2.7.6.7 
						1.2 1.2 2 1.6 1.1.6 2.3 1 3.7 1 1.3 0 2.6-.3 3.7-1 .8-.4 1.4-1 2-1.6.9.7 1.7 1.7 2.3 2.7.8 1.3 1.2 2.9 1.2 4.5v6.1z.5zm-15.2-8.5h11l2.1 
						6.3h-15.3l2.2-6.3zm-7.7 17.2h5l1 6.5h-3.8l-2.2-6.5zm24.3 6.5h-3.7l1-6.5h5l-2.3 6.5z"
					/>
        </svg>
      )

    case 'heart':
      return (
        <svg
          className={className}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36..." />
        </svg>
      )

		case 'logout'	:
			return (
				<svg
          className={className}
          width={width}
          height={height}
					viewBox="0 0 512 512"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
					<path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 
						224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 
						0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 
						32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
					/>
				</svg>
			)

    default:
      return <span className={className} />
  }
}