//<!--
//             Copyright obout inc       http://www.obout.com
//     

// false - when dragging show moving node itself without children.
// true - when dragging show moving node with children.
var show_with_children= true;

var o_O,o_o,o_Y=0,o_y=0,o_I= false ,o_i=null,o_A=null,tree_dd_path="",tree_dd_id="",o_a=0,o_E=0,o_e= true ,o_U=0,o_u=0,o_Z; function o_z(event){if (o_e== true){if (window.event){var event=window.event; o_a=event.x; o_E=event.y; }else {o_a=event.pageX; o_E=event.pageY; }o_e= false; return; }else {if (window.event){var event=window.event; o_U=event.x; o_u=event.y; }else {o_U=event.pageX; o_u=event.pageY; }}if ((Math.abs(o_U-o_a)>5) || (Math.abs(o_u-o_E)>5)){}else {return; }if (o_I== false)return; var o_X=document.compatMode=="BackCompat"?document.body: (document.documentElement || document.body); if (o_i==null){if (show_with_children== true){o_i=o_A.cloneNode( true); o_i.firstChild.firstChild.firstChild.firstChild.style.display="none"; if (o_i.firstChild.nextSibling!=null){o_i.firstChild.nextSibling.firstChild.firstChild.firstChild.style.display="none"; }}else {o_i=o_A.firstChild.cloneNode( true); document.body.appendChild(o_i); o_i.firstChild.firstChild.firstChild.style.display="none"; }document.body.appendChild(o_i); o_i.style.position="absolute"; o_i.style.zIndex="0"; o_i.style.filter="Alpha(Opacity='70',FinishOpacity='0',Style='1',StartX='0',StartY='0',FinishX='100',FinishY='100')"; o_i.style.opacity=.7; o_i.id="ob_drag"; if (window.event){o_Y=o_X.scrollLeft; o_y=o_X.scrollTop; }else {o_O=event.pageX; o_o=event.pageY; }}if (window.event){var event=window.event; o_i.style.left=event.x+o_Y-5; o_i.style.top=event.y+o_y-5; }else {o_i.style.left=(event.pageX-5)+"px"; o_i.style.top=(event.pageY-5)+"px"; }var top=o_x(o_Z); var bottom=top+o_Z.offsetHeight; if ((o_i.offsetTop-top)<024 && o_Z.scrollTop>0){o_Z.scrollTop=o_Z.scrollTop-6; }if ((bottom-o_i.offsetTop)<024){o_Z.scrollTop=o_Z.scrollTop+6; }var p=event?event.clientY:window.event.y; var o_W=window.innerHeight || document.body.clientHeight; var o_w=window.pageXOffset || o_X.scrollLeft; var o_V=window.pageYOffset || o_X.scrollTop; if (p<050){var td=o_V-top; td=td<014?td: 014; if (td>0){window.scrollTo(o_w,o_V-td); if (window.event){o_i.style.posTop+=td; o_y=o_X.scrollTop; }}}if ((o_W-p)<050){var o_v=bottom-(o_V+o_W); o_v=o_v<014?o_v: 014; if (o_v>0){window.scrollTo(o_w,o_V+o_v); if (window.event){o_i.style.posTop-=o_v; o_y=o_X.scrollTop; }}}}function ob_t10(event,o_T){

// EVENT. Before Drag start.

o_Z=document.getElementById(ob_tree_id); o_I= true; o_A=o_T.parentNode; document.onmousemove= function (o_t){o_z(o_t);} ; document.onmouseup= function (o_t){o_S(o_t);} ; document.onselectstart= function (){return false; } ; document.onmousedown= function (){return false; } ; }function ob_t12(){o_I= false; document.onmousemove=null; document.onselectstart= function (){return true; } ; document.onmousedown= function (){return true; } ; }function o_S(event){function o_s(){if (o_A.parentNode.childNodes.length==1){if (o_A.parentNode.parentNode.className!="ob_tree"){o_t=o_A.parentNode.parentNode.parentNode.parentNode.parentNode; if (o_t.parentNode.className=="ob_t2b")o_t.parentNode.className="ob_t2c"; if (o_t.className=="ob_t2b")o_t.className="ob_t2c"; if (o_A.parentNode.lastChild==o_A){o_t.firstChild.firstChild.firstChild.firstChild.firstChild.src=ob_style+"/hr_l.gif"; }else {o_t.firstChild.firstChild.firstChild.firstChild.firstChild.src=ob_style+"/hr.gif"; }o_t.removeChild(o_t.firstChild.nextSibling); }else {o_A.parentNode.removeChild(o_A); }}else {if (o_A.parentNode.lastChild==o_A){o_t=o_A.previousSibling.firstChild.firstChild.firstChild.firstChild.firstChild; if (o_t.className!="ob_d4"){o_t.src=o_R(o_t); o_t.parentNode.style.backgroundImage="none"; if (o_A.previousSibling.childNodes.length>1){o_A.previousSibling.firstChild.nextSibling.firstChild.firstChild.firstChild.style.backgroundImage="none"; }else {}}}}}var o_t,o_r,s,o_Q; o_e= true; if (o_i==null){return; }if (window.event){var event=window.event; var o_q=event.x+o_Y; var o_P=event.y+o_y; }else {var o_q=event.pageX; var o_P=event.pageY; }o_p=document.getElementById(ob_tree_id); do {o_p=o_p.parentNode; if (o_p!=null && o_p!=document.body){if (typeof(o_p.scrollLeft)!="undefined")o_q+=o_p.scrollLeft; if (typeof(o_p.scrollTop)!="undefined")o_P+=o_p.scrollTop; }else break; }while ( true); var o_N,o_n= false; o_i.style.display="none"; o_M=document.getElementsByTagName("TABLE"); for (i=0; i<o_M.length; i++){var top=o_x(o_M[i])-o_Z.scrollTop; var left=o_m(o_M[i])-o_Z.scrollLeft; if (o_M[i].tagName=="TABLE" && (o_P>=top && o_P<=o_M[i].offsetHeight+top) && (o_q>=left && o_q<=o_M[i].offsetWidth+left)){o_N=o_M[i]; if (o_N==o_A.firstChild){o_N=null;

alert("Can not move. The destination is the same as the source.");

}}}if (o_N!=null){if (o_N.parentNode.tagName=="DIV")if (o_N.firstChild.firstChild.childNodes.length==2)if (o_N.parentNode.parentNode.className=="ob_di2"){var o_L=o_A.firstChild.firstChild.firstChild.firstChild.nextSibling.nextSibling; var o_l=ob_elementBelongsToTree(o_N, true); if (!ob_getParentOfNode(o_L) && (o_l==ob_elementBelongsToTree(o_L, true))){o_N=null; }else if (ob_ev("OnBeforeNodeDrop") && typeof ob_OnBeforeNodeDrop!="undefined")if (!ob_OnBeforeNodeDrop(o_L.id,"root_"+o_l))o_N=null; else {o_t=o_A.firstChild.firstChild.firstChild.firstChild.firstChild; o_t.src=o_R(o_t); o_t.parentNode.style.backgroundImage="none"; o_A.firstChild.firstChild.firstChild.firstChild.style.backgroundImage="none"; if (o_A.childNodes.length==2){o_A.firstChild.nextSibling.firstChild.firstChild.firstChild.style.backgroundImage="none"; }o_s(); var o_t=o_N.parentNode.parentNode; if (o_t.childNodes.length>=2){if (o_t.lastChild.firstChild.nextSibling)o_t.lastChild.firstChild.nextSibling.firstChild.firstChild.firstChild.style.backgroundImage="url("+ob_style+"/vertical.gif)"; o_t.lastChild.firstChild.firstChild.firstChild.firstChild.style.backgroundImage="url("+ob_style+"/vertical.gif)"; var o_K=o_t.lastChild.firstChild.firstChild.firstChild.firstChild.firstChild; var s=o_K.src; var o_r=(s.length-6); var o_Q=s.substr(o_r,6); if (o_Q=="_l.gif"){o_Q=s.substr(0,o_r)+".gif"; o_K.src=o_Q; o_K.onclick= function (){ob_t21(this,"");} ; }}document.onmousemove=""; o_t.appendChild(o_A); tree_dd_id=tree_dd_id+"root_"+o_l+","+o_L.id+"|"; if (ob_ev("OnNodeDrop") && typeof ob_OnNodeDrop!="undefined")ob_OnNodeDrop(o_L.id,"root_"+o_l); o_N=null; }}}if (o_N!=null){if (o_N.parentNode.tagName=="DIV"){if (o_N.firstChild.firstChild.childNodes.length==3){if (o_N.firstChild.firstChild.firstChild.firstChild.tagName=="IMG"){s=o_N.firstChild.firstChild.firstChild.firstChild.src.toLowerCase(); o_r=(s.length-6); s=s.substr(o_r,6); if ((s=="ik.gif") || (s=="hr.gif") || (s=="_l.gif") || (s=="us.gif")){var o_k=o_N.parentNode.lastChild.firstChild.firstChild.lastChild.className; if ((o_k!="ob_t7") && (o_k!="none")){}else {

alert("Can not drop to root of dynamically loaded subtree.");

o_n= true; }}else {o_n= true; }}else {o_n= true; }}else {o_n= true; }}else {o_n= true; }}if (o_n== true)o_N=null; var o_J,o_j; if (o_N!=null){o_J=o_N.firstChild.firstChild.firstChild.nextSibling.nextSibling; o_j=o_A.firstChild.firstChild.firstChild.firstChild.nextSibling.nextSibling; o_t=o_J; tree_dd_path=""; o_H(o_t); var o_h=tree_dd_path.split("|"); for (i=0; i<o_h.length; i++){if (o_h[i]==o_j.id){o_N=null;

alert("Can not move. The destination is under the source.");

}}if (ob_ev("OnBeforeNodeDrop") && typeof ob_OnBeforeNodeDrop!="undefined")if (!ob_OnBeforeNodeDrop(o_j.id,o_J.id))o_N=null; }if (o_N!=null){if (o_N.parentNode.childNodes.length>1){if (o_N.nextSibling==o_A.parentNode.parentNode.parentNode.parentNode){o_N=null;

alert("Can not move. The destination is the same as the source.");

}}}if (o_N!=null){if (sNoDrop!=""){var a=new Array; a=sNoDrop.split(","); if (a.length>0){for (i=0; i<a.length; i++){if (o_J.id==a[i]){o_N=null;

alert("Can not move. The destination folder is restricted.");

}}}}}o_i.style.display="block"; if (o_N!=null){o_t=o_A.firstChild.firstChild.firstChild.firstChild.firstChild; o_t.src=o_R(o_t); o_t.parentNode.style.backgroundImage="none"; o_A.firstChild.firstChild.firstChild.firstChild.style.backgroundImage="none"; if (o_A.childNodes.length==2){o_A.firstChild.nextSibling.firstChild.firstChild.firstChild.style.backgroundImage="none"; }if (o_N.parentNode.childNodes.length==1){o_t=o_N.firstChild.firstChild.firstChild.firstChild; o_t.src=ob_style+"/minus_l.gif"; o_t.onclick= function (){ob_t21(this,"");} ; o_N.parentNode.className="ob_t2b"; o_t=o_N.parentNode.appendChild(document.createElement("TABLE")); if (document.all){o_t.border="0"; o_t.cellPadding="0"; o_t.cellSpacing="0"; }else {o_t.setAttribute("border","0"); o_t.setAttribute("cellpadding","0"); o_t.setAttribute("cellspacing","0"); }o_t.appendChild(document.createElement("tbody")); var o_K=o_t.firstChild.appendChild(document.createElement("TR")); o_t=o_K.appendChild(document.createElement("TD")); if (o_N.parentNode.parentNode.lastChild!=o_N.parentNode){o_t.style.backgroundImage="url("+ob_style+"/vertical.gif)"; }o_t.innerHTML="<div class=ob_d5></div>"; o_t=o_K.appendChild(document.createElement("TD")); o_t.className="ob_t5"; }else {o_t=o_N.nextSibling.firstChild.firstChild.firstChild.nextSibling; if (o_t.lastChild.childNodes.length>1){o_t.lastChild.firstChild.nextSibling.firstChild.firstChild.firstChild.style.backgroundImage="url("+ob_style+"/vertical.gif)"; o_t.lastChild.firstChild.firstChild.firstChild.firstChild.style.backgroundImage="url("+ob_style+"/vertical.gif)"; o_K=o_t.lastChild.firstChild.firstChild.firstChild.firstChild.firstChild; s=o_K.src; o_r=(s.length-6); o_Q=s.substr(o_r,6); if (o_Q=="_l.gif"){o_Q=s.substr(0,o_r)+".gif"; o_K.src=o_Q; o_K.onclick= function (){ob_t21(this,"");} ; }}else {o_K=o_t.lastChild.firstChild.firstChild.firstChild.firstChild.firstChild; o_K.src=ob_style+"/hr.gif"; }}var o_G=o_t; document.body.removeChild(o_i); var ob_dd_id=o_A.firstChild.firstChild.firstChild.firstChild.nextSibling.nextSibling.id; tree_dd_id=tree_dd_id+o_J.id+","+ob_dd_id+"|"; o_s(); document.onmousemove=""; o_t=o_N.firstChild.firstChild.firstChild.firstChild; o_r=(o_t.src.length-8); s=o_t.src.substr(o_r,8); if ((s=="usik.gif") || (s=="ik_l.gif")){o_t.onclick(); }o_G.appendChild(o_A); if (ob_ev("OnNodeDrop") && typeof ob_OnNodeDrop!="undefined")ob_OnNodeDrop(ob_dd_id,o_J.id); }else {document.body.removeChild(document.getElementById("ob_drag")); }o_i=null; o_I= false; document.onselectstart= function (){return true; } ; document.onmousedown= function (){return true; } ; document.onmouseup=null;

// EVENT. After Drag & Drop finished.

}function o_m(o_g){var o_F=0; if (o_g.offsetParent){while (o_g.offsetParent){o_F+=o_g.offsetLeft; o_g=o_g.offsetParent; }}else if (o_g.x)o_F+=o_g.x; return o_F; }function o_x(o_f){var o_F=0; if (o_f.offsetParent){while (o_f.offsetParent){o_F+=o_f.offsetTop; o_f=o_f.offsetParent; }}else if (o_f.y)o_F+=o_f.y; return o_F; }function ob_t18(s){if (document.all){var o_M=s.getElementsByTagName("IMG"); for (var i=0; i<o_M.length; i++){o_M[i].ondragstart= function (){return false; } ; }}var o_t; var o_M=s.getElementsByTagName("DIV"); for (i=0; i<o_M.length; i++){var item=o_M[i]; var o_D= false; if (item.className==""){try {var o_d=item.firstChild.firstChild.firstChild; if ((o_d.childNodes.length==3) && (o_d.lastChild.className=="ob_t2"))o_D= true; }catch (o_t){}}if ((item.className=="ob_t2b") || (item.className=="ob_t2c") || o_D){o_t=item.firstChild; if (document.all){o_t.onmousedown=new Function("ob_t10(null,this);"); o_t.onmouseup=new Function("ob_t12();"); }else {o_t.setAttribute("onmousedown","ob_t10(event,this);"); o_t.setAttribute("onmouseup","ob_t12();"); }}}}function o_H(o_t){if (o_t.parentNode.parentNode.parentNode.parentNode.parentNode.className=="ob_di2"){return; } ; o_t=o_t.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.firstChild.firstChild.nextSibling.nextSibling; tree_dd_path=o_t.id+"|"+tree_dd_path; o_H(o_t); }function ob_tnodrag(s){if (s==""){return; }var a=new Array; a=s.split(","); for (var i=0; i<a.length; i++){o_t=document.getElementById(a[i]).parentNode.parentNode.parentNode; o_t.onmousedown= function (){return false; } ; o_t.onmouseup= function (){return false; } ; }}function o_R(o_t){if (!o_t.onclick)o_t.onclick= function (){ob_t21(this,"");} ; var s="",o_r=0,o_Q=""; s=o_t.src; o_r=(s.length-6); o_Q=s.substr(o_r,6); if (o_Q!="_l.gif"){o_Q=s.substr(0,o_r+2)+"_l.gif"; return o_Q; }else {return s; }}var ob_sn2=""; function ob_multiselect(o_C,o_c){if (o_C.id=="")return; if (!o_c)o_c=window.event; if (!o_c)return; var o_B= false; if (o_c!=null)o_B=o_c.ctrlKey; if (o_B==0){if (o_C.id!=""){ob_unselectAllNodes(); ob_sn2=o_C.id; if (typeof ob_op2!="undefined"){ob_op2.className="ob_t2"; ob_op2.parentNode.parentNode.parentNode.style.backgroundColor="transparent"; }o_C.className="ob_t3"; }}else {var o_b;o_b=ob_sn2.split("|");o_o0=o_b.length;if (o_o0>0){o_O0=-1; for (i=0; i<o_o0; i++){if (o_b[i]==o_C.id){o_O0=i; break; }}if (o_O0>-1){o_b.splice(o_O0,1); if (o_b.length>0){tree_selected_id=o_b[o_b.length-1]; ob_op2=eval("document.getElementById('"+o_b[o_b.length-1]+"')"); }else {tree_selected_id=""; ob_op2=undefined; }ob_sn2=o_b.join("|"); o_C.className="ob_t2"; o_l0=o_C.parentNode.parentNode.parentNode; o_l0.style.backgroundColor="transparent"; return; }else {if (o_C.id!="")ob_sn2+=((ob_sn2.length>0)?"|": "")+o_C.id; }}}}function ob_unselectAllNodes(){try {if (typeof(ob_sn2)=="undefined")return; var o_i0=""; if (typeof ob_sn2!="undefined")o_i0=ob_sn2; var o_b; if (o_i0.length>0){if (o_i0.indexOf("|")>-1){o_b=o_i0.split("|");o_o0=o_b.length; if (o_o0>0){var i=0; var o_T; for (i=0; i<o_o0; i++){o_T=eval("document.getElementById('"+o_b[i]+"')"); o_T.className="ob_t2"; o_l0=o_T.parentNode.parentNode.parentNode; o_l0.style.backgroundColor="transparent"; }}}}}catch (o_t){}}

