import Root from './layout/dock-layout.jsx'

export default function Home(){
return(
    <div style={{display:'flex',position:'absolute',height:'100%',width:'100%',flexDirection:'column'}}>
    <div style={{backgroundColor:'#40474a',height:'5%' }}></div>
    <div style={{position:'relative',height:'95%',width:'100%'}}>
    <Root/>
    </div>
    </div>
)
}