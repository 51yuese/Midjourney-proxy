
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as e}from"../index/index.a2fdc026.js";import{d as a,u as r,r as s,a as l,o,c as t,b as i,t as n,e as g,w as d,v as m,f as u,g as p,h as c,i as f,j as b,p as v,k as x,l as h,m as w,n as _,_ as y,q}from"../main-2d3d97e8.js";const F=e=>(v("data-v-a9f9683a"),e=e(),x(),e),V={class:"login_box"},k={class:"login_left"},z={style:{"text-align":"left","margin-top":"20%","margin-left":"50%",transform:"translate(-27%)"}},S={class:"greeting"},A=F((()=>i("div",{class:"tips"},"输入您的用户名和密码即可登录！",-1))),I={style:{"margin-left":"50%",transform:"translate(-27%)"}},P={class:"flex-bar"},U={style:{"text-align":"left","margin-top":"40px"}},j={class:"copyright"},E={class:"login_right"},L=F((()=>i("div",{style:{"margin-top":"20%"}},[i("img",{src:"/gomaxai/admin/static/png/login_logo-082f52d9.png"})],-1))),R={style:{color:"#FFF","font-size":"40px","margin-top":"20px"}},C=F((()=>i("span",{style:{border:"4px solid var(--type-gray-white, #FFF)",padding:"0 6px","border-radius":"16px"}},"Ai",-1))),G=a({name:"Login"}),K=a({...G,setup(a){var v;const x=f(),y=h(),q=r();new URL("/gomaxai/admin/static/png/login-banner-2c1ede93.png",self.location).href;const F="GoMaxAI",G=s("login"),K=s(!1);s((null==(v=x.query.redirect)?void 0:v.toString())??"/"),l();const M=s(),Z=s({username:localStorage.login_username||"",password:"",remember:!!localStorage.login_username}),B=s({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]});function D(){M.value&&M.value.validate((e=>{e&&(K.value=!0,q.login(Z.value).then((()=>{K.value=!1,Z.value.remember?localStorage.setItem("login_username",Z.value.username):localStorage.removeItem("login_username"),y.push("/")})).catch((()=>{K.value=!1})))}))}s();const H=s({username:"",captcha:"",password:"",checkPassword:""});return s({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkPassword:[{required:!0,trigger:"blur",message:"请再次输入密码"},{validator:(e,a,r)=>{a!==H.value.password?r(new Error("两次输入的密码不一致")):r()}}]}),s(),s({username:localStorage.login_username||"",captcha:"",newPassword:""}),s({username:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),(a,r)=>{const s=b("el-input"),l=b("el-form-item"),f=b("el-checkbox"),v=b("el-button"),x=b("el-form"),h=e;return o(),t("div",V,[i("div",k,[i("div",z,[i("div",S,"欢迎使用 "+n(g(F))+" ! 👋🏻",1),A]),i("div",I,[d(u(x,{ref_key:"loginFormRef",ref:M,model:g(Z),rules:g(B),class:"login-form",autocomplete:"on","label-position":"top","hide-required-asterisk":""},{default:p((()=>[i("div",null,[u(l,{prop:"username",label:"用户名"},{default:p((()=>[u(s,{size:"large",modelValue:g(Z).username,"onUpdate:modelValue":r[0]||(r[0]=e=>g(Z).username=e),placeholder:"请输入用户名",text:"",tabindex:"1",autocomplete:"on"},null,8,["modelValue"])])),_:1}),u(l,{prop:"password",label:"密码"},{default:p((()=>[u(s,{size:"large",modelValue:g(Z).password,"onUpdate:modelValue":r[1]||(r[1]=e=>g(Z).password=e),type:"password",placeholder:"请输入密码",tabindex:"2",autocomplete:"on","show-password":"",onKeyup:w(D,["enter"])},null,8,["modelValue"])])),_:1})]),i("div",P,[u(f,{modelValue:g(Z).remember,"onUpdate:modelValue":r[2]||(r[2]=e=>g(Z).remember=e),style:{"font-size":"13px"}},{default:p((()=>[c(" 记住我 ")])),_:1},8,["modelValue"])]),i("div",U,[u(v,{bg:"",text:"",loading:g(K),type:"primary",size:"large",style:{width:"400px","font-size":"15px",background:"#EFF6FF",height:"42px",color:"#60A5FA","border-radius":"16px"},onClick:_(D,["prevent"])},{default:p((()=>[c(" 登录 ")])),_:1},8,["loading"])])])),_:1},8,["model","rules"]),[[m,"login"===g(G)]])]),i("div",j,[u(h)])]),i("div",E,[L,i("div",R,[c(n(g(F))+" ",1),C])])])}}});"function"==typeof q&&q(K);const M=y(K,[["__scopeId","data-v-a9f9683a"]]);export{M as default};
