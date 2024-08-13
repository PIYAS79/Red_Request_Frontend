import { Button } from "antd"
import { Link } from "react-router-dom"


const BloodButton = ({ text,link }: { text: string,link:string }) => {
    return (
        <Link to={`${link}`}>
            <Button className="bloodButton" danger size="large" type="primary">{text}</Button>
        </Link>
    )
}

export default BloodButton