import{P as o}from"./PlaceCard-abc1f240.js";import{u as c}from"./placesStore-196209cc.js";import{e as n,_ as l,r as p,o as e,c as a,F as i,f as m,g as f}from"./index-b5729b15.js";const u=n({name:"PlaceList",setup(){return{getPlacesByCategory:c().getPlacesByCategory}},components:{PlaceCard:o},computed:{placesArray(){if(typeof this.$route.params.placeList=="string")return this.getPlacesByCategory(this.$route.params.placeList)}}}),_={class:"place_list flex flex-wrap gap-4"};function d(t,g,y,P,C,B){const s=p("PlaceCard");return e(),a("div",_,[(e(!0),a(i,null,m(t.placesArray,r=>(e(),f(s,{placeInfo:r},null,8,["placeInfo"]))),256))])}const x=l(u,[["render",d]]);export{x as default};