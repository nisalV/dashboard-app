import { IconData } from '../../types/dataTypes'

const Link = (props: IconData) => {
  return (
    <svg
      width={props.width || '16'}
      height={props.height || '16'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47138 3.75696C9.51278 2.71556 11.2012 2.71556 12.2426 3.75696C13.2841 4.79841 13.2838 6.48696 12.2425 7.52831L10.8284 8.94241C10.5681 9.20276 10.1459 9.20276 9.88559 8.94241C9.62525 8.68206 9.62525 8.25995 9.88559 7.9996L11.2997 6.5855C11.8204 6.06475 11.8205 5.22042 11.2998 4.69977C10.7791 4.17907 9.93489 4.17907 9.41419 4.69977L7.99998 6.11398C7.73963 6.37433 7.31752 6.37433 7.05717 6.11398C6.79682 5.85363 6.79682 5.43152 7.05717 5.17117L8.47138 3.75696ZM10.357 5.64259C10.6173 5.90294 10.6173 6.32505 10.357 6.5854L6.58574 10.3566C6.32539 10.617 5.90328 10.617 5.64293 10.3566C5.38258 10.0963 5.38258 9.67417 5.64293 9.41382L9.41416 5.64259C9.67451 5.38224 10.0966 5.38224 10.357 5.64259ZM6.11436 7.05679C6.37471 7.31714 6.37471 7.73925 6.11436 7.9996L4.70015 9.41382C4.17945 9.93451 4.17945 10.7787 4.70015 11.2994C5.22079 11.8201 6.06513 11.8201 6.58588 11.2993L7.99998 9.88522C8.26033 9.62487 8.68244 9.62487 8.94279 9.88522C9.20314 10.1456 9.20314 10.5677 8.94279 10.828L7.52869 12.2421C6.48734 13.2835 4.79878 13.2837 3.75734 12.2422C2.71594 11.2008 2.71594 9.5124 3.75734 8.47101L5.17155 7.05679C5.4319 6.79644 5.85401 6.79644 6.11436 7.05679Z"
        fill={props.fill || '#777E91'}
      />
    </svg>
  )
}

export default Link