// string containing previous node content
var prevNodeContent;

var tree_edit_id="";

var o_I0= false; o_o1= false; document.onkeydown= function (o_t){o_O1(o_t);} ; if (document.layers)try {document.registerEvents(Event.KEYDOWN);}catch (o_t){} ; function ob_afterNodeEditing(name){if (ob_ev("OnNodeEdit") && typeof ob_OnNodeEdit!="undefined")ob_OnNodeEdit(tree_selected_id,name,prevNodeContent); }function o_O1(o_t){if (!o_t)o_t=window.event; if (o_o1)return; if (typeof(tree_selected_id)!="undefined")o_l1=document.getElementById(tree_selected_id); if (typeof(o_l1)!="undefined" && o_l1!=null){if (!o_I0){o_i1=document.createElement("input"); o_l1.appendChild(o_i1); try {o_i1.focus(); }catch (o_t){}o_l1.removeChild(o_i1); o_I0= true; o_t.cancelBubble= true; o_t.returnValue= false; if (o_t.stopPropagation)o_t.stopPropagation(); }if (typeof(ob_tree_keynav_enable)!="undefined" && ob_tree_keynav_enable){var blockEvent= false; if (o_t.keyCode==046){tree_node_exp_col= true; o_I1=ob_getNodeUp(o_l1, false); if (o_I1!=null)ob_t22(o_I1); tree_node_exp_col= false; blockEvent= true; }else if (o_t.keyCode==050){tree_node_exp_col= true; o_o2=ob_getNodeDown(o_l1, false); if (o_o2!=null)ob_t22(o_o2); tree_node_exp_col= false; blockEvent= true; }else if (o_t.keyCode==045){tree_node_exp_col= true; if (ob_hasChildren(o_l1) && ob_isExpanded(o_l1)){o_l1.parentNode.firstChild.firstChild.onclick(); }else {parentNode=ob_getParentOfNode(o_l1); if (parentNode!=null)ob_t22(parentNode); }tree_node_exp_col= false; blockEvent= true; }else if (o_t.keyCode==047){tree_node_exp_col= true; if (ob_hasChildren(o_l1)){if (!ob_isExpanded(o_l1)){o_l1.parentNode.firstChild.firstChild.onclick(); }else {firstChild=ob_getFirstChildOfNode(o_l1); if (firstChild!=null)ob_t22(firstChild); }}tree_node_exp_col= false; blockEvent= true; }if (blockEvent){if (document.all){o_t.cancelBubble= true; o_t.returnValue= false; if (o_t.stopPropagation)o_t.stopPropagation(); }}}if (typeof(ob_tree_editnode_enable)!="undefined" && ob_tree_editnode_enable){if (o_t.keyCode==015 || o_t.keyCode==0161){ob_t22(o_l1); }}}}function o_O2(o_t){if (!o_t)o_t=window.event; o_l1=document.getElementById(tree_selected_id); if (o_l1!=null){if (o_t.keyCode==015){if (o_l1.childNodes.length>0){o_l2=o_l1; try {if (ob_hasChildren(o_l1) && o_l1.childNodes[0].nodeName.toLowerCase()!="input")o_l2=o_l1.childNodes[0]; }catch (o_t){}if (o_l2.childNodes[0]!=null && o_l2.childNodes[0].nodeName.toLowerCase()=="input"){var name=o_l2.childNodes[0].value; if (name.length==0 || name.indexOf(":")!=-1 || name.indexOf("|")!=-1 || name.indexOf(",")!=-1 || name.indexOf("<")!=-1 || name.indexOf(">")!=-1){o_l1.childNodes[0].onblur=null;

alert("The node name cannot be empty\nand\nIt cannot contain the following characters : | , \x3c >");

o_l2.childNodes[0].value=prevNodeContent; try {o_l2.childNodes[0].focus(); }catch (o_t){}try {o_i2=o_l2.childNodes[0].ownerDocument.selection.createRange().duplicate(); o_i2.moveStart("textedit",-1);o_i2.moveEnd("textedit"); o_i2.select(); }catch (o_t){}o_l2.childNodes[0].onblur= function (){o_I2( true);} ; o_o1= true; }else {o_l2.removeChild(o_l2.childNodes[0]); o_l2.innerHTML=name; o_l2.className="ob_t3"; o_o1= false; if (name!=prevNodeContent){tree_edit_id+=tree_selected_id+":"+name+"|"; ob_afterNodeEditing(name); }}}}o_t.cancelBubble= true; o_t.returnValue= false; if (o_t.stopPropagation)o_t.stopPropagation(); }if (o_t.keyCode==033){o_I2( false); }else {}}}function o_I2(o_o3){o_l1=document.getElementById(tree_selected_id); if (o_l1!=null){if (o_l1.childNodes.length>0){o_l2=o_l1; try {if (ob_hasChildren(o_l1) && o_l1.childNodes[0].nodeName.toLowerCase()!="input")o_l2=o_l1.childNodes[0]; }catch (o_t){}if (o_l2.childNodes[0]!=null && o_l2.childNodes[0].nodeName.toLowerCase()=="input"){var name=o_l2.childNodes[0].value; o_l2.removeChild(o_l2.childNodes[0]); o_l2.innerHTML=o_o3?name:prevNodeContent; o_l2.className="ob_t3"; o_o1= false; if (o_o3 && (name!=prevNodeContent)){tree_edit_id+=tree_selected_id+":"+name+"|"; ob_afterNodeEditing(name); }}}}}function ob_attemptStartEditing(o_C){if ((typeof(tree_node_exp_col)=="undefined" || (typeof(tree_node_exp_col!="undefined") && !tree_node_exp_col)) && typeof(o_o1)!="undefined" && typeof(ob_tree_editnode_enable)!="undefined" && ob_tree_editnode_enable){if (o_C.id==tree_selected_id){if (typeof(ob_noedit)!="undefined" && ob_noedit!=""){var a=new Array; a=ob_noedit.replace(" ","").split(","); if (a.length>0){for (i=0; i<a.length; i++){if (a[i]==o_C.id){alert("Can't edit. The node is marked as not editable."); return; }}}}if ((!o_o1) && (ob_ev("OnBeforeNodeEdit") && typeof ob_OnBeforeNodeEdit!="undefined"))if (!ob_OnBeforeNodeEdit(o_C.id))return; if (o_C.childNodes.length>0){if (o_l1==null)o_l1=document.getElementById(tree_selected_id); o_l2=o_l1; try {if (ob_hasChildren(o_l1) && o_l1.childNodes[0].nodeName.toLowerCase()!="#text")o_l2=o_l1.childNodes[0]; }catch (o_t){}if (o_l2.childNodes[0]!=null && o_l2.childNodes[0].nodeName.toLowerCase()=="#text"){prevNodeContent=o_l2.childNodes[0].nodeValue; var o_O3=document.createElement("input"); o_O3.setAttribute("type","text"); o_O3.setAttribute("value",prevNodeContent); o_O3.id=o_C.id+"_txtBox"; o_O3.style.borderWidth=0; o_O3.style.width=o_C.offsetWidth+036; o_O3.style.backgroundColor="transparent"; o_O3.className=o_C.className; while (o_l2.childNodes.length>0)o_l2.removeChild(o_l2.childNodes[0]); o_l2.appendChild(o_O3); o_O3.onkeydown= function (o_t){o_O2(o_t);} ; o_O3.onblur= function (){o_I2( true);} ; try {o_O3.focus(); }catch (o_t){}try {o_i2=o_O3.ownerDocument.selection.createRange().duplicate(); o_i2.moveStart("textedit",-1);o_i2.moveEnd("textedit"); if (o_i2.htmlText.toLowerCase().indexOf("body")==-1)o_i2.select(); else {try {o_O3.focus(); }catch (o_t){}}}catch (o_t){}o_o1= true; }}}}}function ob_attemptEndEditing(o_C){o_l1=o_C; if (typeof(o_l1)!="undefined" && typeof(o_o1)!="undefined" && typeof(ob_tree_editnode_enable)!="undefined" && ob_tree_editnode_enable){o_l2=o_l1; try {if (ob_hasChildren(o_l1) && o_l1.childNodes[0].nodeName.toLowerCase()!="input")o_l2=o_l1.childNodes[0]; }catch (o_t){}if (o_l2.childNodes.length>0){if (o_l2.childNodes[0]!=null && o_l2.childNodes[0].nodeName.toLowerCase()=="input"){if (o_l2.id!=tree_selected_id){var name=o_l2.childNodes[0].value; if (name.length==0 || name.indexOf(":")!=-1 || name.indexOf("|")!=-1 || name.indexOf(",")!=-1 || name.indexOf("<")!=-1 || name.indexOf(">")!=-1){alert("The node name cannot be empty\nand\nIt cannot contain the following characters : | , \x3c >"); o_l2.childNodes[0].value=prevNodeContent; try {o_l2.childNodes[0].focus(); }catch (o_t){}try {o_i2=o_l2.childNodes[0].ownerDocument.selection.createRange().duplicate(); o_i2.moveStart("textedit",-1);o_i2.moveEnd("textedit"); o_i2.select(); }catch (o_t){}o_o1= true; return; }o_l2.removeChild(o_l2.childNodes[0]); o_l2.innerHTML=name; o_o1= false; if (name!=prevNodeContent){tree_edit_id+=tree_selected_id+":"+name+"|"; ob_afterNodeEditing(name); }}}}}}
//-->