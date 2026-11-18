// Exit where the expanded 208px flow meets the compact 90px stack; keep 16px hysteresis.
const exit=208-90;
export const HEADER_SCROLL_BOUNDS=Object.freeze({exit,enter:exit+16,initial:exit+8});
/** One scroll root preserves the expanded header space while its controls remain sticky. */
export function mountServiceTabsChrome(app,{scrollTop}={}){
 const host=app.querySelector('.l1-home,.l1-view'),scroll=host?.querySelector('.l1-scroll'),header=host?.querySelector('.service-header');
 if(!host||!scroll||!header)return()=>{};
 const row=header.querySelector('.home-masthead,.brand-row'),search=header.querySelector('.header-search'),tabs=header.querySelector('.service-tabs');
 if(!row||!search||!tabs)return()=>{};
 const top=scrollTop??scroll.scrollTop,tabLeft=tabs.scrollLeft,expanded=header.offsetHeight,document=host.ownerDocument;
 const scale=header.getBoundingClientRect().height/expanded,origin=header.getBoundingClientRect().top;
 const y=node=>(node.getBoundingClientRect().top-origin)/scale;
 const geometry={'masthead-height':y(search)-8,'row-top':y(row),'search-flow':y(tabs)-y(search)+8,'tabs-flow':expanded-y(tabs),'search-height':search.offsetHeight};
 for(const [name,value] of Object.entries(geometry))host.style.setProperty(`--service-${name}`,`${Math.round(value)}px`);
 const wrap=(name,child)=>{const node=document.createElement('div');node.className=name;node.append(child);return node;};
 header.replaceChildren(wrap('service-masthead',row),wrap('service-search-rail',wrap('service-search-inner',search)),wrap('service-tabs-rail',tabs));
 host.classList.add('has-service-chrome');scroll.prepend(header);scroll.scrollTop=top;tabs.scrollLeft=tabLeft;
 let collapsed=scroll.scrollTop>HEADER_SCROLL_BOUNDS.initial;
 const update=()=>{if(collapsed?scroll.scrollTop<HEADER_SCROLL_BOUNDS.exit:scroll.scrollTop>HEADER_SCROLL_BOUNDS.enter)collapsed=!collapsed;host.classList.toggle('is-service-collapsed',collapsed);};
 scroll.addEventListener('scroll',update,{passive:true});update();
 const ready=requestAnimationFrame(()=>{update();host.classList.add('is-service-chrome-ready');});
 return()=>{cancelAnimationFrame(ready);scroll.removeEventListener('scroll',update);host.classList.remove('has-service-chrome','is-service-collapsed','is-service-chrome-ready');};
}
