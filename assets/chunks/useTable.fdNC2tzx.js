import{s as t,G as P,y as R}from"./framework.DXFcsTCa.js";function S(s){return s==null}const E=(s,d={})=>{const{auto:p=!0,isShallow:h=!1}=d,n=t(!1),b=t(),r=h?P([]):t([]),l=t([]),i=t([]),g=e=>{i.value=e},c=t([]),v=t({label:"",width:40,align:"center"}),w=t({width:40,align:"center"}),T=t({width:40,align:"center"}),f=(e,o)=>{l.value.forEach(a=>{e.includes(a.prop)&&(S(o)?a.rendered=a.rendered===!1:a.rendered=o),a.children&&a.children.forEach(x=>{f(x.prop,o)})})},y=e=>{l.value=e},C=e=>{c.value=e},u=async()=>{if(s)try{n.value=!0;const e=await s();r.value=e}catch(e){console.error(e)}finally{n.value=!1}};return p&&R(()=>{u()}),{loading:n,tableRef:b,tableData:r,indexProps:v,selectionProps:w,expandProps:T,tableColumns:l,tableOperations:c,multipleSelection:i,handleSelectionChange:g,toggleTableColumnRendered:f,setTableColumns:y,setTableOperations:C,getTableData:u}};export{S as i,E as u};
