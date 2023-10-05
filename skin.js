// Garden Gnome Software - Skin
// Pano2VR 7.0.6/20004
// Filename: Simplex-NoFullscreen.ggsk
// Generated 2023-10-05T14:35:17

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 18px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((258px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 258px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCAgICBjLTAuNDQyLDAuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQuOTM4LTUuNDgxbDQuOTM4LDUuNDgx'+
			'ICAgIGMwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSAgICBDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiAgICAgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3Lj'+
			'AyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4z'+
			'OTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4ICAgIGMtMC40NDIsMC40OTEtMC40MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEgICAgYzAuMjM2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41ICAgIEM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLj'+
			'Q5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6ICAgICBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3'+
			'LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4ICAgIGMtMC40NDIsMC40OTEtMC40MDMsMS4yNDgsMC4wODgsMS42ODlj'+
			'MC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEgICAgYzAuMjM2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41ICAgIEM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6ICAgICBNMjMuMTQ3LDIzLjE0NmMtMS'+
			'44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zv'+
			'cm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCAgICBjLTAuNDQyLDAuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQuOTM4LTUuNDgxbDQuOTM4LDUuNDgxICAgIGMwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMD'+
			'IsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSAgICBDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiAgICAgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMx'+
			'NCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.onmouseover=function (e) {
			me._up__img.style.visibility='hidden';
			me._up__imgo.style.visibility='inherit';
			me.elementMouseOver['up']=true;
		}
		me._up.onmousedown=function (e) {
			me.elementMouseDown['up']=true;
		}
		me._up.onmouseup=function (e) {
			me.elementMouseDown['up']=false;
		}
		me._up.onmouseout=function (e) {
			me._up__img.style.visibility='inherit';
			me._up__imgo.style.visibility='hidden';
			me.elementMouseDown['up']=false;
			me.elementMouseOver['up']=false;
		}
		me._up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['up']) {
				player.changeTiltLog(1,true);
			}
			if (me.elementMouseOver['up']) {
				me._up__img.style.visibility='hidden';
				me._up__imgo.style.visibility='inherit';
				me.elementMouseOver['up']=true;
			}
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._up);
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODggICAgYy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYsMC44ODktMC4zOTZsNS44MjctNi40'+
			'NjggICAgYzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5QzIyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYgICAgYy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgIC'+
			'BjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgogPGc+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODkt'+
			'MC4wODggICAgYy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYsMC44ODktMC4zOTZsNS44MjctNi40NjggICAgYzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5QzIyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy'+
			'41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYgICAgYy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMjAuOTA4LDEzLjAwN2wtNC45MzgsNS40ODFsLTQuOTM4LTUuNDgxYy0wLjQ0My0wLjQ5MS0xLjE5OS0wLjUzMS0xLjY4OS0wLjA4OCAgICBjLTAuNDkxLDAuNDQyLTAuNTMsMS4xOTktMC4wODgsMS42ODlsNS44MjcsNi40NjhjMC4yMjYsMC4y'+
			'NSwwLjU1MSwwLjM5NiwwLjg4OSwwLjM5NnMwLjY2My0wLjE0NiwwLjg4OS0wLjM5Nmw1LjgyNy02LjQ2OCAgICBjMC40NDItMC40OTEsMC40MDItMS4yNDgtMC4wODgtMS42ODlDMjIuMTA2LDEyLjQ3NywyMS4zNSwxMi41MTcsMjAuOTA4LDEzLjAwN3ogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NiAgICBjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS'+
			'4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJh'+
			'bnNsYXRlKC0xNiwtMTYpIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yMC45MDgsMTMuMDA3bC00LjkzOCw1LjQ4MWwtNC45MzgtNS40ODFjLTAuNDQzLTAuNDkxLTEuMTk5LTAuNTMxLTEuNjg5LTAuMDg4ICAgIGMtMC40OTEsMC40NDItMC41MywxLjE5OS0wLjA4OCwxLjY4OWw1LjgyNyw2LjQ2OGMwLjIyNiwwLjI1LDAuNTUxLDAuMzk2LDAuODg5LDAuMzk2czAuNjYzLTAuMTQ2LDAuODg5LTAuMzk2bDUuODI3LTYuNDY4ICAgIGMwLjQ0Mi0wLjQ5MSwwLjQwMi0xLjI0OC0wLjA4OC0xLjY4OUMyMi4xMDYsMTIuNDc3LDIxLjM1LDEyLjUxNywyMC45MDgsMTMuMDA3eiBNMTYsMy41Qz'+
			'kuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2ICAgIGMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4x'+
			'Myw3LjE0NywyLjk2MSAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.onmouseover=function (e) {
			me._down__img.style.visibility='hidden';
			me._down__imgo.style.visibility='inherit';
			me.elementMouseOver['down']=true;
		}
		me._down.onmousedown=function (e) {
			me.elementMouseDown['down']=true;
		}
		me._down.onmouseup=function (e) {
			me.elementMouseDown['down']=false;
		}
		me._down.onmouseout=function (e) {
			me._down__img.style.visibility='inherit';
			me._down__imgo.style.visibility='hidden';
			me.elementMouseDown['down']=false;
			me.elementMouseOver['down']=false;
		}
		me._down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['down']) {
				player.changeTiltLog(-1,true);
			}
			if (me.elementMouseOver['down']) {
				me._down__img.style.visibility='hidden';
				me._down__imgo.style.visibility='inherit';
				me.elementMouseOver['down']=true;
			}
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._down);
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwQzIyLjkwMywzLjUwMSwyOC40OTksOS4wOTYsMjguNSwxNmwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNNS44OTIsMTZjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2'+
			'MSw3LjE0NmwwLDAgICAgYzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTQsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NCwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMSwxMC42ODYsNS44OTMsMTMuMjA1LDUuODkyLDE2TDUuODkyLDE2TDUuODkyLDE2eiIvPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41Ii'+
			'BzdHJva2U9IiMzQzNDM0MiIGQ9Ik0xNy4zOTEsMjIuNjg2bC02LjQ2OC01LjgyN2MtMC4yNS0wLjIyNi0wLjM5Ni0wLjU1Mi0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSAgICBsMCwwbDYuNDY4LTUuODI2YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5LDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtNS40ODEsNC45MzhsNS40ODEsNC45MzhsMCwwICAgIGMwLjQ5LDAuNDQyLDAuNTMsMS4xOTgsMC4wODgsMS42ODlsMCwwYy0wLjIzNiwwLjI2My0wLjU2MiwwLjM5Ni0wLjg4OSwwLjM5NmwwLDBDMTcuOTA2'+
			'LDIyLjk5MywxNy42MiwyMi44OTEsMTcuMzkxLDIyLjY4NiAgICBMMTcuMzkxLDIyLjY4NnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMEMyMi45MDMsMy41MDEsMjguNDk5LDkuMDk2LDI4LjUsMTZsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTUuODkyLDE2YzAsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMC'+
			'wwICAgIGMxLjgzMywxLjgzMSw0LjM1MywyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk0LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTQsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjEsMTAuNjg2LDUuODkzLDEzLjIwNSw1Ljg5MiwxNkw1Ljg5MiwxNkw1Ljg5MiwxNnoiLz4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZG'+
			'RkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTcuMzkxLDIyLjY4NmwtNi40NjgtNS44MjdjLTAuMjUtMC4yMjYtMC4zOTYtMC41NTItMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkgICAgbDAsMGw2LjQ2OC01LjgyNmMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTUuNDgxLDQuOTM4bDUuNDgxLDQuOTM4bDAsMCAgICBjMC40OSwwLjQ0MiwwLjUzLDEuMTk4LDAuMDg4LDEuNjg5bDAsMGMtMC4yMzYsMC4yNjMtMC41NjIsMC4zOTYtMC44ODksMC4zOTZsMCwwQz'+
			'E3LjkwNiwyMi45OTMsMTcuNjIsMjIuODkxLDE3LjM5MSwyMi42ODYgICAgTDE3LjM5MSwyMi42ODZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTAzLDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwz'+
			'LjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE01Ljg5MiwxNmMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMCAgICBjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NCw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk0LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIxLDEwLjY4Niw1Ljg5MywxMy4yMD'+
			'UsNS44OTIsMTZMNS44OTIsMTZMNS44OTIsMTZ6Ii8+CiAgPHBhdGggZD0iTTE3LjM5MSwyMi42ODZsLTYuNDY4LTUuODI3Yy0wLjI1LTAuMjI2LTAuMzk2LTAuNTUyLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsNi40NjgtNS44MjZjMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDksMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC01LjQ4MSw0LjkzOGw1LjQ4MSw0LjkzOGwwLDAgICAgYzAuNDksMC40NDIsMC41MywxLjE5OCwwLjA4OCwxLjY4OWwwLDBjLTAuMjM2LDAuMjYzLTAuNTYyLDAuMzk2'+
			'LTAuODg5LDAuMzk2bDAsMEMxNy45MDYsMjIuOTkzLDE3LjYyLDIyLjg5MSwxNy4zOTEsMjIuNjg2ICAgIEwxNy4zOTEsMjIuNjg2eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTAzLDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQz'+
			'kuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE01Ljg5MiwxNmMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMCAgICBjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NCw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk0LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIxLDEwLjY4'+
			'Niw1Ljg5MywxMy4yMDUsNS44OTIsMTZMNS44OTIsMTZMNS44OTIsMTZ6Ii8+CiAgPHBhdGggZD0iTTE3LjM5MSwyMi42ODZsLTYuNDY4LTUuODI3Yy0wLjI1LTAuMjI2LTAuMzk2LTAuNTUyLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsNi40NjgtNS44MjZjMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDksMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC01LjQ4MSw0LjkzOGw1LjQ4MSw0LjkzOGwwLDAgICAgYzAuNDksMC40NDIsMC41MywxLjE5OCwwLjA4OCwxLjY4OWwwLDBjLTAuMjM2LDAuMj'+
			'YzLTAuNTYyLDAuMzk2LTAuODg5LDAuMzk2bDAsMEMxNy45MDYsMjIuOTkzLDE3LjYyLDIyLjg5MSwxNy4zOTEsMjIuNjg2ICAgIEwxNy4zOTEsMjIuNjg2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.onmouseover=function (e) {
			me._left__img.style.visibility='hidden';
			me._left__imgo.style.visibility='inherit';
			me.elementMouseOver['left']=true;
		}
		me._left.onmousedown=function (e) {
			me.elementMouseDown['left']=true;
		}
		me._left.onmouseup=function (e) {
			me.elementMouseDown['left']=false;
		}
		me._left.onmouseout=function (e) {
			me._left__img.style.visibility='inherit';
			me._left__imgo.style.visibility='hidden';
			me.elementMouseDown['left']=false;
			me.elementMouseOver['left']=false;
		}
		me._left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['left']) {
				player.changePanLog(1,true);
			}
			if (me.elementMouseOver['left']) {
				me._left__img.style.visibility='hidden';
				me._left__imgo.style.visibility='inherit';
				me.elementMouseOver['left']=true;
			}
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._left);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwQzIyLjkwNCwzLjUwMSwyOC40OTksOS4wOTYsMjguNSwxNmwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41MDEsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1MyAgICBDNy4wMjIsMTAuNjg2LDUu'+
			'ODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MywyLjk2LDcuMTQ3LDIuOTYxbDAsMCAgICBjMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ni0yLjk2MWwwLDBjMS44MzItMS44MzIsMi45NjEtNC4zNTIsMi45NjEtNy4xNDZsMCwwYzAtMi43OTUtMS4xMjktNS4zMTQtMi45NjEtNy4xNDdsMCwwICAgIEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDYsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzeiIvPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMS'+
			'41IiBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0xMi45MiwyMi42NTdjLTAuNDQyLTAuNDkxLTAuNDAzLTEuMjQ3LDAuMDg4LTEuNjg5bDAsMGw1LjQ4MS00LjkzOGwtNS40ODEtNC45Mzd2MCAgICBjLTAuNDkxLTAuNDQyLTAuNTMtMS4xOTktMC4wODgtMS42OWwwLDBjMC40NDEtMC40OTEsMS4xOTgtMC41MzEsMS42ODktMC4wODhsMCwwbDYuNDY4LDUuODI2ICAgIGMwLjI1MSwwLjIyNiwwLjM5NiwwLjU1MSwwLjM5NiwwLjg4OWwwLDBjMCwwLjMzNy0wLjE0NSwwLjY2My0wLjM5NiwwLjg4OWwwLDBsLTYuNDY4LDUuODI2Yy0wLjIyOSwwLjIwNi0wLjUxNSwwLjMwOC0wLjgsMC4zMDggICAgbDAsMEMx'+
			'My40ODIsMjMuMDUzLDEzLjE1NiwyMi45MTksMTIuOTIsMjIuNjU3TDEyLjkyLDIyLjY1N3oiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMEMyMi45MDQsMy41MDEsMjguNDk5LDkuMDk2LDI4LjUsMTZsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNTAxLDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTMgICAgQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMD'+
			'UsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDAgICAgYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDYtMi45NjFsMCwwYzEuODMyLTEuODMyLDIuOTYxLTQuMzUyLDIuOTYxLTcuMTQ2bDAsMGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYxLTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA2LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0i'+
			'I0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTIuOTIsMjIuNjU3Yy0wLjQ0Mi0wLjQ5MS0wLjQwMy0xLjI0NywwLjA4OC0xLjY4OWwwLDBsNS40ODEtNC45MzhsLTUuNDgxLTQuOTM3djAgICAgYy0wLjQ5MS0wLjQ0Mi0wLjUzLTEuMTk5LTAuMDg4LTEuNjlsMCwwYzAuNDQxLTAuNDkxLDEuMTk4LTAuNTMxLDEuNjg5LTAuMDg4bDAsMGw2LjQ2OCw1LjgyNiAgICBjMC4yNTEsMC4yMjYsMC4zOTYsMC41NTEsMC4zOTYsMC44ODlsMCwwYzAsMC4zMzctMC4xNDUsMC42NjMtMC4zOTYsMC44ODlsMCwwbC02LjQ2OCw1LjgyNmMtMC4yMjksMC4yMDYtMC41MTUsMC4zMDgtMC44LDAuMzA4ICAgIG'+
			'wwLDBDMTMuNDgyLDIzLjA1MywxMy4xNTYsMjIuOTE5LDEyLjkyLDIyLjY1N0wxMi45MiwyMi42NTd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTA0LDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwz'+
			'LjUwMSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwICAgIGMyLjc5NS0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ2LTIuOTYxbDAsMGMxLjgzMi0xLjgzMiwyLjk2MS00LjM1MiwyLjk2MS03LjE0NmwwLDBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2MS03LjE0N2wwLDAgICAgQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNiw1Ljg5NCwxMC42OD'+
			'YsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPHBhdGggZD0iTTEyLjkyLDIyLjY1N2MtMC40NDItMC40OTEtMC40MDMtMS4yNDcsMC4wODgtMS42ODlsMCwwbDUuNDgxLTQuOTM4bC01LjQ4MS00LjkzN3YwICAgIGMtMC40OTEtMC40NDItMC41My0xLjE5OS0wLjA4OC0xLjY5bDAsMGMwLjQ0MS0wLjQ5MSwxLjE5OC0wLjUzMSwxLjY4OS0wLjA4OGwwLDBsNi40NjgsNS44MjYgICAgYzAuMjUxLDAuMjI2LDAuMzk2LDAuNTUxLDAuMzk2LDAuODg5bDAsMGMwLDAuMzM3LTAuMTQ1LDAuNjYzLTAuMzk2LDAuODg5bDAsMGwtNi40NjgsNS44MjZjLTAuMjI5LDAuMjA2LTAuNTE1LDAu'+
			'MzA4LTAuOCwwLjMwOCAgICBsMCwwQzEzLjQ4MiwyMy4wNTMsMTMuMTU2LDIyLjkxOSwxMi45MiwyMi42NTdMMTIuOTIsMjIuNjU3eiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTA0LDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQz'+
			'kuMDk2LDI4LjQ5OSwzLjUwMSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwICAgIGMyLjc5NS0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ2LTIuOTYxbDAsMGMxLjgzMi0xLjgzMiwyLjk2MS00LjM1MiwyLjk2MS03LjE0NmwwLDBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2MS03LjE0N2wwLDAgICAgQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIw'+
			'Niw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPHBhdGggZD0iTTEyLjkyLDIyLjY1N2MtMC40NDItMC40OTEtMC40MDMtMS4yNDcsMC4wODgtMS42ODlsMCwwbDUuNDgxLTQuOTM4bC01LjQ4MS00LjkzN3YwICAgIGMtMC40OTEtMC40NDItMC41My0xLjE5OS0wLjA4OC0xLjY5bDAsMGMwLjQ0MS0wLjQ5MSwxLjE5OC0wLjUzMSwxLjY4OS0wLjA4OGwwLDBsNi40NjgsNS44MjYgICAgYzAuMjUxLDAuMjI2LDAuMzk2LDAuNTUxLDAuMzk2LDAuODg5bDAsMGMwLDAuMzM3LTAuMTQ1LDAuNjYzLTAuMzk2LDAuODg5bDAsMGwtNi40NjgsNS44MjZjLTAuMjI5LD'+
			'AuMjA2LTAuNTE1LDAuMzA4LTAuOCwwLjMwOCAgICBsMCwwQzEzLjQ4MiwyMy4wNTMsMTMuMTU2LDIyLjkxOSwxMi45MiwyMi42NTdMMTIuOTIsMjIuNjU3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.onmouseover=function (e) {
			me._right__img.style.visibility='hidden';
			me._right__imgo.style.visibility='inherit';
			me.elementMouseOver['right']=true;
		}
		me._right.onmousedown=function (e) {
			me.elementMouseDown['right']=true;
		}
		me._right.onmouseup=function (e) {
			me.elementMouseDown['right']=false;
		}
		me._right.onmouseout=function (e) {
			me._right__img.style.visibility='inherit';
			me._right__imgo.style.visibility='hidden';
			me.elementMouseDown['right']=false;
			me.elementMouseOver['right']=false;
		}
		me._right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['right']) {
				player.changePanLog(-1,true);
			}
			if (me.elementMouseOver['right']) {
				me._right__img.style.visibility='hidden';
				me._right__imgo.style.visibility='inherit';
				me.elementMouseOver['right']=true;
			}
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._right);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwx'+
			'LjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMT'+
			'QtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMjIuMDYxLDE0LjgwM2gt'+
			'NC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5Lj'+
			'A5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMs'+
			'Ny4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5'+
			'N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy'+
			'41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBm'+
			'aWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLj'+
			'UzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUu'+
			'ODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me._tt_zoomin.style.transition='none';
			me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
			me._tt_zoomin.ggVisible=true;
			me.elementMouseOver['zoomin']=true;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me._tt_zoomin.style.transition='none';
			me._tt_zoomin.style.visibility='hidden';
			me._tt_zoomin.ggVisible=false;
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		me._zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomin']) {
				player.changeFovLog(-1,true);
			}
			if (me.elementMouseOver['zoomin']) {
				me._zoomin__img.style.visibility='hidden';
				me._zoomin__imgo.style.visibility='inherit';
				me._tt_zoomin.style.transition='none';
				me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
				me._tt_zoomin.ggVisible=true;
				me.elementMouseOver['zoomin']=true;
			}
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomin.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom In", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomin.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin_white=document.createElement('div');
		els=me._tt_zoomin_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomin_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom In", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomin_white.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomin_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_zoomin.appendChild(me._tt_zoomin_white);
		me._zoomin.appendChild(me._tt_zoomin);
		me._controller.appendChild(me._zoomin);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5'+
			'NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxICAgIG'+
			'MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGc+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4w'+
			'OTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLD'+
			'cuMTQ2LDIuOTYxICAgIGMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUu'+
			'MzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiAgICBjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0Lj'+
			'M1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEgICAgYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41'+
			'MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2ICAgIGMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Lj'+
			'g5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MSAgICBjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me._tt_zoomout.style.transition='none';
			me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
			me._tt_zoomout.ggVisible=true;
			me.elementMouseOver['zoomout']=true;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me._tt_zoomout.style.transition='none';
			me._tt_zoomout.style.visibility='hidden';
			me._tt_zoomout.ggVisible=false;
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		me._zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomout']) {
				player.changeFovLog(1,true);
			}
			if (me.elementMouseOver['zoomout']) {
				me._zoomout__img.style.visibility='hidden';
				me._zoomout__imgo.style.visibility='inherit';
				me._tt_zoomout.style.transition='none';
				me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
				me._tt_zoomout.ggVisible=true;
				me.elementMouseOver['zoomout']=true;
			}
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomout.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom Out", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomout.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout_white=document.createElement('div');
		els=me._tt_zoomout_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomout_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom Out", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomout_white.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomout_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_zoomout.appendChild(me._tt_zoomout_white);
		me._zoomout.appendChild(me._tt_zoomout);
		me._controller.appendChild(me._zoomout);
		el=me._autorotate=document.createElement('div');
		els=me._autorotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPGc+CiAgIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQgICAgIGMtMS44MzEsMS44MzMt'+
			'Mi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAgICAgIGMtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBzdHJva2Utd2'+
			'lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwICAgIGMwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTctMC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwICAgIGMtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUx'+
			'LDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCAgICBjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDAgICAgaDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAgICAgYy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMD'+
			'AxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwICAgIGMxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCAgICBjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAgICAgYy0wLjEwNCwwLjAyOC0wLjIx'+
			'MSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMjAuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSAgICBsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LD'+
			'IuMTVsMi4zODYsMi4xNDkgICAgYzAuNDksMC40NDIsMC41MywxLjE5OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEgICAgTDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgICBjLTAuMDAxLDYuOTA0LTUu'+
			'NTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1NCAgICAgYy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwICAgICBjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgYy0xLjgzMy0xLjgzMi00LjM1My0yLj'+
			'k2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+CiAgPC9nPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS0wLjc4OSwyLjYzMy0xLjMwNWwwLDAgICAgYzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0w'+
			'LjcyMS0xLjI0Ny0xLjA0NWwwLDAgICAgYy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwICAgIGMtMC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2wwLDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMCAgICBoMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LD'+
			'AuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMCAgICBjLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuNDIzLTAuNzIyLTIuMjQzbDAsMGMtMC4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDAgICAgYzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwICAgIGMwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIu'+
			'MzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4LDEuNDM4LTMuNTk0LDEuODI1bDAsMCAgICBjLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LT'+
			'AuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLjE0OSAgICBjMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMSAgICBMMTYuMzk2LDIzLjYyMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgICBjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5'+
			'OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1NCAgICAgYy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwICAgICBjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgYy0xLjgzMy0xLjgzMi00LjM1My0yLjk2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42OD'+
			'YsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS0wLjc4OSwyLjYzMy0xLjMwNWwwLDAgICAgYzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0wLjcyMS0xLjI0Ny0xLjA0NWwwLDAgICAgYy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1'+
			'LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwICAgIGMtMC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2wwLDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMCAgICBoMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LDAuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMCAgICBjLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuND'+
			'IzLTAuNzIyLTIuMjQzbDAsMGMtMC4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDAgICAgYzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwICAgIGMwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIuMzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4LDEuNDM4LTMuNTk0LDEuODI1bDAs'+
			'MCAgICBjLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4KICA8cGF0aCBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLj'+
			'E0OSAgICBjMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMSAgICBMMTYuMzk2LDIzLjYyMXoiLz4KIDwvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwx'+
			'Mi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQgICAgIGMtMS44MzEsMS44MzMtMi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS'+
			'4zMTQtMi45Ni03LjE0N2wwLDAgICAgIGMtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwICAgIGMwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTctMC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEt'+
			'MS4yNDctMS4wNDVsMCwwICAgIGMtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCAgICBjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDAgICAgaDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLT'+
			'EuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAgICAgYy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwICAgIGMxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCAgICBjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5Mmww'+
			'LDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAgICAgYy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMjAuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSAgICBsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LT'+
			'AuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkgICAgYzAuNDksMC40NDIsMC41MywxLjE5OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEgICAgTDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._autorotate.onmouseover=function (e) {
			me._autorotate__img.style.visibility='hidden';
			me._autorotate__imgo.style.visibility='inherit';
			me._tt_autorotate.style.transition='none';
			me._tt_autorotate.style.visibility=(Number(me._tt_autorotate.style.opacity)>0||!me._tt_autorotate.style.opacity)?'inherit':'hidden';
			me._tt_autorotate.ggVisible=true;
			me.elementMouseOver['autorotate']=true;
		}
		me._autorotate.onmouseout=function (e) {
			me._autorotate__img.style.visibility='inherit';
			me._autorotate__imgo.style.visibility='hidden';
			me._tt_autorotate.style.transition='none';
			me._tt_autorotate.style.visibility='hidden';
			me._tt_autorotate.ggVisible=false;
			me.elementMouseOver['autorotate']=false;
		}
		me._autorotate.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['autorotate']) {
				me._autorotate__img.style.visibility='hidden';
				me._autorotate__imgo.style.visibility='inherit';
				me._tt_autorotate.style.transition='none';
				me._tt_autorotate.style.visibility=(Number(me._tt_autorotate.style.opacity)>0||!me._tt_autorotate.style.opacity)?'inherit':'hidden';
				me._tt_autorotate.ggVisible=true;
				me.elementMouseOver['autorotate']=true;
			}
		}
		me._autorotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_autorotate=document.createElement('div');
		els=me._tt_autorotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_autorotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_autorotate.ggUpdateText=function() {
			var params = [];
			var hs = player._("Start\/Stop Autorotation", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_autorotate.ggUpdateText();
		el.appendChild(els);
		me._tt_autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_autorotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_autorotate_white=document.createElement('div');
		els=me._tt_autorotate_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_autorotate_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_autorotate_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Start\/Stop Autorotation", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_autorotate_white.ggUpdateText();
		el.appendChild(els);
		me._tt_autorotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_autorotate_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_autorotate.appendChild(me._tt_autorotate_white);
		me._autorotate.appendChild(me._tt_autorotate);
		me._controller.appendChild(me._autorotate);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUu'+
			'ODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cG'+
			'F0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2'+
			'LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlPSIjMDAwMDAwIj'+
			'4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjks'+
			'Ny4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOT'+
			'YtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41'+
			'MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._info__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTks'+
			'My41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLD'+
			'EwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4w'+
			'NjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KID'+
			'wvZz4KIDxnIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIw'+
			'NSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMT'+
			'QuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEu'+
			'MTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.onclick=function (e) {
			me._userdata.ggVisible = !me._userdata.ggVisible;
			var flag=me._userdata.ggVisible;
			me._userdata.style.transition='none';
			me._userdata.style.visibility=((flag)&&(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity))?'inherit':'hidden';
		}
		me._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me._tt_info.style.transition='none';
			me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
			me._tt_info.ggVisible=true;
			me.elementMouseOver['info']=true;
		}
		me._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me._tt_info.style.transition='none';
			me._tt_info.style.visibility='hidden';
			me._tt_info.ggVisible=false;
			me.elementMouseOver['info']=false;
		}
		me._info.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['info']) {
				me._info__img.style.visibility='hidden';
				me._info__imgo.style.visibility='inherit';
				me._tt_info.style.transition='none';
				me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
				me._tt_info.ggVisible=true;
				me.elementMouseOver['info']=true;
			}
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_info=document.createElement('div');
		els=me._tt_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_info.ggUpdateText=function() {
			var params = [];
			var hs = player._("Show Information", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_info.ggUpdateText();
		el.appendChild(els);
		me._tt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_info_white=document.createElement('div');
		els=me._tt_info_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_info_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Show Information", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_info_white.ggUpdateText();
		el.appendChild(els);
		me._tt_info_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_info_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_info.appendChild(me._tt_info_white);
		me._info.appendChild(me._tt_info);
		me._controller.appendChild(me._info);
		el=me._movemode=document.createElement('div');
		els=me._movemode__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41MDEsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDQtMC4wMDEsMTIuNS01LjU5NiwxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDQsMy41LDE2LDMuNXogTTIzLjMyNCwyMi45NjJsLTAuNDktMC44OTZjMC42OTQtMS43NiwwLjU2NS0zLjk4OS0wLjE2MS01LjcyMiAg'+
			'ICBjLTAuMDA3LTAuMTMzLTAuMDM2LTAuMjY3LTAuMDk2LTAuMzk1bC0yLjI3OS00Ljk0OGMtMC4yNDctMC41MzMtMC44NzktMC43NjYtMS40MTItMC41MjFjLTAuNTMzLDAuMjQ2LTAuNzY2LDAuODc3LTAuNTIxLDEuNDExICAgIGwxLjQxLDMuMDU4bC0wLjIyNiwwLjA5NWwtMy4yODgtNi4wMDdjLTAuMjgyLTAuNTE1LTAuOTI4LTAuNzA0LTEuNDQzLTAuNDIyYy0wLjUxNSwwLjI4Mi0wLjcwNCwwLjkyOC0wLjQyMiwxLjQ0M2wzLjE4NCw1LjgxNyAgICBsLTAuMjE1LDAuMDlsLTMuODgzLTcuMDk0Yy0wLjI4Mi0wLjUxNi0wLjkyOS0wLjcwNS0xLjQ0My0wLjQyMmMtMC41MTYsMC4yODItMC43MD'+
			'UsMC45MjgtMC40MjIsMS40NDNsMy43OCw2LjkwNWwtMC4yNjMsMC4xMTEgICAgbC0xLjc2Ny0yLjA4MmwtMi4zODUtMi44MTFjLTAuMzgtMC40NDgtMS4wNTEtMC41MDMtMS40OTktMC4xMjNjLTAuNDQ4LDAuMzc5LTAuNTAzLDEuMDUxLTAuMTIzLDEuNDk5bDIuMzg1LDIuODExbDIuMzQsMi43NTkgICAgbDEuMTI5LDIuMzQ4bC0wLjIyNiwwLjE2OGMtMC4wNTQtMC4wNzQtMC4xMTQtMC4xNDUtMC4xODYtMC4yMDdsLTMuMjM1LTIuNzljLTAuNS0wLjQzMi0xLjI1NS0wLjM3Ni0xLjY4NywwLjEyNCAgICBjLTAuNDMyLDAuNS0wLjM3NiwxLjI1NiwwLjEyNCwxLjY4N2wzLjA0NiwyLjYyOWwtMC4w'+
			'MDIsMC4wMDJjMC4wMzQsMC4wMjksMC4wNjgsMC4wNTYsMC4xMDMsMC4wODVsMC4wODcsMC4wNzUgICAgYzAuMDA3LDAuMDA2LDAuMDE1LDAuMDEsMC4wMjIsMC4wMTZjMS41MDIsMS4yNTcsMy4wNjEsMi4wMzksNC42ODgsMi4wNjhsMC4zNjcsMC42NzJjLTAuNzQ0LDAuMTc0LTEuNTE5LDAuMjctMi4zMTgsMC4yNyAgICBjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDctMi45NjFDNy4wMjIsMjEuMzEzLDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NCwxLjEyOS01LjMxNCwyLjk2MS03LjE0NyAgICBjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NmMyLjc5NCwwLj'+
			'AwMSw1LjMxNCwxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MywyLjk2MSw3LjE0NyAgICBDMjYuMTA3LDE4LjcwMywyNS4wNSwyMS4xNDYsMjMuMzI0LDIyLjk2MnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNTAxLDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTA0LTAuMDAxLDEyLjUtNS41OTYsMTIuNS0xMi41ICAgIEMyOC40OTksOS4wOTYsMjIuOTA0LDMuNSwxNiwzLjV6IE0yMy4zMjQsMjIuOTYybC0wLjQ5'+
			'LTAuODk2YzAuNjk0LTEuNzYsMC41NjUtMy45ODktMC4xNjEtNS43MjIgICAgYy0wLjAwNy0wLjEzMy0wLjAzNi0wLjI2Ny0wLjA5Ni0wLjM5NWwtMi4yNzktNC45NDhjLTAuMjQ3LTAuNTMzLTAuODc5LTAuNzY2LTEuNDEyLTAuNTIxYy0wLjUzMywwLjI0Ni0wLjc2NiwwLjg3Ny0wLjUyMSwxLjQxMSAgICBsMS40MSwzLjA1OGwtMC4yMjYsMC4wOTVsLTMuMjg4LTYuMDA3Yy0wLjI4Mi0wLjUxNS0wLjkyOC0wLjcwNC0xLjQ0My0wLjQyMmMtMC41MTUsMC4yODItMC43MDQsMC45MjgtMC40MjIsMS40NDNsMy4xODQsNS44MTcgICAgbC0wLjIxNSwwLjA5bC0zLjg4My03LjA5NGMtMC4yODItMC41MT'+
			'YtMC45MjktMC43MDUtMS40NDMtMC40MjJjLTAuNTE2LDAuMjgyLTAuNzA1LDAuOTI4LTAuNDIyLDEuNDQzbDMuNzgsNi45MDVsLTAuMjYzLDAuMTExICAgIGwtMS43NjctMi4wODJsLTIuMzg1LTIuODExYy0wLjM4LTAuNDQ4LTEuMDUxLTAuNTAzLTEuNDk5LTAuMTIzYy0wLjQ0OCwwLjM3OS0wLjUwMywxLjA1MS0wLjEyMywxLjQ5OWwyLjM4NSwyLjgxMWwyLjM0LDIuNzU5ICAgIGwxLjEyOSwyLjM0OGwtMC4yMjYsMC4xNjhjLTAuMDU0LTAuMDc0LTAuMTE0LTAuMTQ1LTAuMTg2LTAuMjA3bC0zLjIzNS0yLjc5Yy0wLjUtMC40MzItMS4yNTUtMC4zNzYtMS42ODcsMC4xMjQgICAgYy0wLjQzMiww'+
			'LjUtMC4zNzYsMS4yNTYsMC4xMjQsMS42ODdsMy4wNDYsMi42MjlsLTAuMDAyLDAuMDAyYzAuMDM0LDAuMDI5LDAuMDY4LDAuMDU2LDAuMTAzLDAuMDg1bDAuMDg3LDAuMDc1ICAgIGMwLjAwNywwLjAwNiwwLjAxNSwwLjAxLDAuMDIyLDAuMDE2YzEuNTAyLDEuMjU3LDMuMDYxLDIuMDM5LDQuNjg4LDIuMDY4bDAuMzY3LDAuNjcyYy0wLjc0NCwwLjE3NC0xLjUxOSwwLjI3LTIuMzE4LDAuMjcgICAgYy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ3LTIuOTYxQzcuMDIyLDIxLjMxMyw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTQsMS4xMjktNS4zMTQsMi45NjEtNy4xNDcgICAgYz'+
			'EuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTZjMi43OTQsMC4wMDEsNS4zMTQsMS4xMyw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTMsMi45NjEsNy4xNDcgICAgQzI2LjEwNywxOC43MDMsMjUuMDUsMjEuMTQ2LDIzLjMyNCwyMi45NjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._movemode__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMyID'+
			'MyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl8xIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUwMSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwNC0wLjAwMSwxMi41LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwNCwzLjUsMTYsMy41eiBNMjMu'+
			'MzI0LDIyLjk2MmwtMC40OS0wLjg5NmMwLjY5NC0xLjc2LDAuNTY1LTMuOTg5LTAuMTYxLTUuNzIyICAgIGMtMC4wMDctMC4xMzMtMC4wMzYtMC4yNjctMC4wOTYtMC4zOTVsLTIuMjc5LTQuOTQ4Yy0wLjI0Ny0wLjUzMy0wLjg3OS0wLjc2Ni0xLjQxMi0wLjUyMWMtMC41MzMsMC4yNDYtMC43NjYsMC44NzctMC41MjEsMS40MTEgICAgbDEuNDEsMy4wNThsLTAuMjI2LDAuMDk1bC0zLjI4OC02LjAwN2MtMC4yODItMC41MTUtMC45MjgtMC43MDQtMS40NDMtMC40MjJjLTAuNTE1LDAuMjgyLTAuNzA0LDAuOTI4LTAuNDIyLDEuNDQzbDMuMTg0LDUuODE3ICAgIGwtMC4yMTUsMC4wOWwtMy44ODMtNy'+
			'4wOTRjLTAuMjgyLTAuNTE2LTAuOTI5LTAuNzA1LTEuNDQzLTAuNDIyYy0wLjUxNiwwLjI4Mi0wLjcwNSwwLjkyOC0wLjQyMiwxLjQ0M2wzLjc4LDYuOTA1bC0wLjI2MywwLjExMSAgICBsLTEuNzY3LTIuMDgybC0yLjM4NS0yLjgxMWMtMC4zOC0wLjQ0OC0xLjA1MS0wLjUwMy0xLjQ5OS0wLjEyM2MtMC40NDgsMC4zNzktMC41MDMsMS4wNTEtMC4xMjMsMS40OTlsMi4zODUsMi44MTFsMi4zNCwyLjc1OSAgICBsMS4xMjksMi4zNDhsLTAuMjI2LDAuMTY4Yy0wLjA1NC0wLjA3NC0wLjExNC0wLjE0NS0wLjE4Ni0wLjIwN2wtMy4yMzUtMi43OWMtMC41LTAuNDMyLTEuMjU1LTAuMzc2LTEuNjg3LDAu'+
			'MTI0ICAgIGMtMC40MzIsMC41LTAuMzc2LDEuMjU2LDAuMTI0LDEuNjg3bDMuMDQ2LDIuNjI5bC0wLjAwMiwwLjAwMmMwLjAzNCwwLjAyOSwwLjA2OCwwLjA1NiwwLjEwMywwLjA4NWwwLjA4NywwLjA3NSAgICBjMC4wMDcsMC4wMDYsMC4wMTUsMC4wMSwwLjAyMiwwLjAxNmMxLjUwMiwxLjI1NywzLjA2MSwyLjAzOSw0LjY4OCwyLjA2OGwwLjM2NywwLjY3MmMtMC43NDQsMC4xNzQtMS41MTksMC4yNy0yLjMxOCwwLjI3ICAgIGMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ny0yLjk2MUM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk0LDEuMTI5LTUuMzE0LD'+
			'IuOTYxLTcuMTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2YzIuNzk0LDAuMDAxLDUuMzE0LDEuMTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUzLDIuOTYxLDcuMTQ3ICAgIEMyNi4xMDcsMTguNzAzLDI1LjA1LDIxLjE0NiwyMy4zMjQsMjIuOTYyeiIvPgogPC9nPgogPGcgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUwMSw5LjA5NiwzLjUsMTZj'+
			'MCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwNC0wLjAwMSwxMi41LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwNCwzLjUsMTYsMy41eiBNMjMuMzI0LDIyLjk2MmwtMC40OS0wLjg5NmMwLjY5NC0xLjc2LDAuNTY1LTMuOTg5LTAuMTYxLTUuNzIyICAgIGMtMC4wMDctMC4xMzMtMC4wMzYtMC4yNjctMC4wOTYtMC4zOTVsLTIuMjc5LTQuOTQ4Yy0wLjI0Ny0wLjUzMy0wLjg3OS0wLjc2Ni0xLjQxMi0wLjUyMWMtMC41MzMsMC4yNDYtMC43NjYsMC44NzctMC41MjEsMS40MTEgICAgbDEuNDEsMy4wNThsLTAuMjI2LDAuMDk1bC0zLjI4OC02LjAwN2MtMC4yODItMC'+
			'41MTUtMC45MjgtMC43MDQtMS40NDMtMC40MjJjLTAuNTE1LDAuMjgyLTAuNzA0LDAuOTI4LTAuNDIyLDEuNDQzbDMuMTg0LDUuODE3ICAgIGwtMC4yMTUsMC4wOWwtMy44ODMtNy4wOTRjLTAuMjgyLTAuNTE2LTAuOTI5LTAuNzA1LTEuNDQzLTAuNDIyYy0wLjUxNiwwLjI4Mi0wLjcwNSwwLjkyOC0wLjQyMiwxLjQ0M2wzLjc4LDYuOTA1bC0wLjI2MywwLjExMSAgICBsLTEuNzY3LTIuMDgybC0yLjM4NS0yLjgxMWMtMC4zOC0wLjQ0OC0xLjA1MS0wLjUwMy0xLjQ5OS0wLjEyM2MtMC40NDgsMC4zNzktMC41MDMsMS4wNTEtMC4xMjMsMS40OTlsMi4zODUsMi44MTFsMi4zNCwyLjc1OSAgICBsMS4x'+
			'MjksMi4zNDhsLTAuMjI2LDAuMTY4Yy0wLjA1NC0wLjA3NC0wLjExNC0wLjE0NS0wLjE4Ni0wLjIwN2wtMy4yMzUtMi43OWMtMC41LTAuNDMyLTEuMjU1LTAuMzc2LTEuNjg3LDAuMTI0ICAgIGMtMC40MzIsMC41LTAuMzc2LDEuMjU2LDAuMTI0LDEuNjg3bDMuMDQ2LDIuNjI5bC0wLjAwMiwwLjAwMmMwLjAzNCwwLjAyOSwwLjA2OCwwLjA1NiwwLjEwMywwLjA4NWwwLjA4NywwLjA3NSAgICBjMC4wMDcsMC4wMDYsMC4wMTUsMC4wMSwwLjAyMiwwLjAxNmMxLjUwMiwxLjI1NywzLjA2MSwyLjAzOSw0LjY4OCwyLjA2OGwwLjM2NywwLjY3MmMtMC43NDQsMC4xNzQtMS41MTksMC4yNy0yLjMxOCwwLj'+
			'I3ICAgIGMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ny0yLjk2MUM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk0LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2YzIuNzk0LDAuMDAxLDUuMzE0LDEuMTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUzLDIuOTYxLDcuMTQ3ICAgIEMyNi4xMDcsMTguNzAzLDI1LjA1LDIxLjE0NiwyMy4zMjQsMjIuOTYyeiIvPgogPC9nPgo8L3N2Zz4K';
		me._movemode__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="movemode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._movemode.onclick=function (e) {
			player.changeViewMode(2);
		}
		me._movemode.onmouseover=function (e) {
			me._movemode__img.style.visibility='hidden';
			me._movemode__imgo.style.visibility='inherit';
			me._tt_movemode.style.transition='none';
			me._tt_movemode.style.visibility=(Number(me._tt_movemode.style.opacity)>0||!me._tt_movemode.style.opacity)?'inherit':'hidden';
			me._tt_movemode.ggVisible=true;
			me.elementMouseOver['movemode']=true;
		}
		me._movemode.onmouseout=function (e) {
			me._movemode__img.style.visibility='inherit';
			me._movemode__imgo.style.visibility='hidden';
			me._tt_movemode.style.transition='none';
			me._tt_movemode.style.visibility='hidden';
			me._tt_movemode.ggVisible=false;
			me.elementMouseOver['movemode']=false;
		}
		me._movemode.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['movemode']) {
				me._movemode__img.style.visibility='hidden';
				me._movemode__imgo.style.visibility='inherit';
				me._tt_movemode.style.transition='none';
				me._tt_movemode.style.visibility=(Number(me._tt_movemode.style.opacity)>0||!me._tt_movemode.style.opacity)?'inherit':'hidden';
				me._tt_movemode.ggVisible=true;
				me.elementMouseOver['movemode']=true;
			}
		}
		me._movemode.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_movemode=document.createElement('div');
		els=me._tt_movemode__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_movemode.ggUpdateText=function() {
			var params = [];
			var hs = player._("Change Control Mode", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_movemode.ggUpdateText();
		el.appendChild(els);
		me._tt_movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_movemode_white=document.createElement('div');
		els=me._tt_movemode_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_movemode_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Change Control Mode", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_movemode_white.ggUpdateText();
		el.appendChild(els);
		me._tt_movemode_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_movemode.appendChild(me._tt_movemode_white);
		me._movemode.appendChild(me._tt_movemode);
		me._controller.appendChild(me._movemode);
		me.divSkin.appendChild(me._controller);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingbrd=document.createElement('div');
		el.ggId="loadingbrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loadingbrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbrd.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbrd);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var params = [];
			params.push(player._(String((player.getPercentLoaded()*100.0).toFixed(0))));
			var hs = player._("Loading... %1%", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) - 10px);';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._userdata.onclick=function (e) {
			me._userdata.style.transition='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		me._userdata.ggUpdatePosition=function (useTransition) {
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 240px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._userdatabrd=document.createElement('div');
		el.ggId="userdatabrd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 138px;';
		hs+='left : -1px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdatabrd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabrd.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabrd);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("<b>%1<\/b>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		player.addListener('changenode', function() {
			me._title.ggUpdateText();
		});
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._title);
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		player.addListener('changenode', function() {
			me._description.ggUpdateText();
		});
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._description);
		el=me._author=document.createElement('div');
		els=me._author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._author.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.author)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		player.addListener('changenode', function() {
			me._author.ggUpdateText();
		});
		el.appendChild(els);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._author.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._author);
		el=me._datetime=document.createElement('div');
		els=me._datetime__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._datetime.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.datetime)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		player.addListener('changenode', function() {
			me._datetime.ggUpdateText();
		});
		el.appendChild(els);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._datetime.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._datetime);
		el=me._copyright=document.createElement('div');
		els=me._copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._copyright.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.copyright)));
			var hs = player._("&#169; %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		player.addListener('changenode', function() {
			me._copyright.ggUpdateText();
		});
		el.appendChild(els);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._copyright);
		me.divSkin.appendChild(me._userdata);
		el=me._hide_template=document.createElement('div');
		el.ggId="hide_template";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 10px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_template.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_template.ggUpdatePosition=function (useTransition) {
		}
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.onmouseover=function (e) {
			me._marker_title.style.transition='none';
			me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
			me._marker_title.ggVisible=true;
			me.elementMouseOver['markertemplate']=true;
		}
		me._markertemplate.onmouseout=function (e) {
			me._marker_title.style.transition='none';
			me._marker_title.style.visibility='hidden';
			me._marker_title.ggVisible=false;
			me.elementMouseOver['markertemplate']=false;
		}
		me._markertemplate.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['markertemplate']) {
				me._marker_title.style.transition='none';
				me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
				me._marker_title.ggVisible=true;
				me.elementMouseOver['markertemplate']=true;
			}
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title=document.createElement('div');
		els=me._marker_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : auto;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_title.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title.ggUpdatePosition=function (useTransition) {
		}
		me._markertemplate.appendChild(me._marker_title);
		me._hide_template.appendChild(me._markertemplate);
		me.divSkin.appendChild(me._hide_template);
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._marker_normal;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='0px';
		me._markertemplate__normal.style.top='0px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._marker_active;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='0px';
		me._markertemplate__active.style.top='0px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		player.addListener('beforechangenode', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
		player.addListener('imagesready', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
	};
	function SkinElement_marker_normal_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_normal=document.createElement('div');
		els=me._marker_normal__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBoZWlnaHQ9IjMwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMwIDMwIiB4bWxuczp4bG'+
			'luaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMwcHgiPgogPGcgZGlzcGxheT0ibm9uZSIgaWQ9IkxheWVyXzEiPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMyIgZGlzcGxheT0iaW5saW5lIiBmaWxsPSJub25lIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iIzk5OTk5OSIgZD0iTTE5Ljc1NCwyLjkxNSAgIGMtMC4zNTMsMi4xNTMtMS45MzksNC4wNjYtNC43Niw0LjA2NmMtMi44MjUsMC00LjQxMi0xLjkxOS00Ljc2Mi00LjA3NmMtNC44MjksMS44'+
			'OTktOC4yNTcsNi41OC04LjI1NywxMi4wODMgICBjMCw3LjE4Myw1LjgyMywxMy4wMDcsMTMuMDA2LDEzLjAwN2M3LjE4NCwwLDEzLjAwNy01LjgyNCwxMy4wMDctMTMuMDA3QzI3Ljk4Nyw5LjQ5NCwyNC41Nyw0LjgyMSwxOS43NTQsMi45MTV6Ii8+CiA8L2c+CiA8ZyBkaXNwbGF5PSJub25lIiBpZD0iTGF5ZXJfMV9jb3B5Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjIiIGRpc3BsYXk9ImlubGluZSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xOS43NTQsMi45MTUgICBjLTAuMzUzLDIuMTUzLTEuOTM5LDQuMDY2LTQuNzYsNC4wNjZjLT'+
			'IuODI1LDAtNC40MTItMS45MTktNC43NjItNC4wNzZjLTQuODI5LDEuODk5LTguMjU3LDYuNTgtOC4yNTcsMTIuMDgzICAgYzAsNy4xODMsNS44MjMsMTMuMDA3LDEzLjAwNiwxMy4wMDdjNy4xODQsMCwxMy4wMDctNS44MjQsMTMuMDA3LTEzLjAwN0MyNy45ODcsOS40OTQsMjQuNTcsNC44MjEsMTkuNzU0LDIuOTE1eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzMiPgogIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIzIiBjeT0iMTUiIGN4PSIxNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiM5OTk5OTkiIHI9IjguMDUzIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfM19j'+
			'b3B5Ij4KICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMiIgY3k9IjE1IiBjeD0iMTUiIGZpbGw9Im5vbmUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjMDAwMDAwIiByPSI4LjA1MyIvPgogPC9nPgogPGcgZGlzcGxheT0ibm9uZSIgaWQ9IkxheWVyXzUiPgogIDxjaXJjbGUgY3k9IjIuMDA3IiBkaXNwbGF5PSJpbmxpbmUiIGZpbGw9IiNFRTFEM0EiIGN4PSIxNSIgcj0iMi4wNTMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._marker_normal__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_normal.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_normal.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_marker_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_active=document.createElement('div');
		els=me._marker_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiBoZWlnaHQ9IjMwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMwIDMwIiB4bWxuczp4bG'+
			'luaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDMwIDMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHk9IjBweCIgd2lkdGg9IjMwcHgiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSI1IiBjeT0iMTQuOTg3IiBjeD0iMTQuOTgxIiBmaWxsPSJub25lIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iIzAwMDAwMCIgcj0iMTAuOTk0Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMV9jb3B5Ij4KICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMyIgY3k9IjE0Ljk4NyIgY3g9IjE0Ljk4MSIgZmlsbD0ibm9uZSIg'+
			'c3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNGRkZGRkYiIHI9IjEwLjk5NCIvPgogPC9nPgogPGcgZGlzcGxheT0ibm9uZSIgaWQ9IkxheWVyXzMiPgogIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIwLjUiIGN5PSIzLjk5NCIgZGlzcGxheT0iaW5saW5lIiBmaWxsPSIjRUQxRjI0IiBjeD0iMTQuOTgiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjRUUxRDNBIiByPSIyLjExNyIvPgogPC9nPgo8L3N2Zz4K';
		me._marker_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_active.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinHotspotClass_hotspot(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot=document.createElement('div');
		el.ggId="hotspot";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 350px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._hstext.style.transition='none';
			me._hstext.style.visibility=(Number(me._hstext.style.opacity)>0||!me._hstext.style.opacity)?'inherit':'hidden';
			me._hstext.ggVisible=true;
			me.elementMouseOver['hotspot']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._hstext.style.transition='none';
			me._hstext.style.visibility='hidden';
			me._hstext.ggVisible=false;
			me.elementMouseOver['hotspot']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._hotspot.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot']) {
				player.setActiveHotspot(me.hotspot);
				me._hstext.style.transition='none';
				me._hstext.style.visibility=(Number(me._hstext.style.opacity)>0||!me._hstext.style.opacity)?'inherit':'hidden';
				me._hstext.ggVisible=true;
				me.elementMouseOver['hotspot']=true;
			}
		}
		me._hotspot.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage=document.createElement('div');
		els=me._hsimage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgNDMzNjMpICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB3aWR0aD0iMzJweCIgaWQ9IkxheWVyXzEiPgogPGcgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4ICAgIGMwLTEuMDQ4LTAuODQ5LTEuODk5LTEuODk3LTEuODk5Yy0xLjA0OSwwLTEuODk3LDAuODUxLTEuODk3LDEuODk5djEuOTg2'+
			'Yy0zLjM1MiwwLjczNS01Ljk4MywzLjM2OS02LjcyLDYuNzE3SDUuMzk4ICAgIEM0LjM0OCwxNC4xMDEsMy41LDE0Ljk1MSwzLjUsMTZzMC44NTEsMS44OTYsMS44OTksMS44OTZoMS45ODVjMC43MzUsMy4zNSwzLjM2OCw1Ljk4NCw2LjcyLDYuNzE5djEuOTg5ICAgIGMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2ICAgIGMxLjA0OSwwLDEuODk3LTAuODQ4LDEuODk3LTEuODk2QzI4LjUwMSwxNC45NTEsMjcuNjUyLDE0LjEwMywyNi42MDQsMT'+
			'QuMTAzeiBNMTYsMjEuMDI5Yy0yLjc3Ny0wLjAwNS01LjAyMy0yLjI1MS01LjAzLTUuMDI2ICAgIHYtMC4wMDFjMC0wLjAwMSwwLTAuMDAxLDAtMC4wMDNjMC4wMDYtMi43NzcsMi4yNTMtNS4wMjIsNS4wMy01LjAyNWMyLjc3NywwLjAwNSw1LjAyNSwyLjI1MSw1LjAyNiw1LjAyOGgwLjAwMiAgICBDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4KICA8L2c+CiAgPGNpcmNsZSBjeT0iMTYiIGN4PSIxNi4wMDIiIGZpbGw9IiNGRkZGRkYiIHI9IjIuMTA5Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHN0'+
			'cm9rZT0iIzAwMDAwMCIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4ICAgIGMwLTEuMDQ4LTAuODQ5LTEuODk5LTEuODk3LTEuODk5Yy0xLjA0OSwwLTEuODk3LDAuODUxLTEuODk3LDEuODk5djEuOTg2Yy0zLjM1MiwwLjczNS01Ljk4MywzLjM2OS02LjcyLDYuNzE3SDUuMzk4ICAgIEM0LjM0OCwxNC4xMDEsMy41LDE0Ljk1MSwzLjUsMTZzMC44NTEsMS44OTYsMS44OTksMS44OTZoMS45ODVjMC43MzUsMy4zNSwzLjM2OCw1Ljk4NCw2LjcyLDYuNzE5djEuOTg5ICAgIGMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuOD'+
			'k2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2ICAgIGMxLjA0OSwwLDEuODk3LTAuODQ4LDEuODk3LTEuODk2QzI4LjUwMSwxNC45NTEsMjcuNjUyLDE0LjEwMywyNi42MDQsMTQuMTAzeiBNMTYsMjEuMDI5Yy0yLjc3Ny0wLjAwNS01LjAyMy0yLjI1MS01LjAzLTUuMDI2ICAgIHYtMC4wMDFjMC0wLjAwMSwwLTAuMDAxLDAtMC4wMDNjMC4wMDYtMi43NzcsMi4yNTMtNS4wMjIsNS4wMy01LjAyNWMyLjc3NywwLjAwNSw1LjAyNSwyLjI1MSw1LjAyNiw1LjAyOGgwLjAwMiAgICBDMjEuMDI1LDE4Ljc3'+
			'OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4KICA8L2c+CiAgPGNpcmNsZSBjeT0iMTYiIGN4PSIxNi4wMDIiIGZpbGw9IiNGRkZGRkYiIHI9IjIuMTA5Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._hsimage__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hsimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._hsimage);
		el=me._hstext=document.createElement('div');
		els=me._hstext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hstext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(0,0,0,1);';
		hs+='height : auto;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hstext.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hstext.ggUpdateText();
		player.addListener('changenode', function() {
			me._hstext.ggUpdateText();
		});
		el.appendChild(els);
		me._hstext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hstext.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._hstext);
			me.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				me._hotspot.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._hotspot;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'hotspot';
				hsinst = new SkinHotspotClass_hotspot(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = [];
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._up.ggUpdateConditionTimer();
		me._down.ggUpdateConditionTimer();
		me._left.ggUpdateConditionTimer();
		me._right.ggUpdateConditionTimer();
		me._zoomin.ggUpdateConditionTimer();
		me._zoomout.ggUpdateConditionTimer();
		me._autorotate.ggUpdateConditionTimer();
		me._info.ggUpdateConditionTimer();
		me._movemode.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style.transform=hs;
		me._markertemplate.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};