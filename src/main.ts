import "./styles/site.css";
import "./styles/footer.css";
import "./styles/loader.css";
import "./styles/work.css";
import "./styles/detail.css";
import "./styles/responsive.css";
import { projects as P } from "./data/projects";
import { toolImages as TOOLIMG, fishFrames, loaderFishFrames } from "./data/media";
// @ts-nocheck - the interaction prototype is progressively being split into typed modules.
window.FISH = fishFrames;
window.LDFISH = loaderFishFrames;
/* ---------- CONFIG: edit these ---------- */
const CONFIG={
  links:{linkedin:'https://www.linkedin.com/in/saiedalvi/',behance:'https://www.behance.net/saiedalvi1',
         resume:'./assets/Saie_Dalvi_Resume.pdf'},   // add the resume PDF under public/assets
  protoLinks:{mat:'#',revibe:'#'},                  // Figma prototype URLs
  messageEndpoint:''                                // not decided yet – see sendMessage()
};
/* ---------- data ---------- */

const ICONS={
trend:'<path d="M2 20l9-9 5 5 11-12M22 4h5v5"/>',bars:'<path d="M3 22V10M10 22V4M17 22V13M24 22V8M30 22V16"/>',
list:'<path d="M3 6l2 2 3-3M12 6h14M3 14l2 2 3-3M12 14h14M3 22l2 2 3-3M12 22h14"/>',
spark:'<path d="M16 2v26M3 15h26M7 6l18 18M25 6L7 24"/>',gauge:'<path d="M4 22a12 12 0 0124 0M16 22l6-8"/>',
spiral:'<path d="M16 14a2 2 0 112 2 4 4 0 11-4-4 6 6 0 116 6"/>',lines:'<path d="M3 5h26M3 11h20M3 17h26M3 23h14" />',
flow:'<path d="M2 14h6M24 14h6M8 8h6v12H8zM18 8h6v12h-6z"/>',cursor:'<path d="M8 4l14 8-6 2 4 8-3 1-4-8-5 4z"/>',
rings:'<circle cx="11" cy="14" r="8"/><circle cx="21" cy="14" r="8"/>',flag:'<path d="M8 28V4M8 5h16l-4 5 4 5H8"/>'};
const BSH=[['CMF Trend analysis','cmf-trend','Mapped CMF trends in hoods, hobs and ovens, which led to new pattern combinations to explore.'],
['Competitor analysis','competitor','Compared Home Connect with similar apps from other brands to find where it can improve.'],
['UX audit and user flow','ux-audit','Mapped Home Connect’s flows and features to find UX improvement opportunities.'],
['AI-assisted design tools','ai-tools','Built an interactive CMF dashboard with claude, future scope CMF AI agent.'],
['Interaction & HMI design','hmi','Designing appliance interactions that balance usability with brand consistency.'],
['Design Thinking','design-thinking','Took part in ideation workshops with cross-functional teams.']];
const META=[['UX research and IA','ux-research','Grounded client designs in research, competitor analysis and information architecture.'],
['User flow & Wireframing','user-flow','Mapped user flows and turned them into wireframes in Figma.'],
['Prototyping','prototyping','Built high-fidelity prototypes for responsive websites and web apps.'],
['Collaboration','collaboration','Worked with developers and stakeholders to keep the experience consistent.'],
['Client ownership','client-ownership','Sole point of contact for a full client project, end to end.']];
const TOOLS=[['Figma','figma'],['Voiceflow','voiceflow'],['Mural','mural'],['Miro','miro'],['After Effects','after-effects'],['Claude','claude'],['Codex','codex'],['Illustrator','illustrator'],['MS Office','ms-office']];
const LIKES=[['Painting','./assets/prototype-261.png',1],['Beach','./assets/prototype-262.png',1],['Art museum','./assets/prototype-263.png',1]];
const esc=s=>s.replace(/&/g,'&amp;');
/* ---------- build ---------- */
const SKSVG={"cmf-trend": "<svg viewBox=\"11.20 75.10 23.66 20.70\" width=\"23.7\" height=\"20.7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.2 94.8C15.0318 89.6083 16.1587 90.9062 19.9876 90.9062C23.0849 90.9062 24.8164 89.933 26.7132 84.5346C29.014 77.9862 30.6954 78.7826 32.3768 77.1897\"/><path d=\"M28.7 76.4773L33.1617 76.1007L33.8635 80.4226\"/></svg>", "competitor": "<svg viewBox=\"11.20 265.80 27.19 22.00\" width=\"27.2\" height=\"22.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.2 286.8H37.3852\"/><path d=\"M14.7931 284.207V271.985\"/><path d=\"M18.4983 284.208V277.541\" opacity=\"0.4\"/><path d=\"M23.3121 284.207V266.8\"/><path d=\"M27.0162 284.208V274.578\" opacity=\"0.4\"/><path d=\"M31.8312 284.208V275.689\"/><path d=\"M35.5353 284.208V269.393\" opacity=\"0.4\"/></svg>", "ux-audit": "<svg viewBox=\"11.20 457.80 27.77 22.00\" width=\"27.8\" height=\"22.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12.2 460.878L14.278 462.956L17.6027 458.8\"/><path d=\"M21.3428 460.879H37.9666\"/><path d=\"M12.2 468.532L14.278 470.61L17.6027 466.454\" opacity=\"0.6\"/><path d=\"M21.3428 468.532H33.8107\" opacity=\"0.6\"/><path d=\"M13.0311 475.06L14.9013 476.93M14.9013 476.93L16.7715 478.8M14.9013 476.93L16.7715 475.06M14.9013 476.93L13.0311 478.8\" opacity=\"0.35\"/><path d=\"M21.3428 477.138H35.8886\" opacity=\"0.35\"/></svg>", "ai-tools": "<svg viewBox=\"11.20 658.80 22.00 22.00\" width=\"22.0\" height=\"22.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22.2 659.8V679.8\"/><path d=\"M12.2 669.8H32.2\"/><path d=\"M15.6283 663.229L28.7712 676.371\" opacity=\"0.4\"/><path d=\"M28.7712 663.229L15.6283 676.371\" opacity=\"0.4\"/></svg>", "hmi": "<svg viewBox=\"11.20 876.80 31.56 22.00\" width=\"31.6\" height=\"22.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.1534 897.8C12.3086 895.563 12.019 893.155 12.3095 890.782C12.6001 888.409 13.462 886.142 14.8215 884.175C16.1809 882.208 17.9973 880.601 20.1146 879.491C22.232 878.38 24.5871 877.8 26.9779 877.8C29.3688 877.8 31.7239 878.38 33.8413 879.491C35.9586 880.601 37.775 882.208 39.1344 884.175C40.4938 886.142 41.3558 888.409 41.6464 890.782C41.9369 893.155 41.6473 895.563 40.8025 897.8\"/><path d=\"M27 887.627L33.1972 880\"/><path d=\"M26.9803 890.411C28.1651 890.411 29.1255 889.45 29.1255 888.266C29.1255 887.081 28.1651 886.12 26.9803 886.12C25.7956 886.12 24.8351 887.081 24.8351 888.266C24.8351 889.45 25.7956 890.411 26.9803 890.411Z\" fill=\"currentColor\"/></svg>", "design-thinking": "<svg viewBox=\"11.20 1073.80 18.77 26.00\" width=\"18.8\" height=\"26.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20.5643 1087.62L20.9463 1088.05L21.0828 1088.7L20.8781 1089.47L20.2914 1090.19L19.3499 1090.67L18.1492 1090.76L16.8666 1090.37L15.7068 1089.44L14.8881 1088.02L14.6015 1086.26L14.9836 1084.38L16.0615 1082.6L17.8217 1081.24L20.0867 1080.52L22.611 1080.61L25.0807 1081.63L27.1683 1083.55L28.5464 1086.18L28.9694 1089.28L28.2872 1092.48L26.4724 1095.39L23.6616 1097.61L20.1276 1098.8L16.2389 1098.7L12.473 1097.27\"/><path d=\"M13.4826 1079.02L12.2 1077.26\"/><path d=\"M19.7594 1076.98V1074.8\"/><path d=\"M26.0229 1079.03L27.3055 1077.27\"/></svg>", "ux-research": "<svg viewBox=\"360.20 77.80 41.52 18.00\" width=\"41.5\" height=\"18.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M361.2 78.8H389.225\"/><path d=\"M371.245 86.8H400.725\" opacity=\"0.6\"/><path d=\"M365.7 94.8H390.725\" opacity=\"0.3\"/></svg>", "user-flow": "<svg viewBox=\"356.20 265.80 32.83 22.00\" width=\"32.8\" height=\"22.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M358.354 272.953H364.508C365.277 272.953 365.662 273.338 365.662 274.107V279.492C365.662 280.261 365.277 280.646 364.508 280.646H358.354C357.585 280.646 357.2 280.261 357.2 279.492V274.107C357.2 273.338 357.585 272.953 358.354 272.953Z\"/><path d=\"M366.43 276.8H369.123\"/><path d=\"M373.802 271.8L378.418 276.8L373.802 281.8L369.187 276.8L373.802 271.8Z\"/><path d=\"M378.419 276.8H380.342M380.342 276.8V268.723H383.419M380.342 276.8V284.877H383.419\"/><path d=\"M383.419 266.8H388.034V270.646H383.419V266.8Z\" opacity=\"0.5\"/><path d=\"M383.419 282.954H388.034V286.8H383.419V282.954Z\" opacity=\"0.5\"/></svg>", "prototyping": "<svg viewBox=\"356.20 474.80 19.72 26.00\" width=\"19.7\" height=\"26.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M361.631 482.447V497.215L365.692 493.523L368.646 499.8L371.969 498.323L369.015 492.046L374.923 491.677L361.631 482.447Z\"/><path d=\"M357.2 479.123L359.046 480.6M361.631 475.8V478.015M366.061 479.123L364.215 480.6\" opacity=\"0.5\"/></svg>", "collaboration": "<svg viewBox=\"356.20 679.80 32.00 22.00\" width=\"32.0\" height=\"22.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M377.2 690.8C377.2 696.323 372.723 700.8 367.2 700.8C361.677 700.8 357.2 696.323 357.2 690.8C357.2 685.277 361.677 680.8 367.2 680.8C372.723 680.8 377.2 685.277 377.2 690.8Z\" opacity=\"0.55\"/><path d=\"M387.2 690.8C387.2 696.323 382.723 700.8 377.2 700.8C371.677 700.8 367.2 696.323 367.2 690.8C367.2 685.277 371.677 680.8 377.2 680.8C382.723 680.8 387.2 685.277 387.2 690.8Z\" opacity=\"0.55\"/></svg>", "client-ownership": "<svg viewBox=\"356.20 872.80 20.59 26.00\" width=\"20.6\" height=\"26.0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M357.2 873.8V897.8\"/><path d=\"M357.2 875.829C361.031 873.8 364.637 873.913 368.017 876.167C371.397 878.42 373.989 878.533 375.792 876.505V884.955C372.411 887.209 369.369 887.321 366.665 885.293C363.961 883.265 360.806 883.265 357.2 885.293\"/></svg>"};const SKPOS={"cmf-trend": [75.1, 22.3], "competitor": [73.8, 21], "ux-audit": [73.8, 27.8], "ai-tools": [73.8, 39.8], "hmi": [73.8, 27.8], "design-thinking": [69.8, 52.8], "ux-research": [77.8, 51.8], "user-flow": [73.8, 39.8], "prototyping": [90.8, 55.8], "collaboration": [94.8, 59.8], "client-ownership": [69.8, 55.8]};
function skills(id,list,w,hw){document.getElementById(id).style.setProperty('--g',(hw-w)+'px');document.getElementById(id).innerHTML=list.map(s=>{const p=SKPOS[s[1]];const h=s[0].replace(' and ',' & ');return `<div class="sk" style="--w:${w}px;--hw:${hw}px;--t:${p[0]}px;--ht:${p[1]}px"><div class="in"><div class="ic">${SKSVG[s[1]]}</div><div class="tx"><h5><span class="d">${esc(s[0])}</span><span class="h">${esc(h)}</span></h5><p>${esc(s[2])}</p></div></div></div>`}).join('');}
skills('sr1',BSH,119,160);skills('sr2',META,144,160);
document.getElementById('tgrid').innerHTML=TOOLS.map(t=>`<div class="tool"><div class="ti"><img src="${TOOLIMG[t[1]]||''}" alt="" onerror="this.parentNode.classList.add('nf');this.remove()"><span class="lt">${t[0][0]}</span></div>${t[0]}</div>`).join('');
document.querySelectorAll('[data-link]').forEach(a=>a.href=CONFIG.links[a.dataset.link]);
document.querySelectorAll('[data-proto]').forEach(a=>{a.href=CONFIG.protoLinks[a.dataset.proto];a.target='_blank'});
/* ---------- clock (IST) ---------- */
function tick(){document.getElementById('clock').textContent=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'numeric',minute:'2-digit',hour12:true}).toUpperCase()}
tick();setInterval(tick,15000);
/* ---------- Things I like carousel ---------- */
let cur=0;const stk=document.getElementById('lstk'),dots=document.getElementById('ldots');
stk.innerHTML=LIKES.map(l=>`<div class="ph2"><img src="${l[1]}" alt="${l[0]}" onerror="this.remove()">${l[2]?'':`<span>${l[0]}</span>`}</div>`).join('');
dots.innerHTML=LIKES.map(()=>'<i></i>').join('');
function paint(){[...stk.children].forEach((el,i)=>el.dataset.p=(i-cur+3)%3);[...dots.children].forEach((d,i)=>d.classList.toggle('on',i===cur));document.getElementById('lcnt').textContent=(cur+1)+' / 3'}
document.getElementById('lnext').onclick=()=>{cur=(cur+1)%3;paint()};
document.getElementById('lprev').onclick=()=>{cur=(cur+2)%3;paint()};paint();
/* ---------- message (destination TBD) ---------- */
async function sendMessage(text){
  if(!CONFIG.messageEndpoint)return false;
  const r=await fetch(CONFIG.messageEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text})});return r.ok;}
document.getElementById('send').onclick=async()=>{const box=document.getElementById('msgbox'),lbl=document.getElementById('sendlbl'),t=box.value.trim();
  if(!t){box.focus();return}lbl.textContent='Sending…';const ok=await sendMessage(t);lbl.textContent=ok?'Message sent':CONFIG.messageEndpoint?'Try again':'Not configured';
  if(ok)box.value='';setTimeout(()=>lbl.textContent='Send message',2200)};
/* ---------- footer: "Thankyou!" slides up through English, Marathi, German ---------- */
(function(){var box=document.getElementById('thx');if(!box)return;var w=[].slice.call(box.children),i=0;if(w.length<2)return;
  var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  setInterval(function(){var a=w[i],n=w[(i+1)%w.length];
    n.style.transition='none';n.className='';void n.offsetWidth;n.style.transition='';
    a.className='off';n.className='on';i=(i+1)%w.length;
    setTimeout(function(){w.forEach(function(x){if(x!==w[i]&&x.className==='off'){x.style.transition='none';x.className='';void x.offsetWidth;x.style.transition='';}});},900);},rm?4000:2800);})();
/* ---------- loader: types the greeting, a fish swims across and clears it, then the portfolio fades in ---------- */
(function(){
  'use strict';
  var root=document.getElementById('ld'),de=document.documentElement;
  var h=location.hash;
  if((h&&h!=='#'&&h!=='#/')&&!/loader/.test(location.search)){root.remove();return;}   // only on the home page
  try{if(sessionStorage.getItem('saie-portfolio-loader-seen')==='1'){root.remove();return;}}catch(e){}
  window.__ldActive=true;de.classList.add('ld-lock');
  var TYPE_MS=88,CROSS=3.2,FISH_SIZE=1.5;
  var FW=465,FH=281,LA=0,LB=56,NF=57;
  var GEO={"CEN":[[264.7,118.5],[265.3,118.5],[265.8,118.4],[266.4,118.4],[267.5,118.3],[268.6,118.1],[269.7,118.1],[270.7,118.0],[271.7,117.9],[272.7,117.9],[273.7,117.9],[274.6,117.9],[275.5,118.0],[276.4,118.0],[277.3,118.0],[278.2,118.1],[279.2,118.1],[280.2,118.2],[281.1,118.2],[282.1,118.3],[283.1,118.3],[284.2,118.4],[285.1,118.5],[286.0,118.7],[286.7,118.9],[287.5,119.2],[288.3,119.5],[288.9,119.9],[289.5,120.3],[290.0,120.7],[290.6,121.1],[291.1,121.5],[291.6,122.0],[292.2,122.5],[292.7,122.9],[293.3,123.4],[293.9,123.9],[294.5,124.4],[295.0,124.9],[295.6,125.4],[296.0,125.8],[296.4,126.2],[296.8,126.5],[297.1,126.8],[297.4,127.0],[297.7,127.3],[298.0,127.6],[298.3,127.8],[298.5,128.2],[298.8,128.5],[299.0,128.7],[299.1,129.0],[299.3,129.2],[299.5,129.4],[299.5,129.5],[299.6,129.6],[299.7,129.7]],"BB":[[112,32,401,225],[114,32,402,224],[115,31,402,223],[116,31,403,223],[118,31,404,222],[119,31,405,222],[120,31,406,221],[121,30,407,220],[122,30,408,220],[124,30,408,219],[125,30,409,219],[127,30,410,219],[128,29,411,218],[129,29,411,218],[131,29,412,217],[132,29,413,217],[133,28,414,217],[135,28,415,216],[136,28,416,215],[137,27,417,214],[139,27,418,214],[140,26,419,213],[141,26,420,212],[143,26,422,211],[144,25,423,211],[145,25,423,211],[146,25,423,212],[147,25,423,213],[148,24,423,213],[149,24,423,214],[150,24,423,215],[150,23,423,216],[151,23,423,218],[152,22,423,219],[153,22,423,220],[154,22,422,221],[154,22,422,222],[154,22,422,223],[154,21,422,225],[154,21,422,226],[153,20,422,227],[152,20,422,228],[152,19,422,229],[151,19,422,230],[150,18,421,231],[149,18,421,232],[149,17,421,233],[148,17,421,235],[147,16,421,236],[147,16,420,237],[147,15,420,239],[147,14,420,240],[146,13,420,242],[146,12,419,243],[146,12,419,245],[146,11,419,247],[146,10,419,248]]};
  var CEN=GEO.CEN,BB=GEO.BB,EXTL=0,EXTR=0;
  for(var q=0;q<NF;q++){EXTL=Math.max(EXTL,CEN[q][0]-BB[q][0]);EXTR=Math.max(EXTR,BB[q][2]+1-CEN[q][0]);}
  var $=function(id){return document.getElementById(id);};
  var stage=$('ldStage'),line=$('ldLine'),t1=$('ldT1'),t2=$('ldT2'),caret=$('ldCaret'),canvas=$('ldFish'),ctx=canvas.getContext('2d'),soundHint=$('ldSound');
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var S=1,VW=0,VH=0,lineLeft=0,runId=0,phase='';
  var sleep=function(ms){return new Promise(function(r){setTimeout(r,ms);});};
  function layout(){VW=innerWidth;VH=innerHeight;S=Math.min((VW-32)/1440,VH/1024,2);if(S<.2)S=.2;stage.style.setProperty('--s',S);
    var dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(VW*dpr);canvas.height=Math.round(VH*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);}
  function placeLine(){t1.textContent="Hi, I'm ";t2.textContent='Saie Dalvi';caret.style.display='none';
    var w=t1.getBoundingClientRect().width/S+t2.getBoundingClientRect().width/S;t1.textContent='';t2.textContent='';caret.style.display='';
    lineLeft=Math.round((1440-w)/2);line.style.left=lineLeft+'px';}
  addEventListener('resize',layout);
  /* typing sound, synthesised */
  var AC=null,noise=null;try{AC=new(window.AudioContext||window.webkitAudioContext)();}catch(e){AC=null;}
  function hint(){soundHint.classList.toggle('on',!!AC&&AC.state!=='running'&&phase!==''&&phase!=='done');}
  function unlock(){if(AC&&AC.state==='suspended')AC.resume().then(hint,hint);hint();}
  ['pointerdown','keydown','touchstart'].forEach(function(ev){addEventListener(ev,unlock,{passive:true});});
  function click(st){if(!AC||AC.state!=='running')return;var t=AC.currentTime;
    if(!noise){var n=Math.floor(AC.sampleRate*.05);noise=AC.createBuffer(1,n,AC.sampleRate);var d=noise.getChannelData(0);for(var i=0;i<n;i++)d[i]=Math.random()*2-1;}
    var src=AC.createBufferSource();src.buffer=noise;src.playbackRate.value=.9+Math.random()*.3;
    var bp=AC.createBiquadFilter();bp.type='bandpass';bp.frequency.value=2200+Math.random()*1600;bp.Q.value=.9;
    var g=AC.createGain();g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.5*st,t+.002);g.gain.exponentialRampToValueAtTime(.0001,t+.035);
    src.connect(bp);bp.connect(g);g.connect(AC.destination);src.start(t);src.stop(t+.05);
    var o=AC.createOscillator(),og=AC.createGain();o.type='sine';o.frequency.setValueAtTime(170+Math.random()*30,t);o.frequency.exponentialRampToValueAtTime(70,t+.05);
    og.gain.setValueAtTime(.0001,t);og.gain.exponentialRampToValueAtTime(.26*st,t+.003);og.gain.exponentialRampToValueAtTime(.0001,t+.06);
    o.connect(og);og.connect(AC.destination);o.start(t);o.stop(t+.08);}
  /* fish frames */
  var imgs=[],lastGood=null;
  function lsrc(i){return window.LDFISH?window.LDFISH[i]:'assets/loader/f'+(i<10?'0':'')+i+'.webp';}
  for(var i=0;i<NF;i++){var im=new Image();im.src=lsrc(i);imgs.push(im);}
  var framesReady=Promise.all(imgs.map(function(im){return(im.decode?im.decode():Promise.resolve()).catch(function(){});}));
  function ok(i){var c=imgs[i];return c&&c.complete&&c.naturalWidth?c:null;}
  function drawFish(X,Y,pos){ctx.clearRect(0,0,VW,VH);var sc=FISH_SIZE*S,dw=FW*sc,dh=FH*sc;
    var i0=Math.min(NF-1,Math.floor(pos)),fr=pos-i0,i1=Math.min(NF-1,i0+1);
    var a=ok(i0)||ok(i1)||lastGood;if(!a)return;if(ok(i0))lastGood=ok(i0);
    ctx.globalAlpha=1;ctx.drawImage(a,X-CEN[i0][0]*sc,Y-CEN[i0][1]*sc,dw,dh);
    var b=ok(i1);if(b&&i1!==i0&&fr>.02){ctx.globalAlpha=fr;ctx.drawImage(b,X-CEN[i1][0]*sc,Y-CEN[i1][1]*sc,dw,dh);ctx.globalAlpha=1;}}
  function runFish(id){return new Promise(function(resolve){
    var sc=FISH_SIZE*S,x0=-EXTL*sc-12,x1=VW+EXTR*sc+12,Y=VH/2,t0=null;
    function step(now){if(id!==runId)return resolve();if(t0===null)t0=now;
      var p=Math.min(1,(now-t0)/1000/CROSS),X=x0+(x1-x0)*p;drawFish(X,Y,LA+p*(LB-LA));
      var left=(VW-1440*S)/2+lineLeft*S,cut=(X-left)/S;line.style.setProperty('--cut',cut+'px');if(cut>-40)caret.className='ldcaret gone';
      if(p<1)requestAnimationFrame(step);else{ctx.clearRect(0,0,VW,VH);resolve();}}
    requestAnimationFrame(step);});}
  async function typeInto(el,text,id){for(var i=0;i<text.length;i++){if(id!==runId)return false;var ch=text.charAt(i);
    el.textContent+=ch;click(ch===' '?.5:.9+Math.random()*.25);var d=TYPE_MS*(.65+Math.random()*.7);if(ch===',')d+=240;else if(ch===' ')d*=.8;await sleep(d);}return true;}
  function finish(){phase='done';hint();try{sessionStorage.setItem('saie-portfolio-loader-seen','1');}catch(e){}window.__ldActive=false;root.classList.add('out');de.classList.remove('ld-lock');window.scrollTo(0,0);setTimeout(function(){root.remove();},900);}
  async function play(){var id=++runId;layout();
    try{await Promise.race([document.fonts.ready,sleep(1800)]);}catch(e){}
    placeLine();phase='caret';
    if(reduce){t1.textContent="Hi, I'm ";t2.textContent='Saie Dalvi';await sleep(1200);finish();return;}
    await sleep(1100);phase='typing';caret.className='ldcaret typing';
    if(!(await typeInto(t1,"Hi, I'm ",id)))return;if(!(await typeInto(t2,'Saie Dalvi',id)))return;
    caret.className='ldcaret';phase='hold';await sleep(1300);
    await Promise.race([framesReady,sleep(8000)]);
    phase='fish';await runFish(id);await sleep(350);finish();}
  layout();play();
})();
/* ---------- water-current background (flows on into the shore in the footer) ---------- */
(function(){
  var cv=document.createElement('canvas');cv.id='water';cv.setAttribute('aria-hidden','true');
  document.documentElement.insertBefore(cv,document.body);
  var gl=cv.getContext('webgl',{antialias:false,alpha:false,powerPreference:'low-power'});if(!gl)return;
  var vs='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  var fs=`precision highp float;uniform vec2 r;uniform float t;uniform float sy;uniform float S;
  #define TAU 6.28318530718
  float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
  float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<3;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
  vec3 wor(vec2 p){vec2 i=floor(p),f=fract(p);float a=9.,id=0.;
    for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec2 g=vec2(float(x),float(y));vec2 o=vec2(h(i+g),h(i+g+37.1));float d=length(g+o-f);
      if(d<a){a=d;id=h(i+g+11.3);}}
    return vec3(a,id,0.);}
  float caus(vec2 uv,float tt){
    vec2 p=mod(uv*TAU,TAU)-250.;vec2 i=p;float c=1.;float inten=.005;
    for(int n=0;n<5;n++){
      float t2=tt*(1.-(3.5/float(n+1)));
      i=p+vec2(cos(t2-i.x)+sin(t2+i.y),sin(t2-i.y)+cos(t2+i.x));
      c+=1./length(vec2(p.x/(sin(i.x+t2)/inten),p.y/(cos(i.y+t2)/inten)));
    }
    c/=5.;c=1.17-pow(c,1.4);
    return pow(abs(c),8.);
  }
  void main(){
    vec2 fc=gl_FragCoord.xy;
    vec2 uv=fc/r.y+vec2(0.,t*.012);
    float k=smoothstep(.04,.85,caus(uv*2.3,t*.45+23.)+caus(uv*3.6+.37,t*.6+7.)*.55);
    float s=.5+.5*sin(uv.x*2.6+t*.18+sin(uv.y*2.2+t*.13)*1.6);
    vec3 col=mix(vec3(.968,.968,.974),vec3(.90,.905,.918),s*s*.75);
    col=mix(col,vec3(1.),k);
    float x=fc.x,y=r.y-fc.y;
    float shore=sy+(sin(x/(S*230.)+t*.35)*26.+sin(x/(S*95.)-t*.5+1.3)*8.+sin(x/(S*520.)+.8)*34.)*S;
    float d=(shore-y)/S;                                   // layout px above the waterline
    float near=clamp(smoothstep(200.,0.,d),0.,1.);
    col=mix(col,vec3(.985,.875,.90),near*near*.55);        // water warms to pink near the sand
    if(d>-3.&&d<130.){                                       // bubbly foam where the wave ends
      float wob=fbm(vec2(x/(S*34.),y/(S*34.)+t*.35));
      float edge=24.+58.*wob+10.*sin(x/(S*70.)+t*.8);        // ragged outer edge, breathes with the wave
      float body=smoothstep(edge,edge-24.,d);
      vec3 w1=wor(vec2(x,y)/(S*12.)+vec2(t*.05,t*.03));
      vec3 w2=wor(vec2(x,y)/(S*6.)+vec2(-t*.04,t*.02)+9.);
      float r1=.30+.16*w1.y,r2=.30+.16*w2.y;
      float ring=clamp(smoothstep(.07,.0,abs(w1.x-r1))*.8+smoothstep(.09,.0,abs(w2.x-r2))*.5,0.,1.);   // round bubble outlines
      float lace=smoothstep(r2+.02,r2-.04,w2.x)*smoothstep(edge+42.,edge-4.,d)*(.5+.5*n(vec2(x,y)/(S*15.)));  // loose bubbles past the edge
      vec3 foam=mix(vec3(1.),vec3(.86,.82,.87),ring*.55);
      foam*=.97+.03*fbm(vec2(x,y)/(S*20.));
      foam=mix(foam,vec3(.90,.87,.91),smoothstep(10.,0.,d)*.45);                    // soft shadow against the sand
      col=mix(col,foam,clamp(body+lace*.5,0.,1.)*.97);
    }                          // foam where the wave meets the shore
    if(d<2.){
      float dd=max(-d,0.);
      vec3 sand=mix(vec3(.935,.655,.70),vec3(.84,.52,.60),smoothstep(0.,320.,dd));
      sand*=.94+.12*fbm(fc/(S*2.2));
      sand=mix(sand,vec3(.76,.44,.53),smoothstep(11.,0.,dd)*.4);
      sand+=.025*sin(dd*.07+x/(S*160.)+t*.2);
      col=mix(col,sand,smoothstep(.8,-.8,d));
    }
    gl_FragColor=vec4(col,1.);
  }`;
  function sh(type,src){var o=gl.createShader(type);gl.shaderSource(o,src);gl.compileShader(o);return o;}
  var pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
  if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return;gl.useProgram(pr);
  var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  var loc=gl.getAttribLocation(pr,'a');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  var ur=gl.getUniformLocation(pr,'r'),ut=gl.getUniformLocation(pr,'t'),usy=gl.getUniformLocation(pr,'sy'),uS=gl.getUniformLocation(pr,'S');
  var foot=document.getElementById('foot');
  var reduce=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches),RES=.85,t0=performance.now();
  function size(){cv.width=Math.max(2,Math.round(innerWidth*RES));cv.height=Math.max(2,Math.round(innerHeight*RES));gl.viewport(0,0,cv.width,cv.height);gl.uniform2f(ur,cv.width,cv.height);}
  function draw(now){
    var u=Math.min(innerWidth,1440)/1440,top=foot?foot.getBoundingClientRect().top:1e5;
    gl.uniform1f(usy,(top+120*u)*RES);gl.uniform1f(uS,u*RES);
    gl.uniform1f(ut,reduce?6:(now-t0)/1000+4);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
  }
  addEventListener('resize',function(){size();draw(performance.now());});size();
  if(reduce){addEventListener('scroll',function(){draw(performance.now());},{passive:true});draw(performance.now());}
  else (function loop(now){if(!document.hidden&&!window.__ldActive)draw(now);requestAnimationFrame(loop);})(performance.now());
})();
/* ---------- swimming fish (workspace card) ---------- */
(function(){
  var N=126,FW=465,FH=281,FPS=25,SPEED=1.35,FRONT=42,CMAX=64;
  var CEN=[[206.3,123.1],[233.8,120.9],[261.5,118.9],[264.9,118.5],[266.7,118.3],[268.5,118.1],[270.2,118.0],[273.4,117.9],[274.8,118.0],[276.2,118.0],[277.6,118.1],[280.7,118.2],[282.4,118.4],[284.0,118.5],[286.5,119.3],[289.0,120.0],[289.9,120.7],[291.6,122.1],[293.4,123.6],[294.4,124.4],[295.8,125.6],[297.1,126.9],[297.6,127.3],[298.4,128.2],[299.1,129.0],[299.4,129.4],[300.2,130.5],[300.9,131.7],[301.4,132.4],[302.1,133.7],[302.9,135.0],[303.2,135.6],[303.8,136.6],[304.4,137.6],[304.7,138.0],[305.3,139.4],[305.9,140.7],[306.2,141.7],[308.4,144.3],[310.6,146.9],[312.6,148.7],[315.4,151.8],[318.3,154.8],[319.1,156.2],[320.3,157.5],[321.3,158.7],[321.5,158.6],[319.0,157.7],[316.5,156.8],[313.8,156.0],[308.3,154.8],[302.9,153.5],[300.1,153.0],[294.0,152.6],[287.9,152.1],[281.5,151.6],[273.2,150.7],[264.9,149.9],[258.5,149.6],[252.2,149.3],[247.2,150.2],[244.0,151.5],[240.8,152.8],[237.4,154.0],[234.0,155.3],[232.4,155.8],[228.4,155.3],[224.6,154.9],[222.2,153.9],[220.2,151.9],[218.2,149.9],[218.6,148.8],[220.1,146.9],[221.6,145.0],[222.7,144.1],[222.4,143.3],[222.1,142.4],[220.7,142.3],[218.4,142.4],[216.2,142.4],[215.4,142.5],[213.6,143.5],[211.9,144.4],[211.0,145.3],[209.1,146.7],[207.3,148.1],[206.4,148.7],[205.1,149.6],[203.9,150.6],[203.6,151.0],[202.8,151.6],[202.0,152.3],[201.6,152.6],[199.9,152.8],[198.2,153.1],[196.9,153.0],[194.2,153.0],[191.5,153.0],[190.0,153.0],[187.1,152.9],[184.1,152.9],[182.5,152.8],[179.3,152.3],[176.1,151.8],[174.4,151.4],[169.2,150.6],[164.1,149.8],[160.6,149.4],[154.2,148.1],[147.7,146.7],[144.7,145.7],[140.1,143.2],[135.5,140.8],[133.9,139.3],[131.7,137.1],[129.5,135.0],[128.9,134.2],[128.0,133.1],[127.1,131.9],[126.8,131.5],[126.3,130.9],[125.8,130.3],[125.7,130.0],[125.5,129.6],[151.2,127.4],[178.8,125.2]];
  var BB=[[103,32,393,228],[112,31,401,225],[112,31,402,225],[112,31,401,224],[112,31,401,224],[122,30,408,220],[122,30,408,220],[122,30,408,221],[122,30,408,220],[133,28,415,217],[133,28,414,217],[133,28,414,217],[133,28,414,217],[144,25,423,211],[144,25,424,211],[144,25,423,211],[151,22,423,218],[151,22,423,218],[151,22,424,218],[153,19,423,228],[153,19,422,228],[153,19,423,228],[147,16,421,236],[147,16,420,236],[147,16,421,236],[145,10,419,249],[145,10,419,250],[146,10,419,250],[152,10,416,246],[152,10,416,246],[152,10,416,246],[158,11,414,242],[158,11,415,242],[158,11,415,242],[163,11,422,259],[163,11,422,259],[163,11,422,259],[168,10,430,280],[168,10,429,280],[168,10,430,280],[201,17,429,280],[201,18,428,280],[201,17,428,280],[228,22,422,280],[228,22,423,280],[228,22,423,280],[223,28,419,280],[223,28,419,280],[223,28,418,280],[183,21,427,276],[183,21,427,276],[183,21,427,276],[144,18,433,275],[144,18,433,275],[144,18,434,275],[102,22,442,280],[102,23,442,280],[62,18,452,280],[53,17,453,280],[53,17,453,280],[45,15,454,280],[45,15,454,280],[38,21,450,280],[38,22,450,280],[38,22,450,280],[32,28,445,280],[32,28,445,280],[33,28,445,280],[27,32,434,280],[26,32,434,280],[26,32,434,280],[17,33,427,262],[16,34,427,262],[18,33,427,262],[10,35,427,260],[11,35,427,260],[11,36,427,260],[12,39,405,262],[12,39,405,262],[13,39,405,262],[14,36,387,263],[14,36,387,263],[14,36,386,263],[19,34,373,270],[20,34,373,270],[20,34,373,270],[28,34,368,274],[28,34,368,274],[28,34,368,274],[41,38,357,274],[41,38,358,274],[41,38,357,274],[46,40,347,273],[47,40,347,273],[46,40,347,273],[49,38,334,271],[49,38,334,271],[49,38,334,271],[66,36,320,269],[66,36,320,269],[66,36,320,269],[71,35,310,268],[71,35,310,268],[71,35,310,268],[66,34,300,266],[67,34,300,267],[66,34,300,266],[56,34,269,260],[56,34,269,260],[56,34,269,260],[47,34,238,259],[47,34,238,259],[47,34,238,259],[37,34,235,249],[37,34,235,249],[37,34,235,249],[32,33,238,245],[32,33,238,245],[32,33,238,245],[29,33,239,241],[29,33,239,241],[29,33,239,241],[28,34,240,240],[28,34,240,240],[28,34,240,240],[27,33,241,238]];
  var cv=document.getElementById('fish'),ctx=cv.getContext('2d');
  var reduce=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var W=0,H=0,dpr=1,lastGood=null,pos=0,last=0,time=0,hb=0,holdUntil=0,pinned=false,focused=false,pointer=null,box=null;
  var blinkT=-1,nextBlink=1.8,wasWant=false,shiftX=0,shiftY=0,anchor=null,wantNow=false,dtNow=.016,imgs=[],cimgs=[],loaded=0,started=false;
  function pad(i){return ('00'+i).slice(-3)}
  function src(i,c){return window.FISH?window.FISH[c?'c':'f'][i]:'assets/fish/'+(c?'c':'f')+pad(i)+'.webp'}
  var prep={f:[],c:[]},prepKey='',prepI=0,prepTimer=0;
  function target(){var sc=Math.min((W-12)/FW,(H-6)/FH)*.86;return{tw:Math.max(2,Math.round(FW*sc*dpr)),th:Math.max(2,Math.round(FH*sc*dpr))};}
  function shrink(img,tw,th){var cur=img,cw=img.naturalWidth,ch=img.naturalHeight;
    while(cw/2>=tw){cw=Math.max(tw,Math.floor(cw/2));ch=Math.max(th,Math.floor(ch/2));var c=document.createElement('canvas');c.width=cw;c.height=ch;var x=c.getContext('2d');x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(cur,0,0,cw,ch);cur=c;}
    var o=document.createElement('canvas');o.width=tw;o.height=th;var x2=o.getContext('2d');x2.imageSmoothingEnabled=true;x2.imageSmoothingQuality='high';x2.drawImage(cur,0,0,tw,th);return o;}
  function pump(){var t=target(),n=0,total=N+CMAX+1;
    while(n<8&&prepI<total){var isC=prepI>=N,j=isC?prepI-N:prepI,im=(isC?cimgs:imgs)[j];
      if(!(im&&im.complete&&im.naturalWidth)){if(im&&!im.complete)break;prepI++;continue;}
      (isC?prep.c:prep.f)[j]=shrink(im,t.tw,t.th);prepI++;n++;}
    if(prepI<total)prepTimer=setTimeout(pump,n?16:120);}
  function startPrep(){if(!W||!H)return;var t=target(),key=t.tw+'x'+t.th;if(key===prepKey)return;prepKey=key;prep={f:[],c:[]};prepI=0;clearTimeout(prepTimer);pump();}
  function sizeUp(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;if(!W||!H)return;dpr=Math.min(3,window.devicePixelRatio||1);
    cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';startPrep();if(!started||reduce)draw();}
  function draw(){
    if(!W||!H)return;
    var idx=((Math.round(pos)%N)+N)%N,img=imgs[idx];
    if(img&&img.complete&&img.naturalWidth)lastGood=img;else img=lastGood;
    if(prep.f[idx])img=prep.f[idx];
    if(blinkT>=0&&idx<=CMAX){var cs=prep.c[idx]||cimgs[idx];if(cs&&(cs.getContext||(cs.complete&&cs.naturalWidth)))img=cs;}
    ctx.clearRect(0,0,W,H);
    var sc=Math.min((W-12)/FW,(H-6)/FH)*.86,dw=FW*sc,dh=FH*sc,ox=(W-dw)/2,oy=(H-dh)/2+Math.sin(time*2.2)*2*hb;
    var cen=CEN[idx],nx=ox+cen[0]*sc,ny=oy+cen[1]*sc;
    if(wantNow){if(!anchor)anchor={x:nx+shiftX,y:ny+shiftY};shiftX=anchor.x-nx;shiftY=anchor.y-ny;}
    else{anchor=null;var k=Math.exp(-dtNow*2.4);shiftX*=k;shiftY*=k;}
    var b=BB[idx],m=6,bottom=H-6;
    if(b){var l=ox+b[0]*sc+shiftX,r=ox+(b[2]+1)*sc+shiftX,tp=oy+b[1]*sc+shiftY,bt=oy+(b[3]+1)*sc+shiftY;
      var ddx=Math.max(0,m-l)-Math.max(0,r-(W-m)),ddy=Math.max(0,m-tp)-Math.max(0,bt-bottom);
      shiftX+=ddx;shiftY+=ddy;if(anchor){anchor.x+=ddx;anchor.y+=ddy;}}
    if(img)ctx.drawImage(img,ox+shiftX,oy+shiftY,dw,dh);
    box=b?{l:ox+shiftX+b[0]*sc,t:oy+shiftY+b[1]*sc,r:ox+shiftX+(b[2]+1)*sc,b:oy+shiftY+(b[3]+1)*sc}:null;
  }
  function frame(now){
    var dt=Math.min(.05,(now-last)/1000||.016);last=now;time+=dt;
    if(pointer&&box){var px=(box.r-box.l)*.06,py=(box.b-box.t)*.06;
      if(pointer.x>box.l-px&&pointer.x<box.r+px&&pointer.y>box.t-py&&pointer.y<box.b+py)holdUntil=time+.45;}
    var want=time<holdUntil||pinned||focused;
    if(want&&!wasWant)blinkT=time;wasWant=want;
    if(blinkT<0&&time>nextBlink)blinkT=time;
    if(blinkT>=0&&time-blinkT>.16){blinkT=-1;nextBlink=time+2.2+Math.random()*2.6;}
    cv.style.cursor=(pointer&&time<holdUntil)?'pointer':'default';
    hb+=((want?1:0)-hb)*Math.min(1,dt*6);
    if(want){var d=FRONT-pos;d=((d+N/2)%N+N)%N-N/2;var step=dt*FPS*4;if(Math.abs(d)<=step)pos=FRONT;else pos+=(d>0?1:-1)*step;}
    else pos+=dt*FPS*SPEED;
    pos=((pos%N)+N)%N;wantNow=want;dtNow=dt;
    if(W&&H&&!document.hidden)draw();else if(!W)sizeUp();
    requestAnimationFrame(frame);
  }
  function start(){started=true;if(reduce){pos=12;draw();return;}requestAnimationFrame(function(t){last=t;frame(t);});}
  function onLoad(){loaded++;if(loaded===1)draw();if(loaded>=N&&!started)start();}
  for(var i=0;i<N;i++){var im=new Image();im.onload=onLoad;im.onerror=onLoad;im.src=src(i,false);imgs.push(im);}
  for(var j=0;j<=CMAX;j++){var c=new Image();c.src=src(j,true);cimgs.push(c);}
  sizeUp();if(window.ResizeObserver)new ResizeObserver(sizeUp).observe(cv);else addEventListener('resize',sizeUp);
  function face(){if(!reduce)return;pos=(pinned||focused||time<holdUntil)?FRONT:12;draw();}
  document.addEventListener('pointermove',function(e){
    if(e.pointerType==='touch'){pointer=null;return;}
    var r=cv.getBoundingClientRect();pointer={x:e.clientX-r.left,y:e.clientY-r.top};
    if(reduce&&box&&pointer.x>box.l&&pointer.x<box.r&&pointer.y>box.t&&pointer.y<box.b){holdUntil=time+9e9;face();}
    else if(reduce&&holdUntil>1e9){holdUntil=0;face();}});
  document.documentElement.addEventListener('pointerleave',function(){pointer=null;});
  cv.addEventListener('click',function(e){var r=cv.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    var on=box&&x>box.l-20&&x<box.r+20&&y>box.t-20&&y<box.b+20;
    if(on||pinned){pinned=!pinned;cv.setAttribute('aria-pressed',pinned?'true':'false');face();}});
  cv.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pinned=!pinned;cv.setAttribute('aria-pressed',pinned?'true':'false');face();}});
})();
/* ---------- router ---------- */

/* ---------- Work listing: stacking list view + expandable grid view ---------- */
(function(){
const IM=["./assets/prototype-264.jpg", "./assets/prototype-265.jpg", "./assets/prototype-266.jpg", "./assets/prototype-267.jpg"];
const esc=x=>x.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const vp=p=>p.href?'<a class="vp" href="'+p.href+'">View project</a>':'<a class="vp soon">View project</a>';
const tags=p=>'<div class="tags">'+p.tags.map(x=>'<span class="tg">'+esc(x)+'</span>').join('')+'</div>';
const pl=document.getElementById('plist'),pg=document.getElementById('pgrid'),pj=document.getElementById('pj');if(!pl)return;
pl.innerHTML=P.map((p,i)=>'<article class="pr" data-i="'+i+'"><span class="no">'+p.n+'</span><div class="im"><img src="'+IM[i]+'" alt="'+esc(p.tg)+' project image" loading="lazy" style="object-position:'+p.pos+'"></div><div class="rc"><div class="dm2">Domain- '+p.dom+'</div><h3>'+p.t+'</h3><p class="ds">'+esc(p.d)+'</p><div class="row">'+tags(p)+vp(p)+'</div></div></article>').join('<div class="sp"></div>');
pg.innerHTML=P.map((p,i)=>'<div class="gc" data-i="'+i+'"><div class="gcard"><span class="no'+(p.dark?' dk':'')+'">'+p.n+'</span><div class="im"><img src="'+IM[i]+'" alt="'+esc(p.tg)+' project image" loading="lazy" style="object-position:'+p.pos+'"></div><div class="gcrow"><h3>'+p.t.replace('<br>',' ')+'</h3>'+vp(p)+'</div></div><div class="gtab"><div class="gx"><div><div class="gxi"><p class="ds">'+esc(p.d)+'</p><hr>'+tags(p)+'</div></div></div><button aria-label="Show details" aria-expanded="false"><svg viewBox="0 0 18 18"><path d="M3 6.5l6 6 6-6"/></svg></button></div></div>').join('');
document.getElementById('pt1').innerHTML=[...'Selected works'].map((c,i)=>'<span style="--i:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>').join('');
setTimeout(()=>document.getElementById('pt1').classList.add('ready'),1300);
const roll=document.getElementById('roll');roll.innerHTML=P.map((p,i)=>'<b data-r="'+i+'">'+(i+1)+'</b>').join('');
const rb=[...roll.children],pt=document.getElementById('pt'),cards=[...pl.querySelectorAll('.pr')];
let act=-1;
function setAct(i){if(i===act)return;act=i;rb.forEach((b,k)=>{b.className=k===i?'on':k<i?'up':''});}
const z=()=>Math.min(1,innerWidth/1440);
function layout(){const st=20/z();pj.style.setProperty('--st',st+'px');cards.forEach((c,i)=>{c.style.top=(st+91+24+i*16)+'px';c.style.setProperty('--z',i+1)});}
function tick(){if(pj.dataset.view!=='list'||!document.getElementById('projects').classList.contains('on'))return;
  const k=z(),st=20,base=st+91+24;let depth=new Array(cards.length).fill(0),a=0;
  const tops=cards.map(c=>c.getBoundingClientRect().top);
  cards.forEach((c,i)=>{const stick=(base+i*16)*1;const p=Math.max(0,Math.min(1,(1-(tops[i]-stick)/(430*k))));
    for(let j=0;j<i;j++)depth[j]+=p;
    if(tops[i]<=stick+80*k)a=i;});
  cards.forEach((c,i)=>{const q=Math.min(depth[i],3);c.style.transform=q?'scale('+(1-.035*q)+')':'';c.style.setProperty('--dk',(Math.min(q,3)*.08).toFixed(3));});
  setAct(a);
  }
let raf=0;function sched(){if(!raf)raf=requestAnimationFrame(()=>{raf=0;tick()})}
addEventListener('scroll',sched,{passive:true});addEventListener('resize',()=>{layout();sched()});
window.__projTick=()=>{layout();sched()};
layout();setAct(0);sched();
// view toggle
document.querySelectorAll('.vb').forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.v;pj.dataset.view=v;document.querySelectorAll('.vb').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});window.scrollTo(0,0);if(typeof fit==='function')fit();sched()}));
// grid expand: the card's tab grows downward and the next row is pushed down
pg.addEventListener('click',e=>{const bt=e.target.closest('.gtab>button');if(!bt)return;const g=bt.closest('.gc'),o=g.classList.toggle('open');bt.setAttribute('aria-expanded',o);const t0=performance.now();(function f(){if(typeof fit==='function')fit();if(performance.now()-t0<650)requestAnimationFrame(f)})();});
})();

function route(){const h=location.hash||'#/';const id=h.startsWith('#/project/')?'detail':h.startsWith('#/work')?'projects':h.startsWith('#/s-')||h.startsWith('#s-')?document.querySelector('.page.on')?.id||'home':'home';
  if(h.startsWith('#s-'))return;
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('on',p.id===id));window.scrollTo(0,0);fit();window.__projTick&&window.__projTick()}
addEventListener('hashchange',route);
function fit(){const z=Math.min(1,innerWidth/1440),sc=document.getElementById('scaler'),vp=document.getElementById('vp');sc.style.transform='scale('+z+')';sc.style.left=Math.max(0,(innerWidth-1440)/2)+'px';vp.style.height=Math.ceil(sc.offsetHeight*z)+'px';}
addEventListener('resize',fit);route();
/* ---------- detail: side nav scrollspy + smooth jump ---------- */
const sn=[...document.querySelectorAll('#snav a')];
sn.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));window.scrollTo({top:(t.getBoundingClientRect().top+scrollY)*1-60,behavior:'smooth'})}));
addEventListener('scroll',()=>{if(!document.getElementById('detail').classList.contains('on'))return;let cu=sn[0];
  sn.forEach(a=>{const t=document.querySelector(a.getAttribute('href'));if(t.getBoundingClientRect().top<innerHeight*.35)cu=a});sn.forEach(a=>a.classList.toggle('on',a===cu))},{passive:true});
