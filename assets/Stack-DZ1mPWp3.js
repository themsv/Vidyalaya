import{p as $,u as x,k,a as j,j as u,B as y,c as N,g as B,f as F,x as V}from"./index-C9QPIbw1.js";var R={root:"m_9e117634"};const q={},w=N((t,{radius:s,fit:a})=>({root:{"--image-radius":s===void 0?void 0:B(s),"--image-object-fit":a}})),I=$((t,s)=>{const a=x("Image",q,t),{classNames:e,className:n,style:m,styles:i,unstyled:p,vars:g,onError:o,src:r,radius:_,fit:f,fallbackSrc:c,mod:l,...d}=a,[b,v]=k.useState(!r);k.useEffect(()=>v(!r),[r]);const S=j({name:"Image",classes:R,props:a,className:n,style:m,classNames:e,styles:i,unstyled:p,vars:g,varsResolver:w});return b&&c?u.jsx(y,{component:"img",ref:s,src:c,...S("root"),onError:o,mod:["fallback",l],...d}):u.jsx(y,{component:"img",ref:s,...S("root"),src:r,onError:P=>{o==null||o(P),v(!0)},mod:l,...d})});I.classes=R;I.displayName="@mantine/core/Image";var h={root:"m_6d731127"};const z={gap:"md",align:"stretch",justify:"flex-start"},A=N((t,{gap:s,align:a,justify:e})=>({root:{"--stack-gap":V(s),"--stack-align":a,"--stack-justify":e}})),E=F((t,s)=>{const a=x("Stack",z,t),{classNames:e,className:n,style:m,styles:i,unstyled:p,vars:g,align:o,justify:r,gap:_,variant:f,...c}=a,l=j({name:"Stack",props:a,classes:h,className:n,style:m,classNames:e,styles:i,unstyled:p,vars:g,varsResolver:A});return u.jsx(y,{ref:s,...l("root"),variant:f,...c})});E.classes=h;E.displayName="@mantine/core/Stack";export{I,E as S};
