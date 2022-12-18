import { Button, createStyles, Input } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    svgContainer: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: 0,
        bottom: 0,
    },
    rectangle: {
        height: "148px",
        width: "45.2%",
        fill: "#ffffff",
        '@media (max-width: 1279px)': {
            width: "37.35%",
        },
        '@media (max-width: 1023px)': {
            width: "31%",
        },
        '@media (max-width: 849px)': {
            width: "28%",
        },

    },
    leftRec: {
        x: "1.5%",
        '@media (max-width: 1279px)': {
            x: 0
        },
    },
    rightRec: {
        x: "53.3%",
        '@media (max-width: 1279px)': {
            x: "42.655%",
        },
        '@media (max-width: 1023px)': {
            x: "35.40%",
        },
        '@media (max-width: 849px)': {
            x: "32.00%",
        },


    }

}))

const RoadMapMaskComponent = () => {
    const { classes, cx } = useStyles()


    return <svg width="1280" height="1080"
        className={cx(classes.svgContainer)}
    >
        <mask id="svgmask3" >
            <rect y="0" className={cx(classes.rectangle, classes.leftRec)} />
            <rect y="15.5%" className={cx(classes.rectangle, classes.rightRec)} />
            <rect y="31.1%" className={cx(classes.rectangle, classes.leftRec)} />
            <rect y="46.7%" className={cx(classes.rectangle, classes.rightRec)} />
            <rect y="62.25%" className={cx(classes.rectangle, classes.leftRec)} />
            <rect y="77.7%" className={cx(classes.rectangle, classes.rightRec)} />
        </mask>
        <image
            style={{ height: '100%', width: '100%' }}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="/images/tiger-large.jpeg"
            mask="url(#svgmask3)" />
    </svg>

}
export default RoadMapMaskComponent