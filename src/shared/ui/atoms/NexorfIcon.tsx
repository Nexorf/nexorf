import React from "react";

type NexorfLogoProps = {
    className?: string;
    fill?: string;
    props?: React.SVGProps<SVGSVGElement>;
}

const NexorfIcon = ({className, fill, props} : NexorfLogoProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className={className}
        {...props}
    >
        <mask
            id="a"
            width={206}
            height={209}
            x={11}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M11.284 0h205.63v208.05H11.284V0Z" />
        </mask>
        <g mask="url(#a)">
            <mask
                id="b"
                width={206}
                height={208}
                x={11}
                y={0}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="M38.441 0h151.315c15.009 0 27.158 12.164 27.158 27.157v153.154c0 14.993-12.149 27.158-27.158 27.158H38.441c-14.993 0-27.157-12.165-27.157-27.158V27.157C11.284 12.164 23.448 0 38.44 0Z"
                />
            </mask>
            <g mask="url(#b)">
                <path fill={fill} d="M11.284 0h205.63v207.249H11.284V0Z" />
            </g>
        </g>
        <mask
            id="c"
            width={249}
            height={250}
            x={263}
            y={237}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M263.135 237.691H512v248.393H263.135V237.691Z" />
        </mask>
        <g mask="url(#c)">
            <mask
                id="d"
                width={249}
                height={249}
                x={263}
                y={237}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="m404.643 244.889 99.703 99.703c9.43 9.43 9.43 24.706 0 34.135l-99.703 99.704c-9.429 9.429-24.706 9.429-34.135 0l-99.703-99.704c-9.43-9.429-9.43-24.705 0-34.135l99.703-99.703c9.429-9.43 24.706-9.43 34.135 0Z"
                />
            </mask>
            <g mask="url(#d)">
                <path
                    fill={fill}
                    d="M253.737 227.821h267.677v267.677H253.737V227.821Z"
                />
            </g>
        </g>
        <mask
            id="e"
            width={229}
            height={229}
            x={0}
            y={247}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M0 247.545h228.214v228.214H0V247.545Z" />
        </mask>
        <g mask="url(#e)">
            <mask
                id="f"
                width={229}
                height={229}
                x={0}
                y={247}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="M114.099 247.545C51.077 247.545 0 298.638 0 361.66c0 63.021 51.077 114.099 114.099 114.099 63.022 0 114.115-51.078 114.115-114.099 0-63.022-51.093-114.115-114.115-114.115Z"
                />
            </mask>
            <g mask="url(#f)">
                <path fill={fill} d="M0 247.545h228.214v228.214H0V247.545Z" />
            </g>
        </g>
        <mask
            id="g"
            width={69}
            height={139}
            x={424}
            y={34}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M424.335 34.403h68.146v138.49h-68.146V34.403Z" />
        </mask>
        <g mask="url(#g)">
            <mask
                id="h"
                width={69}
                height={139}
                x={424}
                y={34}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="m426.331 99.373 61.843-64.043a2.402 2.402 0 0 1 2.656-.566 2.405 2.405 0 0 1 1.525 2.248v133.414c0 .99-.598 1.886-1.525 2.263-.911.377-1.964.141-2.656-.566l-61.843-64.059c-2.341-2.42-2.341-6.255 0-8.69Z"
                />
            </mask>
            <g mask="url(#h)">
                <path fill={fill} d="M422.135 176.461V31.102h70.345v145.359h-70.345Z" />
            </g>
        </g>
        <mask
            id="i"
            width={69}
            height={140}
            x={284}
            y={34}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M284.792 34.56h68.145v138.491h-68.145V34.561Z" />
        </mask>
        <g mask="url(#i)">
            <mask
                id="j"
                width={69}
                height={139}
                x={284}
                y={34}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="m350.941 108.064-61.827 64.059a2.45 2.45 0 0 1-2.672.566 2.441 2.441 0 0 1-1.524-2.263V37.012c0-.99.597-1.886 1.524-2.248a2.421 2.421 0 0 1 2.672.566l61.827 64.059a6.234 6.234 0 0 1 0 8.675Z"
                />
            </mask>
            <g mask="url(#j)">
                <path fill={fill} d="M355.137 30.977V176.35h-70.345V30.977h70.345Z" />
            </g>
        </g>
        <mask
            id="k"
            width={129}
            height={69}
            x={323}
            y={139}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M323.249 139.292h128.574v67.878H323.249v-67.878Z" />
        </mask>
        <g mask="url(#k)">
            <mask
                id="l"
                width={129}
                height={69}
                x={323}
                y={139}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="m391.771 141.162 59.25 61.529c.723.739.912 1.839.519 2.782a2.572 2.572 0 0 1-2.373 1.571H325.999a2.572 2.572 0 0 1-2.373-1.571 2.566 2.566 0 0 1 .519-2.782l59.25-61.529a5.842 5.842 0 0 1 4.18-1.776 5.85 5.85 0 0 1 4.196 1.776Z"
                />
            </mask>
            <g mask="url(#l)">
                <path fill={fill} d="M319.964 136.825h135.19v70.345h-135.19v-70.345Z" />
            </g>
        </g>
        <mask
            id="m"
            width={129}
            height={68}
            x={323}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: "luminance",
            }}
        >
            <path fill="#fff" d="M323.233.016h128.59v67.878h-128.59V.016Z" />
        </mask>
        <g mask="url(#m)">
            <mask
                id="n"
                width={129}
                height={68}
                x={323}
                y={0}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="m383.316 66.024-59.25-61.529a2.565 2.565 0 0 1-.519-2.781 2.566 2.566 0 0 1 2.358-1.572h123.183c1.037 0 1.964.613 2.373 1.572a2.594 2.594 0 0 1-.519 2.781l-59.249 61.53a5.85 5.85 0 0 1-4.197 1.775 5.84 5.84 0 0 1-4.18-1.776Z"
                />
            </mask>
            <g mask="url(#n)">
                <path fill={fill} d="M455.123 70.362h-135.19V.016h135.19v70.346Z" />
            </g>
        </g>
    </svg>
)

export default NexorfIcon
