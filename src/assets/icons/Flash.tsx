import { IconData } from '../../types/dataTypes'

const Flash = (props: IconData) => {
  return (
    <svg
      width={props.width || '12'}
      height={props.height || '12'}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.18046 6.5L5.68799 9.45481L8.54424 5.5H5.81954L6.31201 2.54519L3.45576 6.5H6.18046ZM7.6492 0.604792C7.73609 0.0834721 7.0601 -0.198605 6.75066 0.229847L2.07254 6.70725C1.83373 7.03792 2.06999 7.5 2.47788 7.5H5L4.3508 11.3952C4.26391 11.9165 4.9399 12.1986 5.24934 11.7702L9.92746 5.29274C10.1663 4.96208 9.93001 4.5 9.52212 4.5H7L7.6492 0.604792Z"
        fill={props.fill || '#B1B5C4'}
      />
    </svg>
  )
}

export default Flash
