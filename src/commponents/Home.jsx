import Root from './layout/dock-layout.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile,faFolder,faSave,faFileExport,faCog,faUndo,faRedo } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt,faTabletAlt,faLaptop,faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt,faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'


export default function Home(){
return(
    <div style={{display:'flex',position:'absolute',height:'100%',width:'100%',flexDirection:'column'}}>
    <div style={{backgroundColor:'#40474a',height:'5%' }}>
    <FontAwesomeIcon icon={faFile} />
    <FontAwesomeIcon icon={faFolder} />
    <FontAwesomeIcon icon={faSave} />
    <FontAwesomeIcon icon={faFileExport} />
    <FontAwesomeIcon icon={faCog} />
    <FontAwesomeIcon icon={faUndo} />
    <FontAwesomeIcon icon={faRedo} />
    </div>
    <div style={{backgroundColor:'#40474a',height:'5%' }}>
    <FontAwesomeIcon icon={faMobileAlt} />
    <FontAwesomeIcon icon={faTabletAlt} />
    <FontAwesomeIcon icon={faLaptop} />
    <FontAwesomeIcon icon={faDesktop} />
    </div>

    <div style={{backgroundColor:'#40474a',height:'5%' }}>
    <FontAwesomeIcon icon={faExternalLinkAlt} />
    <FontAwesomeIcon icon={faCloudUploadAlt} />
    </div>
    <div style={{position:'relative',height:'95%',width:'100%'}}>
    <Root/>
    </div>
    </div>
)
}