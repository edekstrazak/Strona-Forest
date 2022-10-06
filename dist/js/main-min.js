"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var burgerBtn,burgerX,navMobile,navBgStripe,navMobileLinks,navMobileLinksBox,navDesktopLinksActive,html,navDesktop,mainHeader,sections,body,main=function(){prepareDOMElements(),prepareDOMEvents(),handleNavLinksOffset(),handleScrollPadding(),scrollSpy()},prepareDOMElements=function(){burgerBtn=document.querySelector(".hamburger"),burgerX=document.querySelector(".x-btn"),navMobile=document.querySelector(".nav-mobile__bg"),navDesktop=document.querySelector(".nav-desktop"),navBgStripe=document.querySelector(".nav-mobile__bg-stripe"),navMobileLinks=document.querySelectorAll(".nav-mobile__link"),navMobileLinksBox=document.querySelector(".nav-mobile__links"),navDesktopLinksActive=document.querySelectorAll(".nav-desktop__link--active"),mainHeader=document.querySelector(".header"),sections=document.querySelectorAll(".main section"),html=document.querySelector("html"),body=document.querySelector("body")},prepareDOMEvents=function(){burgerBtn.addEventListener("click",handleNav),burgerX.addEventListener("click",handleNav),navMobileLinks.forEach(function(e){return e.addEventListener("click",handleNav)}),window.addEventListener("scroll",handleScrollPadding),window.addEventListener("scroll",scrollSpy),window.addEventListener("resize",handleNavLinksOffset),window.addEventListener("resize",handleNavResize)},handleNavLinksOffset=function(){navMobileLinksBox.style.top=navBgStripe.offsetHeight+"px"},handleNavResize=function(){768<=document.documentElement.clientWidth&&(burgerBtn.classList.remove("burger-inactive"),burgerX.classList.add("burger-inactive"),navMobile.classList.remove("translate-zero"),navMobile.classList.remove("opacity-1"))},handleNav=function(){burgerBtn.classList.toggle("burger-inactive"),burgerX.classList.toggle("burger-inactive"),navMobile.classList.toggle("translate-zero"),navMobile.classList.toggle("opacity-1")},handleScrollPadding=function(){var e=document.documentElement.clientWidth,t=navDesktop.offsetHeight;html.style.scrollPaddingTop=768<=e?t+"px":0},scrollSpy=function(){var e=[mainHeader].concat(_toConsumableArray(sections)),t=document.documentElement.clientHeight;if(768<=document.documentElement.clientWidth)for(var n=navDesktop.getBoundingClientRect(),r=0;r<e.length;r++){var o=e[r].getBoundingClientRect();o.top<=n.height+t/2&&-(o.height-n.height)+t/2<=o.top?(navDesktopLinksActive[r].classList.add("visible"),navDesktopLinksActive[r].classList.add("opacity-1")):(navDesktopLinksActive[r].classList.remove("visible"),navDesktopLinksActive[r].classList.remove("opacity-1"))}};document.addEventListener("DOMContentLoaded",main);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYnVyZ2VyQnRuIiwiYnVyZ2VyWCIsIm5hdk1vYmlsZSIsIm5hdkJnU3RyaXBlIiwibmF2TW9iaWxlTGlua3MiLCJuYXZNb2JpbGVMaW5rc0JveCIsIm5hdkRlc2t0b3BMaW5rc0FjdGl2ZSIsImh0bWwiLCJuYXZEZXNrdG9wIiwibWFpbkhlYWRlciIsInNlY3Rpb25zIiwiYm9keSIsIm1haW4iLCJwcmVwYXJlRE9NRWxlbWVudHMiLCJwcmVwYXJlRE9NRXZlbnRzIiwiaGFuZGxlTmF2TGlua3NPZmZzZXQiLCJoYW5kbGVTY3JvbGxQYWRkaW5nIiwic2Nyb2xsU3B5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVOYXYiLCJsaW5rIiwid2luZG93IiwiaGFuZGxlTmF2UmVzaXplIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsInNjcmVlbldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidG9nZ2xlIiwibmF2SGVpZ2h0IiwiYWxsU2VjdGlvbnMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjbGllbnRIZWlnaHQiLCJzY3JlZW5IZWlnaHQiLCJpIiwibGVuZ3RoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2VjdGlvblBhcmFtZXRlcnMiLCJuYXZpZ2F0aW9uUGFyYW1ldGVycyJdLCJtYXBwaW5ncyI6InErQkFBQSxJQUFJQSxVQUNIQyxRQUNBQyxVQUNBQyxZQUNBQyxlQUNBQyxrQkFDQUMsc0JBQ0FDLEtBQ0FDLFdBQ0FDLFdBQ0FDLFNBQ0FDLEtBRUtDLEtBQU8sV0FiYkMsbUJBQ0NaLEVBY0FhLGlCQUFnQixFQUVoQkMscUJBSGtCLEVBSWxCQyxvQkFIZ0IsRUFJaEJDLFVBRkFGLENBR0EsRUFQREYsbUJBQUEsV0FVQ2IsVUFBWWtCLFNBQVNDLGNBQWMsWUFBdkIsRUFEYmxCLFFBQU1ZLFNBQUFBLGNBQUFBLFFBQUFBLEVBR0xYLFVBRlNnQixTQUFXQyxjQUFSLGlCQUFILEVBR1RYLFdBRlVVLFNBQVNDLGNBQWMsY0FBdkJELEVBR1ZmLFlBRlllLFNBQVNDLGNBQWMsd0JBQXZCRCxFQUdaZCxlQUZhYyxTQUFTQyxpQkFBYyxtQkFBdkJELEVBR2JiLGtCQUZjYSxTQUFTQyxjQUFjLG9CQUF2QkQsRUFHZFosc0JBRmlCWSxTQUFTRSxpQkFBaUIsNEJBQTFCRixFQUdqQlQsV0FGQUosU0FBb0JhLGNBQVNDLFNBQTdCZCxFQUdBSyxTQUZBSixTQUFBQSxpQkFBaUNjLGVBQWpDZCxFQUdBQyxLQUZBRSxTQUFhUyxjQUFTQyxNQUF0QlYsRUFHQUUsS0FGQUQsU0FBV1EsY0FBU0UsTUFBcEJWLENBR0EsRUFiREksaUJBQUEsV0FnQkNkLFVBQVVxQixpQkFBaUIsUUFBU0MsU0FBcEMsRUFERHJCLFFBQU1hLGlCQUFtQixRQUFuQkEsU0FBTixFQUdDVixlQUZVaUIsUUFBQUEsU0FBQUEsR0FBVixPQUEyQkUsRUFBM0JGLGlCQUFBLFFBQUFDLFNBQTJCLENBQTNCLENBRUEsRUFFQUUsT0FGQXBCLGlCQUF1QixTQUFBbUIsbUJBRXZCLEVBQ0FDLE9BSDJCSCxpQkFBU0EsU0FBaUJKLFNBR3JELEVBRUFPLE9BSE1ILGlCQUFOLFNBQUFOLG9CQUdBLEVBQ0FTLE9BSE1ILGlCQUFOLFNBQUFJLGVBR0EsQ0FDQSxFQVZEVixxQkFBQSxXQWFDVixrQkFBa0JxQixNQUFNQyxJQUFNeEIsWUFBWXlCLGFBQWUsSUFEMUQsRUFBQUgsZ0JBQUEsV0FJcUIsS0FDRlAsU0FBU1csZ0JBQWdCQyxjQUEzQzlCLFVBQUkrQixVQUFjYixPQUFTVyxpQkFBM0IsRUFHQzVCLFFBQVErQixVQUFVQyxJQUFJLGlCQUF0QixFQUZEL0IsVUFBSTZCLFVBQWVHLE9BQUssZ0JBQXhCLEVBSUNoQyxVQUhBRixVQUFVZ0MsT0FBVUUsV0FHcEIsRUFFRCxFQURDWixVQUFBLFdBUEZ0QixVQUFBZ0MsVUFBQUcsT0FBQSxpQkFBQSxFQVlDbEMsUUFBUStCLFVBQVVHLE9BQU8saUJBQXpCLEVBRkRqQyxVQUFNb0IsVUFBWWEsT0FBWmIsZ0JBQU4sRUFJQ3BCLFVBSFM4QixVQUFURyxPQUFBLFdBR0EsQ0FDQSxFQURBakMsb0JBQUEsV0FKRCxJQUFBNkIsRUFBQWIsU0FBQVcsZ0JBQUFDLFlBU0tNLEVBQVk1QixXQUFXb0IsYUFGSHJCLEtBQUdtQixNQUF0QlYsaUJBQUFBLEtBQUFBLEVBQXNCb0IsRUFBTSxLQUNOUCxDQUkzQixFQUxEWixVQUFBLFdBUUMsSUFBTW9CLEVBQVcsQ0FBSTVCLFlBQUo2QixPQUFBQyxtQkFBbUI3QixRQUFuQixDQUFBLEVBRFpPLEVBQVlDLFNBQVpELGdCQUFrQnVCLGFBR3ZCLEdBRmlCLEtBQWpCdEIsU0FBTW1CLGdCQUFlNUIsWUFJcEIsSUFIRCxJQUFNZ0MsRUFBd0JaLFdBQUFBLHNCQUFBQSxFQUdwQmEsRUFBSSxFQUFHQSxFQUFJTCxFQUFZTSxPQUFRRCxDQUFDLEdBQUksQ0FGOUMsSUFBSXhCLEVBQVNXLEVBQWdCQyxHQUF6QmMsc0JBQVNmLEVBS1JnQixFQUFpQixLQUFXQyxFQUFvQixPQUFhTCxFQUFlLEdBQU0sRUFBRUksRUFBaUIsT0FBYUMsRUFBb0IsUUFBY0wsRUFBZSxHQUFLSSxFQUFpQixLQUg3THZDLHNCQUFvQitCLEdBQUFBLFVBQVlNLElBQWhDLFNBQUEsRUFLRXJDLHNCQUpLdUMsR0FBaUJiLFVBQUdLLElBQVcsV0FJcEMsSUFFQS9CLHNCQUpFdUMsR0FBa0JiLFVBQVVjLE9BQUFBLFNBSTlCLEVBQ0F4QyxzQkFKQUEsR0FBcUIwQixVQUFJQSxPQUF6QixXQUlBLEVBRUQsQ0FFRixFQUVEZCxTQUpHRyxpQkFBQSxtQkFBQVQsSUFJSCIsImZpbGUiOiJtYWluLW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBidXJnZXJCdG4sXHJcblx0YnVyZ2VyWCxcclxuXHRuYXZNb2JpbGUsXHJcblx0bmF2QmdTdHJpcGUsXHJcblx0bmF2TW9iaWxlTGlua3MsXHJcblx0bmF2TW9iaWxlTGlua3NCb3gsXHJcblx0bmF2RGVza3RvcExpbmtzQWN0aXZlLFxyXG5cdGh0bWwsXHJcblx0bmF2RGVza3RvcCxcclxuXHRtYWluSGVhZGVyLFxyXG5cdHNlY3Rpb25zLFxyXG5cdGJvZHlcclxuXHJcbmNvbnN0IG1haW4gPSAoKSA9PiB7XHJcblx0cHJlcGFyZURPTUVsZW1lbnRzKClcclxuXHRwcmVwYXJlRE9NRXZlbnRzKClcclxuXHJcblx0aGFuZGxlTmF2TGlua3NPZmZzZXQoKVxyXG5cdGhhbmRsZVNjcm9sbFBhZGRpbmcoKVxyXG5cdHNjcm9sbFNweSgpXHJcbn1cclxuXHJcbmNvbnN0IHByZXBhcmVET01FbGVtZW50cyA9ICgpID0+IHtcclxuXHRidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJylcclxuXHRidXJnZXJYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtYnRuJylcclxuXHRuYXZNb2JpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZV9fYmcnKVxyXG5cdG5hdkRlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWRlc2t0b3AnKVxyXG5cdG5hdkJnU3RyaXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1tb2JpbGVfX2JnLXN0cmlwZScpXHJcblx0bmF2TW9iaWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1vYmlsZV9fbGluaycpXHJcblx0bmF2TW9iaWxlTGlua3NCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZV9fbGlua3MnKVxyXG5cdG5hdkRlc2t0b3BMaW5rc0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtZGVza3RvcF9fbGluay0tYWN0aXZlJylcclxuXHRtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpXHJcblx0c2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbiBzZWN0aW9uJylcclxuXHRodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXHJcblx0Ym9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG59XHJcblxyXG5jb25zdCBwcmVwYXJlRE9NRXZlbnRzID0gKCkgPT4ge1xyXG5cdGJ1cmdlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU5hdilcclxuXHRidXJnZXJYLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2KVxyXG5cdG5hdk1vYmlsZUxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2KSlcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbFBhZGRpbmcpXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFNweSlcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZU5hdkxpbmtzT2Zmc2V0KVxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVOYXZSZXNpemUpXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZU5hdkxpbmtzT2Zmc2V0ID0gKCkgPT4ge1xyXG5cdG5hdk1vYmlsZUxpbmtzQm94LnN0eWxlLnRvcCA9IG5hdkJnU3RyaXBlLm9mZnNldEhlaWdodCArICdweCdcclxufVxyXG5cclxuY29uc3QgaGFuZGxlTmF2UmVzaXplID0gKCkgPT4ge1xyXG5cdGxldCBzY3JlZW5XaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG5cdGlmIChzY3JlZW5XaWR0aCA+PSA3NjgpIHtcclxuXHRcdGJ1cmdlckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItaW5hY3RpdmUnKVxyXG5cdFx0YnVyZ2VyWC5jbGFzc0xpc3QuYWRkKCdidXJnZXItaW5hY3RpdmUnKVxyXG5cdFx0bmF2TW9iaWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zbGF0ZS16ZXJvJylcclxuXHRcdG5hdk1vYmlsZS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LTEnKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlTmF2ID0gKCkgPT4ge1xyXG5cdGJ1cmdlckJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItaW5hY3RpdmUnKVxyXG5cdGJ1cmdlclguY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWluYWN0aXZlJylcclxuXHRuYXZNb2JpbGUuY2xhc3NMaXN0LnRvZ2dsZSgndHJhbnNsYXRlLXplcm8nKVxyXG5cdG5hdk1vYmlsZS5jbGFzc0xpc3QudG9nZ2xlKCdvcGFjaXR5LTEnKVxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVTY3JvbGxQYWRkaW5nID0gKCkgPT4ge1xyXG5cdGxldCBzY3JlZW5XaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG5cdGxldCBuYXZIZWlnaHQgPSBuYXZEZXNrdG9wLm9mZnNldEhlaWdodFxyXG5cdGlmIChzY3JlZW5XaWR0aCA+PSA3NjgpIGh0bWwuc3R5bGUuc2Nyb2xsUGFkZGluZ1RvcCA9IG5hdkhlaWdodCArICdweCdcclxuXHRlbHNlIGh0bWwuc3R5bGUuc2Nyb2xsUGFkZGluZ1RvcCA9IDBcclxufVxyXG5cclxuY29uc3Qgc2Nyb2xsU3B5ID0gKCkgPT4ge1xyXG5cdGNvbnN0IGFsbFNlY3Rpb25zID0gW21haW5IZWFkZXIsIC4uLnNlY3Rpb25zXVxyXG5cdGNvbnN0IHNjcmVlbkhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuXHRpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID49IDc2OCkge1xyXG5cdFx0Y29uc3QgbmF2aWdhdGlvblBhcmFtZXRlcnMgPSBuYXZEZXNrdG9wLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHNlY3Rpb25QYXJhbWV0ZXJzID0gYWxsU2VjdGlvbnNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcblx0XHRcdGlmKHNlY3Rpb25QYXJhbWV0ZXJzW1widG9wXCJdIDw9IG5hdmlnYXRpb25QYXJhbWV0ZXJzW1wiaGVpZ2h0XCJdICsgc2NyZWVuSGVpZ2h0IC8gMiAgJiYgLShzZWN0aW9uUGFyYW1ldGVyc1tcImhlaWdodFwiXSAtIG5hdmlnYXRpb25QYXJhbWV0ZXJzW1wiaGVpZ2h0XCJdKSArIHNjcmVlbkhlaWdodCAvIDIgPD0gc2VjdGlvblBhcmFtZXRlcnNbXCJ0b3BcIl0pIHtcclxuXHRcdFx0XHRuYXZEZXNrdG9wTGlua3NBY3RpdmVbaV0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXHJcblx0XHRcdFx0bmF2RGVza3RvcExpbmtzQWN0aXZlW2ldLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktMScpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bmF2RGVza3RvcExpbmtzQWN0aXZlW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKVxyXG5cdFx0XHRcdG5hdkRlc2t0b3BMaW5rc0FjdGl2ZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5LTEnKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbWFpbilcclxuIl19