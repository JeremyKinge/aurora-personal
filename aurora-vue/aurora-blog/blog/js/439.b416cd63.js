"use strict";(self["webpackChunkaurora_blog"]=self["webpackChunkaurora_blog"]||[]).push([[439],{4439:function(t,e,a){a.d(e,{T:function(){return Q},k:function(){return i.Z}});var i=a(2749),l=a(3396),r=a(7139),c=a(8111);const s={class:"article-container"},n={key:0,class:"article-tag"},o={key:1,class:"article-tag"},g={class:"article"},u={class:"article-thumbnail"},h={key:0,alt:""},w={key:1,src:c},d={class:"article-content"},p={key:0},k={key:2},m={key:3},y={key:4},v={key:2},_={key:4,class:"article-footer"},f={class:"flex flex-row items-center"},b=["src"],D={class:"text-ob-dim"},x={key:5,class:"article-footer"},z={class:"flex flex-row items-center mt-6"},C={class:"text-ob-dim mt-1"};function A(t,e,a,i,c,A){const T=(0,l.up)("svg-icon"),j=(0,l.up)("ob-skeleton"),W=(0,l.Q2)("lazy");return(0,l.wg)(),(0,l.iD)("div",s,[t.article.isTop?((0,l.wg)(),(0,l.iD)("span",n,[(0,l._)("b",null,[(0,l.Wm)(T,{"icon-class":"pin"}),(0,l.Uk)(" "+(0,r.zw)(t.t("settings.pinned")),1)])])):t.article.isFeatured?((0,l.wg)(),(0,l.iD)("span",o,[(0,l._)("b",null,[(0,l.Wm)(T,{"icon-class":"hot"}),(0,l.Uk)(" "+(0,r.zw)(t.t("settings.featured")),1)])])):(0,l.kq)("",!0),(0,l._)("div",g,[(0,l._)("div",u,[t.article.articleCover?(0,l.wy)(((0,l.wg)(),(0,l.iD)("img",h,null,512)),[[W,t.article.articleCover]]):((0,l.wg)(),(0,l.iD)("img",w)),(0,l._)("span",{class:"thumbnail-screen",style:(0,r.j5)(t.gradientBackground)},null,4)]),(0,l._)("div",d,[(0,l._)("span",null,[t.article.categoryName?((0,l.wg)(),(0,l.iD)("b",p,(0,r.zw)(t.article.categoryName),1)):((0,l.wg)(),(0,l.j4)(j,{key:1,tag:"b",height:"20px",width:"35px"})),t.article.tags&&t.article.tags.length>0?((0,l.wg)(),(0,l.iD)("ul",k,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.article.tags,(t=>((0,l.wg)(),(0,l.iD)("li",{key:t.id},[(0,l._)("em",null,"# "+(0,r.zw)(t.tagName),1)])))),128))])):t.article.tags&&t.article.tags.length<=0?((0,l.wg)(),(0,l.iD)("ul",m,[(0,l._)("li",null,[(0,l._)("em",null,"# "+(0,r.zw)(t.t("settings.default-tag")),1)])])):((0,l.wg)(),(0,l.iD)("ul",y,[t.article.tags?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(j,{key:0,count:2,tag:"li",height:"16px",width:"35px"}))]))]),t.article.articleTitle?((0,l.wg)(),(0,l.iD)("h1",{key:0,class:"article-title",onClick:e[0]||(e[0]=(...e)=>t.toArticle&&t.toArticle(...e)),"data-dia":"article-link"},[(0,l._)("a",null,[(0,l._)("span",null,(0,r.zw)(t.article.articleTitle),1),2==t.article.status?((0,l.wg)(),(0,l.j4)(T,{key:0,"icon-class":"lock",class:"lock-svg"})):(0,l.kq)("",!0)])])):((0,l.wg)(),(0,l.j4)(j,{key:1,tag:"h1",height:"3rem"})),t.article.articleContent?((0,l.wg)(),(0,l.iD)("p",v,(0,r.zw)(t.article.articleContent),1)):((0,l.wg)(),(0,l.j4)(j,{key:3,tag:"p",count:5,height:"16px"})),t.article.author&&t.article.createTime?((0,l.wg)(),(0,l.iD)("div",_,[(0,l._)("div",f,[(0,l._)("img",{class:"hover:opacity-50 cursor-pointer",src:t.article.author.avatar||"",alt:"author avatar",onClick:e[1]||(e[1]=e=>t.handleAuthorClick(t.article.author.website))},null,8,b),(0,l._)("span",D,[(0,l._)("strong",{class:"text-ob-normal pr-1.5 hover:text-ob hover:opacity-50 cursor-pointer",onClick:e[2]||(e[2]=e=>t.handleAuthorClick(t.article.author.website))},(0,r.zw)(t.article.author.nickname),1),(0,l.Uk)(" "+(0,r.zw)(t.t("settings.shared-on"))+" "+(0,r.zw)(t.t(`settings.months[${new Date(t.article.createTime).getMonth()}]`))+" "+(0,r.zw)(new Date(t.article.createTime).getDate())+", "+(0,r.zw)(new Date(t.article.createTime).getFullYear()),1)])])])):((0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("div",z,[(0,l.Wm)(j,{class:"mr-2",height:"28px",width:"28px",circle:!0}),(0,l._)("span",C,[(0,l.Wm)(j,{height:"20px",width:"150px"})])])]))])])])}var T=a(4870),j=a(7619),W=a(3560),N=a(2483),Z=a(5213),q=a(3184),F=(0,l.aZ)({name:"ArticleCard",props:["data"],setup(t){const e=(0,l.FN)()?.appContext.config.globalProperties,a=(0,j.q)(),i=(0,W.L)(),r=(0,N.tv)(),{t:c}=(0,Z.QT)(),s=t=>{""===t&&(t=window.location.href),window.open(t)},n=()=>{let a=!1;i.accessArticles.forEach((e=>{e==t.data.id&&(a=!0)})),2===t.data.status&&0==a?""===i.userInfo?e.$notify({title:"Warning",message:"该文章受密码保护,请登录后访问",type:"warning"}):q.Z.emit("changeArticlePasswordDialogVisible",t.data.id):r.push({path:"/articles/"+t.data.id})};return{gradientBackground:(0,l.Fl)((()=>({background:a.themeConfig.header_gradient_css}))),article:(0,T.BK)(t).data,handleAuthorClick:s,toArticle:n,t:c}}}),U=a(89);const H=(0,U.Z)(F,[["render",A],["__scopeId","data-v-2fb36001"]]);var Q=H},2866:function(t,e,a){a.d(e,{W:function(){return l}});var i=a(3766);const l=(0,i.Q_)("articleStore",{state:()=>({topArticle:"",featuredArticles:[],articles:[],categories:[],archives:[]}),actions:{}})},2749:function(t,e,a){a.d(e,{Z:function(){return U}});var i=a(3396),l=a(7139),r=a(8111);const c={class:"article-container"},s={key:0,class:"article-tag"},n={key:1,class:"article-tag"},o={class:"feature-article"},g={class:"feature-thumbnail"},u={key:0,class:"ob-hz-thumbnail"},h={key:1,class:"ob-hz-thumbnail",src:r},w={class:"feature-content"},d={key:0},p={key:1},k={key:2},m={key:4,class:"article-footer"},y={class:"flex flex-row items-center"},v=["src"],_={class:"text-ob-dim"},f={key:5,class:"article-footer"},b={class:"flex flex-row items-center mt-6"},D={class:"text-ob-dim mt-1"};function x(t,e,a,r,x,z){const C=(0,i.up)("svg-icon"),A=(0,i.up)("ob-skeleton"),T=(0,i.Q2)("lazy");return(0,i.wg)(),(0,i.iD)("div",c,[t.article.isTop?((0,i.wg)(),(0,i.iD)("span",s,[(0,i._)("b",null,[(0,i.Wm)(C,{"icon-class":"pin"}),(0,i.Uk)(" "+(0,l.zw)(t.t("settings.pinned")),1)])])):t.article.isfeatured?((0,i.wg)(),(0,i.iD)("span",n,[(0,i._)("b",null,[(0,i.Wm)(C,{"icon-class":"hot"}),(0,i.Uk)(" "+(0,l.zw)(t.t("settings.featured")),1)])])):(0,i.kq)("",!0),(0,i._)("div",o,[(0,i._)("div",g,[t.article.articleCover?(0,i.wy)(((0,i.wg)(),(0,i.iD)("img",u,null,512)),[[T,t.article.articleCover]]):((0,i.wg)(),(0,i.iD)("img",h)),(0,i._)("span",{class:"thumbnail-screen",style:(0,l.j5)(t.bannerHoverGradient)},null,4)]),(0,i._)("div",w,[(0,i._)("span",null,[t.article.categoryName?((0,i.wg)(),(0,i.iD)("b",d,(0,l.zw)(t.article.categoryName),1)):((0,i.wg)(),(0,i.j4)(A,{key:1,tag:"b",height:"20px",width:"35px"})),(0,i._)("ul",null,[t.article.tags&&t.article.tags.length>0?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(t.article.tags,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id},[(0,i._)("em",null,"# "+(0,l.zw)(t.tagName),1)])))),128)):t.article.tags&&t.article.tags.length<=0?((0,i.wg)(),(0,i.iD)("li",p,[(0,i._)("em",null,"# "+(0,l.zw)(t.t("settings.default-tag")),1)])):((0,i.wg)(),(0,i.j4)(A,{key:2,count:2,tag:"li",height:"16px",width:"35px"}))])]),t.article.articleTitle?((0,i.wg)(),(0,i.iD)("h1",{key:0,class:"article-title",onClick:e[0]||(e[0]=(...e)=>t.toArticle&&t.toArticle(...e)),"data-dia":"article-link"},[(0,i._)("a",null,[(0,i._)("span",null,(0,l.zw)(t.article.articleTitle),1),2==t.article.status?((0,i.wg)(),(0,i.j4)(C,{key:0,"icon-class":"lock",class:"lock-svg"})):(0,i.kq)("",!0)])])):((0,i.wg)(),(0,i.j4)(A,{key:1,tag:"h1",height:"3rem"})),t.article.articleContent?((0,i.wg)(),(0,i.iD)("p",k,(0,l.zw)(t.article.articleContent),1)):((0,i.wg)(),(0,i.j4)(A,{key:3,tag:"p",count:4,height:"20px"})),t.article?((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",y,[(0,i._)("img",{class:"hover:opacity-50 cursor-pointer",src:t.article.author.avatar,alt:"",onClick:e[1]||(e[1]=e=>t.handleAuthorClick(t.article.author.website))},null,8,v),(0,i._)("span",_,[(0,i._)("strong",{class:"text-ob-normal pr-1.5 hover:text-ob hover:opacity-50 cursor-pointer",onClick:e[2]||(e[2]=e=>t.handleAuthorClick(t.article.author.website))},(0,l.zw)(t.article.author.nickname),1),(0,i.Uk)(" "+(0,l.zw)(t.t("settings.shared-on"))+" "+(0,l.zw)(t.t(`settings.months[${new Date(t.article.createTime).getMonth()}]`))+" "+(0,l.zw)(new Date(t.article.createTime).getDate())+", "+(0,l.zw)(new Date(t.article.createTime).getFullYear()),1)])])])):((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",b,[(0,i.Wm)(A,{class:"mr-2",height:"28px",width:"28px",circle:!0}),(0,i._)("span",D,[(0,i.Wm)(A,{height:"20px",width:"150px"})])])]))])])])}var z=a(4870),C=a(7619),A=a(3560),T=a(2483),j=a(2866),W=a(5213),N=a(3184),Z=(0,i.aZ)({name:"HorizontalArticle",setup(){const t=(0,i.FN)()?.appContext.config.globalProperties,e=(0,C.q)(),a=(0,j.W)(),l=(0,A.L)(),r=(0,T.tv)(),{t:c}=(0,W.QT)(),s=t=>{""===t&&(t=window.location.href),window.open(t)},n=()=>{let e=!1;l.accessArticles.forEach((t=>{t==a.topArticle.id&&(e=!0)})),2==a.topArticle.status&&0==e?""===l.userInfo?t.$notify({title:"Warning",message:"该文章受密码保护,请登录后访问",type:"warning"}):N.Z.emit("changeArticlePasswordDialogVisible",a.topArticle.id):r.push({path:"/articles/"+a.topArticle.id})};return{bannerHoverGradient:(0,i.Fl)((()=>({background:e.themeConfig.header_gradient_css}))),article:(0,z.Vh)(a.$state,"topArticle"),handleAuthorClick:s,toArticle:n,t:c}}}),q=a(89);const F=(0,q.Z)(Z,[["render",x],["__scopeId","data-v-c1cc4b40"]]);var U=F}}]);