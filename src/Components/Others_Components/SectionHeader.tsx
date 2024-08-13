import {Typography} from 'antd'
const {Title} = Typography

const SectionHeader = ({title,para}:{title:string,para:string}) => {
    return (
        <div className="specialFont" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Title level={3} className="bloodText">{title}</Title>
            <p style={{marginTop:'-.5rem',fontSize:'1rem'}}>{para}</p>
        </div>
    )
}

export default SectionHeader