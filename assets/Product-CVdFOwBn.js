import{_ as u,c as p,o as r,w as g,T as m,a as c,b as t,t as a,d,n as f}from"./index-CRmp6JOh.js";const h={name:"ProductPage",data(){return{product:null}},beforeMount(){fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`).then(o=>o.json()).then(o=>{this.product=o,this.$nextTick(()=>this.putRatingOnBooks())})},methods:{putRatingOnBooks(){const o=this.product.rating.rate,s=document.getElementById(`r-${this.product.id}`);if(s){const l=s.querySelectorAll(".rating-star"),i=Math.round(o*2)/2;l.forEach((e,n)=>{n<i&&e.classList.add("filled")})}}}},x={key:0,class:"bg-black h-auto sm:h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] flex justify-center items-center"},_={class:"p-10 hover:scale-105 justify-self-center"},v=["src"],b={class:"text-black p-10"},k={class:"text-3xl mb-5 border-b-2 p-2 pl-0"},y={class:"text-xl mb-5"},B={class:"grid grid-cols-1 md:grid-cols-2"},w={class:"w-fit"},C=["id"],S={class:"rating-count text-2xl"},j={class:"text-4xl mb-5"};function E(o,s,l,i,e,n){return r(),p(m,{"enter-active-class":"duration-300 ease-out","enter-from-class":"transform opacity-0 scale-75","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-200 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-75"},{default:g(()=>[e.product?(r(),c("div",x,[t("div",{class:f(`${e.product?"-left-0 relative":"-left-full"} transition-all duration-1000 absolute max-w-5xl h-full md:h-auto grid grid-cols-1 md:grid-cols-2 bg-white`)},[t("div",_,[t("img",{src:e.product.image,class:"max-h-[400px]",alt:"product-image"},null,8,v)]),t("div",b,[t("h3",k,a(e.product.title),1),t("p",y,a(e.product.description),1),t("div",B,[t("div",w,[e.product.rating.rate?(r(),c("div",{key:0,class:"rating-container text-[24px] flex",id:`r-${e.product.id}`},[s[0]||(s[0]=t("span",{class:"rating-star"},null,-1)),s[1]||(s[1]=t("span",{class:"rating-star"},null,-1)),s[2]||(s[2]=t("span",{class:"rating-star"},null,-1)),s[3]||(s[3]=t("span",{class:"rating-star"},null,-1)),s[4]||(s[4]=t("span",{class:"rating-star"},null,-1)),t("span",S,"("+a(e.product.rating.count)+")",1)],8,C)):d("",!0),t("div",j,"$"+a(e.product.price),1)]),s[5]||(s[5]=t("button",{class:"inline-block p-3 bg-black text-white text-2xl"}," Add to cart ",-1))])])],2)])):d("",!0)]),_:1})}const T=u(h,[["render",E],["__scopeId","data-v-ce2c6b3c"]]);export{T as default};
