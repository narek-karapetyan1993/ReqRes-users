"use strict";(self.webpackChunkreqres_users=self.webpackChunkreqres_users||[]).push([[196],{196:function(e,s,r){r.r(s),r.d(s,{default:function(){return j}});var a=r(4740),n=r(5383),t=r(1792),i=r(8988),l=r(4628),c=r(4600),o=r(2791),u=r(1989),m={usersList:"Home_usersList__fz1vZ",moreBlock:"Home_moreBlock__3CjFO",moreBtn:"Home_moreBtn__y72Lz"},_=r(1087),d={item:"User_item__CkDVw",avatar:"User_avatar__0D-Ff",name:"User_name__s2dGB",like:"User_like__VnXk-",likeBtn:"User_likeBtn__6N0Nz",info:"User_info__H5Qdw"},k=r(184);function f(e){var s=e.user,r=(0,a.T)();return(0,k.jsxs)("li",{className:d.item,children:[(0,k.jsx)("img",{className:d.avatar,src:s.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),(0,k.jsxs)("h2",{className:d.name,children:[s.first_name," ",s.last_name]}),(0,k.jsx)("div",{className:d.like,children:(0,k.jsx)("button",{className:d.likeBtn,type:"button",onClick:function(){r((0,t.vL)(s.id))},children:(0,k.jsx)(c.J,{name:l.Y.like,color:s.liked?l.L.violet:l.L.none})})}),(0,k.jsx)(_.rU,{className:d.info,to:"/ReqRes-users/users/".concat(s.id)})]})}function j(){var e=(0,a.T)(),s=(0,a.C)(t.YN).users,r=(0,a.C)(n.Hz).token;return(0,o.useEffect)((function(){""===r.token?(0,u.uX)("/ReqRes-users/register"):void 0===localStorage.usersData&&0===s.data.length&&e((0,i.R)(0))}),[e,r.token,s]),(0,k.jsx)("div",{className:m.wrapper,children:(0,k.jsxs)("div",{className:"container",children:[(0,k.jsx)("ul",{className:m.usersList,children:s.data.map((function(e){return(0,k.jsx)(f,{user:e},e.id)}))}),s.page<s.total_pages&&(0,k.jsx)("div",{className:m.moreBlock,children:(0,k.jsxs)("button",{className:m.moreBtn,onClick:function(){return e((0,i.R)(s.page+1))},children:["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435 ",(0,k.jsx)(c.J,{name:l.Y.arrow})]})})]})})}}}]);
//# sourceMappingURL=196.b94763c4.chunk.js.map