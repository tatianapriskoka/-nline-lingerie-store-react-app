import { BallTriangle, Puff } from "react-loader-spinner";

const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0',
};

export const Preloader = () => {
    return (
        <div style={style}>
            < BallTriangle
                width={140}
                height={140}
                color='#4fa94d'
            />
        </div>
    )
}

