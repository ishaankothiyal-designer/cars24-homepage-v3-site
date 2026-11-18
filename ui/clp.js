var Me="./assets/video-tour/",j=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);var Pe=e=>Number.isFinite(e)?"\u20B9"+e.toLocaleString("en-IN",{maximumFractionDigits:2})+" lakh":"Price unavailable",ze=e=>`<img class="tour-icon" src="${Me}${e}.svg" alt="">`,Ve=e=>e.photos?.[0]||e.imageUrl||(/^https?:|^\.|^\//.test(e.image||"")?e.image:"./assets/"+e.image);function ee(e){return e.length?`<section class="clp-video-tours" aria-label="Video tours"><header><h2 class="text-label-1-semibold">Video tours</h2><span class="text-label-3-regular">Demo</span></header><div class="clp-video-rail" role="region" aria-label="Car videos, scroll horizontally" tabindex="0">${e.slice(0,8).map(a=>`<button type="button" class="clp-video-card" data-action="video-tour-open" data-value="${j(a.id)}" aria-label="Watch video of ${j(a.year+" "+a.model)}"><img class="clp-video-photo" src="${j(Ve(a))}" alt="" loading="lazy"><span class="clp-video-shade"></span><span class="clp-video-play">${ze("play")}</span><span class="clp-video-copy"><span class="text-label-3-semibold">Watch video</span><strong class="text-label-2-semibold">${j(a.year+" "+a.model)}</strong><span class="text-label-2-semibold">${j(Pe(a.price))}</span></span></button>`).join("")}</div></section>`:""}var ia=String.raw`<div data-node-id="2788:69550" data-name=".element" class="home-layer-217">
<div data-node-id="2788:69541" data-name="shape" class="home-layer-218">
</div>
<div data-node-id="2788:70966" data-name="shape" class="home-layer-219">
</div>
<div data-node-id="2788:74359" data-name="shape" class="home-layer-220">
</div>
<div data-node-id="2788:71214" data-name="shape" class="home-layer-221">
</div>
<div data-node-id="2788:74851" data-name="shape" class="home-layer-222">
</div>
<div data-node-id="2788:75466" data-name="shape" class="home-layer-223">
</div>
<div data-node-id="2788:74974" data-name="shape" class="home-layer-224">
</div>
<div data-node-id="2788:75467" data-name="shape" class="home-layer-225">
</div>
<div data-node-id="2788:75835" data-name="shape" class="home-layer-226">
</div>
<div data-node-id="2788:75097" data-name="shape" class="home-layer-227">
</div>
<div data-node-id="2788:75468" data-name="shape" class="home-layer-228">
</div>
<div data-node-id="2788:75098" data-name="shape" class="home-layer-229">
</div>
<div data-node-id="2788:69542" data-name="shape" class="home-layer-230">
</div>
<div data-node-id="2788:69543" data-name="shape" class="home-layer-231">
</div>
<div data-node-id="2788:69544" data-name="shape" class="home-layer-232">
</div>
<div data-node-id="2788:69545" data-name="shape" class="home-layer-233">
</div>
<div data-node-id="2788:70222" data-name="shape" class="home-layer-234">
</div>
<div data-node-id="2788:70470" data-name="shape" class="home-layer-235">
</div>
<div data-node-id="2788:70718" data-name="shape" class="home-layer-236">
</div>
<div data-node-id="2788:70967" data-name="shape" class="home-layer-237">
</div>
<div data-node-id="2788:74360" data-name="shape" class="home-layer-238">
</div>
<div data-node-id="2788:74728" data-name="shape" class="home-layer-239">
</div>
<div data-node-id="2788:69546" data-name="shape" class="home-layer-240">
</div>
<div data-node-id="2788:69547" data-name="shape" class="home-layer-241">
</div>
<div data-node-id="2788:69548" data-name="shape" class="home-layer-242">
</div>
<div data-node-id="2788:70408" data-name="shape" class="home-layer-243">
</div>
<div data-node-id="2788:70471" data-name="shape" class="home-layer-244">
</div>
<div data-node-id="2788:70719" data-name="shape" class="home-layer-245">
</div>
<div data-node-id="2788:70968" data-name="shape" class="home-layer-246">
</div>
<div data-node-id="2788:74361" data-name="shape" class="home-layer-247">
</div>
<div data-node-id="2788:70223" data-name="shape" class="home-layer-248">
</div>
<div data-node-id="2788:70472" data-name="shape" class="home-layer-249">
</div>
<div data-node-id="2788:70720" data-name="shape" class="home-layer-250">
</div>
<div data-node-id="2788:72883" data-name="shape" class="home-layer-251">
</div>
<div data-node-id="2788:73621" data-name="shape" class="home-layer-252">
</div>
<div data-node-id="2788:70224" data-name="shape" class="home-layer-253">
</div>
<div data-node-id="2788:70473" data-name="shape" class="home-layer-254">
</div>
<div data-node-id="2788:70721" data-name="shape" class="home-layer-255">
</div>
<div data-node-id="2788:72884" data-name="shape" class="home-layer-256">
</div>
<div data-node-id="2788:73622" data-name="shape" class="home-layer-257">
</div>
<div data-node-id="2788:72885" data-name="shape" class="home-layer-258">
</div>
<div data-node-id="2788:73623" data-name="shape" class="home-layer-259">
</div>
<div data-node-id="2788:69549" data-name="shape" class="home-layer-260">
</div>
<div data-node-id="2788:72886" data-name="shape" class="home-layer-261">
</div>
<div data-node-id="2788:73624" data-name="shape" class="home-layer-262">
</div>
<div data-node-id="2788:72887" data-name="shape" class="home-layer-263">
</div>
<div data-node-id="2788:73625" data-name="shape" class="home-layer-264">
</div>
<div data-node-id="2788:72888" data-name="shape" class="home-layer-265">
</div>
<div data-node-id="2788:73626" data-name="shape" class="home-layer-266">
</div>
</div>`,la={brands:String.raw`<div data-node-id="2916:102662" data-name="asset" class="home-layer-34">
<div data-node-id="2916:102664" class="home-layer-35">
<div data-node-id="2916:102665" class="home-layer-36">
<div class="home-layer-37">
<div class="home-layer-38">
<div data-node-id="2916:102666" data-name="image 84140629" class="home-layer-39">
<img alt="" src="./assets/flow-home/2916-102660-Image84140629.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102667" class="home-layer-40">
<div class="home-layer-37">
<div class="home-layer-41">
<div data-node-id="2916:102668" data-name="image 84140629" class="home-layer-42">
<img alt="" src="./assets/flow-home/2916-102660-Image84140630.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102669" class="home-layer-43">
<div class="home-layer-37">
<div class="home-layer-44">
<div data-node-id="2916:102670" data-name="image 84140629" class="home-layer-42">
<img alt="" src="./assets/flow-home/2916-102660-Image84140631.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102671" class="home-layer-45">
<div class="home-layer-37">
<div class="home-layer-46">
<div data-node-id="2916:102672" data-name="image 84140629" class="home-layer-42">
<img alt="" src="./assets/flow-home/2916-102660-Image84140631.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102673" class="home-layer-47">
<div class="home-layer-37">
<div class="home-layer-48">
<div data-node-id="2916:102674" data-name="image 84140629" class="home-layer-49">
<img alt="" src="./assets/flow-home/2916-102660-Image84140632.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102675" class="home-layer-50">
<div class="home-layer-37">
<div class="home-layer-51">
<div data-node-id="2916:102676" data-name="image 84140631" class="home-layer-52">
<img alt="" src="./assets/flow-home/2916-102660-Image84140633.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102677" class="home-layer-53">
<div class="home-layer-37">
<div class="home-layer-54">
<div data-node-id="2916:102678" data-name="image 84140632" class="home-layer-55">
<img alt="" src="./assets/flow-home/2916-102660-Image84140634.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102679" class="home-layer-56">
<div class="home-layer-37">
<div class="home-layer-57">
<div data-node-id="2916:102680" data-name="image 84140621" class="home-layer-58">
<img alt="" src="./assets/flow-home/2916-102660-Image84140621.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102681" class="home-layer-59">
<div class="home-layer-37">
<div class="home-layer-60">
<div data-node-id="2916:102682" data-name="image 84140629" class="home-layer-61">
<img alt="" src="./assets/flow-home/2916-102660-Image84140635.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102683" class="home-layer-62">
<div class="home-layer-37">
<div class="home-layer-63">
<div data-node-id="2916:102684" data-name="image 84140630" class="home-layer-64">
<img alt="" src="./assets/flow-home/2916-102660-Image84140636.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102685" class="home-layer-65">
<div class="home-layer-37">
<div class="home-layer-66">
<div data-node-id="2916:102686" data-name="image 84140630" class="home-layer-64">
<img alt="" src="./assets/flow-home/2916-102660-Image84140636.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102687" class="home-layer-67">
<div class="home-layer-37">
<div class="home-layer-68">
<div data-node-id="2916:102688" data-name="image 84140622" class="home-layer-69">
<img alt="" src="./assets/flow-home/2916-102660-Image84140622.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102689" class="home-layer-70">
<div class="home-layer-37">
<div class="home-layer-71">
<div data-node-id="2916:102690" data-name="image 84140633" class="home-layer-72">
<img alt="" src="./assets/flow-home/2916-102660-Image84140637.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102691" class="home-layer-73">
<div class="home-layer-37">
<div class="home-layer-74">
<div data-node-id="2916:102692" data-name="image 84140629" class="home-layer-75">
<img alt="" src="./assets/flow-home/2916-102660-Image84140638.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102693" class="home-layer-76">
<div class="home-layer-37">
<div class="home-layer-77">
<div data-node-id="2916:102694" data-name="image 84140621" class="home-layer-78">
<img alt="" src="./assets/flow-home/2916-102660-Image84140623.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102695" class="home-layer-79">
<div class="home-layer-37">
<div class="home-layer-80">
<div data-node-id="2916:102696" data-name="image 84140621" class="home-layer-78">
<img alt="" src="./assets/flow-home/2916-102660-Image84140623.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
</div>
<div data-node-id="2916:102697" class="home-layer-81">
</div>
<div data-node-id="2916:102698" class="home-layer-82">
<div class="home-layer-83">
<div class="home-layer-84">
</div>
</div>
</div>
</div>`,budget:String.raw`<div data-node-id="I2916:102706;1051:44769" data-name="Media slot" class="home-layer-89">
<div data-node-id="I2916:102706;1051:44769;2916:102704" class="home-layer-90">
<div class="home-layer-91">
<div class="home-layer-92">
<img alt="" src="./assets/flow-home/2916-102660-Rectangle2147225478.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="I2916:102706;1051:44769;2916:102705" class="home-layer-93">
<div class="home-layer-91">
<div data-name="image 84140620" class="home-layer-94">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102660-Image84140620.png" class="home-layer-96" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
</div>`,premium:String.raw`<div data-node-id="I2916:102710;1051:44769" data-name="Media slot" class="home-layer-89">
<div data-node-id="I2916:102710;1051:44769;2916:102708" class="home-layer-100">
<div class="home-layer-91">
<div class="home-layer-92">
<img alt="" src="./assets/flow-home/2916-102660-Rectangle2147225478.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="I2916:102710;1051:44769;2916:102709" class="home-layer-93">
<div class="home-layer-101">
<div data-name="image 84140620" class="home-layer-94">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102660-Image84140624.png" class="home-layer-102" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
</div>`,luxury:String.raw`<div data-node-id="I2916:102714;1051:44769" data-name="Media slot" class="home-layer-104">
<div data-node-id="I2916:102714;1051:44769;2916:102712" class="home-layer-105">
<div class="home-layer-91">
<div class="home-layer-92">
<img alt="" src="./assets/flow-home/2916-102660-Rectangle2147225478.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="I2916:102714;1051:44769;2916:102713" class="home-layer-93">
<div class="home-layer-91">
<div data-name="image 84140634" class="home-layer-106">
<img alt="" src="./assets/flow-home/2916-102660-Image84140639.png" class="home-layer-107" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>`,"trending-0":String.raw`<div data-node-id="I2916:102817;156:3539" data-name="Media slot" class="home-layer-204">
<div data-node-id="I2916:102817;156:3539;2916:102814" data-name="Trending" class="home-layer-205">
<div data-node-id="I2916:102817;156:3539;2916:102815" class="home-layer-206">
<p class="home-layer-10">1</p>
</div>
<div data-node-id="I2916:102817;156:3539;2916:102816" data-name="image 84140629" class="home-layer-207">
<img alt="" src="./assets/flow-home/2916-102799-Image84140629.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>`,"trending-1":String.raw`<div data-node-id="I2916:102822;156:3539" data-name="Media slot" class="home-layer-204">
<div data-node-id="I2916:102822;156:3539;2916:102819" data-name="Trending" class="home-layer-205">
<div data-node-id="I2916:102822;156:3539;2916:102820" class="home-layer-206">
<p class="home-layer-10">2</p>
</div>
<div data-node-id="I2916:102822;156:3539;2916:102821" data-name="image 84140629" class="home-layer-211">
<img alt="" src="./assets/flow-home/2916-102799-Image84140630.png" class="home-layer-107" loading="lazy" decoding="async">
</div>
</div>
</div>`,"trending-2":String.raw`<div data-node-id="I2916:102828;156:3539" data-name="Media slot" class="home-layer-204">
<div data-node-id="I2916:102828;156:3539;2916:102824" data-name="Media slot" class="home-layer-212">
<div data-node-id="I2916:102828;156:3539;2916:102825" data-name="Trending" class="home-layer-205">
<div data-node-id="I2916:102828;156:3539;2916:102826" class="home-layer-213">
<p class="home-layer-10">3</p>
</div>
<div data-node-id="I2916:102828;156:3539;2916:102827" data-name="image 84140629" class="home-layer-214">
<img alt="" src="./assets/flow-home/2916-102799-Image84140631.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>`,"pixel-border":String.raw`<div data-node-id="2916:102839" data-name=".border" class="home-layer-216">__PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL____PIXEL__<div data-node-id="2788:69550" data-name=".element" class="home-layer-267">
<div data-node-id="2788:69541" data-name="shape" class="home-layer-218">
</div>
<div data-node-id="2788:70966" data-name="shape" class="home-layer-219">
</div>
<div data-node-id="2788:74359" data-name="shape" class="home-layer-220">
</div>
<div data-node-id="2788:71214" data-name="shape" class="home-layer-221">
</div>
<div data-node-id="2788:74851" data-name="shape" class="home-layer-222">
</div>
<div data-node-id="2788:75466" data-name="shape" class="home-layer-223">
</div>
<div data-node-id="2788:74974" data-name="shape" class="home-layer-224">
</div>
<div data-node-id="2788:75467" data-name="shape" class="home-layer-225">
</div>
<div data-node-id="2788:75835" data-name="shape" class="home-layer-226">
</div>
<div data-node-id="2788:75097" data-name="shape" class="home-layer-227">
</div>
<div data-node-id="2788:75468" data-name="shape" class="home-layer-228">
</div>
<div data-node-id="2788:75098" data-name="shape" class="home-layer-229">
</div>
<div data-node-id="2788:69542" data-name="shape" class="home-layer-230">
</div>
<div data-node-id="2788:69543" data-name="shape" class="home-layer-231">
</div>
<div data-node-id="2788:69544" data-name="shape" class="home-layer-232">
</div>
<div data-node-id="2788:69545" data-name="shape" class="home-layer-233">
</div>
<div data-node-id="2788:70222" data-name="shape" class="home-layer-234">
</div>
<div data-node-id="2788:70470" data-name="shape" class="home-layer-235">
</div>
<div data-node-id="2788:70718" data-name="shape" class="home-layer-236">
</div>
<div data-node-id="2788:70967" data-name="shape" class="home-layer-237">
</div>
<div data-node-id="2788:74360" data-name="shape" class="home-layer-238">
</div>
<div data-node-id="2788:74728" data-name="shape" class="home-layer-239">
</div>
<div data-node-id="2788:69546" data-name="shape" class="home-layer-240">
</div>
<div data-node-id="2788:69547" data-name="shape" class="home-layer-241">
</div>
<div data-node-id="2788:69548" data-name="shape" class="home-layer-242">
</div>
<div data-node-id="2788:70408" data-name="shape" class="home-layer-243">
</div>
<div data-node-id="2788:70471" data-name="shape" class="home-layer-244">
</div>
<div data-node-id="2788:70719" data-name="shape" class="home-layer-245">
</div>
<div data-node-id="2788:70968" data-name="shape" class="home-layer-246">
</div>
<div data-node-id="2788:74361" data-name="shape" class="home-layer-247">
</div>
<div data-node-id="2788:70223" data-name="shape" class="home-layer-248">
</div>
<div data-node-id="2788:70472" data-name="shape" class="home-layer-249">
</div>
<div data-node-id="2788:70720" data-name="shape" class="home-layer-250">
</div>
<div data-node-id="2788:72883" data-name="shape" class="home-layer-251">
</div>
<div data-node-id="2788:73621" data-name="shape" class="home-layer-252">
</div>
<div data-node-id="2788:70224" data-name="shape" class="home-layer-253">
</div>
<div data-node-id="2788:70473" data-name="shape" class="home-layer-254">
</div>
<div data-node-id="2788:70721" data-name="shape" class="home-layer-255">
</div>
<div data-node-id="2788:72884" data-name="shape" class="home-layer-256">
</div>
<div data-node-id="2788:73622" data-name="shape" class="home-layer-257">
</div>
<div data-node-id="2788:72885" data-name="shape" class="home-layer-258">
</div>
<div data-node-id="2788:73623" data-name="shape" class="home-layer-259">
</div>
<div data-node-id="2788:69549" data-name="shape" class="home-layer-260">
</div>
<div data-node-id="2788:72886" data-name="shape" class="home-layer-261">
</div>
<div data-node-id="2788:73624" data-name="shape" class="home-layer-262">
</div>
<div data-node-id="2788:72887" data-name="shape" class="home-layer-263">
</div>
<div data-node-id="2788:73625" data-name="shape" class="home-layer-264">
</div>
<div data-node-id="2788:72888" data-name="shape" class="home-layer-265">
</div>
<div data-node-id="2788:73626" data-name="shape" class="home-layer-266">
</div>
</div>
</div>`,"offer-covered":String.raw`<div data-node-id="2916:102905" data-name="Desktop" class="home-layer-300 ">
<div data-node-id="2916:102906" class="home-layer-301">
<div data-node-id="2916:102907" class="home-layer-302">
<div data-node-id="2916:102908" class="home-layer-303">
<div class="home-layer-304">
<img alt="" src="./assets/flow-home/2916-102903-Group2147231563.svg" class="home-layer-125" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102914" class="home-layer-305">
<div data-node-id="2916:102915" class="home-layer-306">
<div class="home-layer-307">
<div data-name="Rectangle" class="home-layer-137">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102916" class="home-layer-309">
<div class="home-layer-307">
<div data-name="Rectangle" class="home-layer-137">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle1.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102917" class="home-layer-310">
<div class="home-layer-307">
<div data-name="Rectangle" class="home-layer-137">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle2.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102918" class="home-layer-311">
<div class="home-layer-307">
<div data-name="Rectangle" class="home-layer-137">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle3.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102919" class="home-layer-312">
<div class="home-layer-307">
<div data-name="Rectangle" class="home-layer-137">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle4.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
</div>
<div data-node-id="2916:102920" class="home-layer-313">
<div data-node-id="2916:102921" data-name="Rectangle" class="home-layer-314">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102922" data-name="Rectangle" class="home-layer-315">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle1.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102923" data-name="Rectangle" class="home-layer-316">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle2.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102924" data-name="Rectangle" class="home-layer-317">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle3.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102925" data-name="Rectangle" class="home-layer-318">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-Rectangle4.png" class="home-layer-308" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102926" class="home-layer-319">
<div data-node-id="2916:102927" class="home-layer-320">
<div data-node-id="2916:102928" class="home-layer-321">
<div data-node-id="2916:102929" class="home-layer-322">
<div class="home-layer-323">
<img alt="" src="./assets/flow-home/2916-102903-Ellipse10803.svg" class="home-layer-125" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102930" class="home-layer-324">
<div data-node-id="2916:102931" data-name="Vector" class="home-layer-325">
<img alt="" src="./assets/flow-home/2916-102903-Vector.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102932" data-name="Group" class="home-layer-326">
<div data-node-id="2916:102933" data-name="Group" class="home-layer-327">
<div data-node-id="2916:102934" data-name="Group" class="home-layer-328">
<img alt="" src="./assets/flow-home/2916-102903-Group.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102936" data-name="Group" class="home-layer-329">
<img alt="" src="./assets/flow-home/2916-102903-Group1.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102938" data-name="Group" class="home-layer-330">
<img alt="" src="./assets/flow-home/2916-102903-Group2.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102940" data-name="Group" class="home-layer-331">
<img alt="" src="./assets/flow-home/2916-102903-Group3.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102942" data-name="Group" class="home-layer-332">
<img alt="" src="./assets/flow-home/2916-102903-Group4.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102944" data-name="Group" class="home-layer-333">
<img alt="" src="./assets/flow-home/2916-102903-Group5.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102946" data-name="Group" class="home-layer-334">
<img alt="" src="./assets/flow-home/2916-102903-Group6.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102948" data-name="Vector" class="home-layer-335">
<img alt="" src="./assets/flow-home/2916-102903-Vector1.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102949" data-name="Group" class="home-layer-336">
<img alt="" src="./assets/flow-home/2916-102903-Group7.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:102962" data-name="Vector" class="home-layer-337">
<img alt="" src="./assets/flow-home/2916-102903-Vector2.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<p data-node-id="2916:102963" class="home-layer-338">All Covered</p>
</div>
<div data-node-id="2916:102964" class="home-layer-339">
<img alt="" src="./assets/flow-home/2916-102903-Group2147231558.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102973" class="home-layer-340">
<div class="home-layer-341">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector3.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102974" class="home-layer-342">
<div class="home-layer-341">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector3.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102975" class="home-layer-343">
<div class="home-layer-341">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector4.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102976" class="home-layer-344">
<div class="home-layer-341">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector5.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102977" data-name="Vector" class="home-layer-345">
<img alt="" src="./assets/flow-home/2916-102903-Vector6.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:102978" class="home-layer-346">
<p class="home-layer-347">Your car price now includes warranty, service, </p>
<p class="home-layer-348">insurance and RC transfer.</p>
</div>
</div>
</div>
</div>`,"offer-sale":String.raw`<div data-node-id="2916:102979" class="home-layer-349 ">
<div data-node-id="2916:102980" data-name="Vector" class="home-layer-350">
<img alt="" src="./assets/flow-home/2916-102903-Vector7.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
<p data-node-id="2916:102981" class="home-layer-351">
<span class="home-layer-352">Get up to </span>
<span class="home-layer-353">₹50,000</span>
<span class="home-layer-352"> off on every car</span>
</p>
<div data-node-id="2916:102982" class="home-layer-354">
<div data-node-id="2916:102983" class="home-layer-355">
<div data-node-id="2916:102984" class="home-layer-355">
<div data-node-id="2916:102985" class="home-layer-355">
<div data-node-id="2916:102986" class="home-layer-355">
<div data-node-id="2916:102987" class="home-layer-355">
<div data-node-id="2916:102988" class="home-layer-356">
<div data-node-id="2916:102989" class="home-layer-357">
<div class="home-layer-358">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector8.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102990" class="home-layer-359">
<div class="home-layer-360">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector9.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102991" class="home-layer-361">
<div class="home-layer-362">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector10.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102992" class="home-layer-363">
<div class="home-layer-364">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector11.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102993" class="home-layer-365">
<div class="home-layer-366">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector12.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102994" class="home-layer-367">
<div class="home-layer-368">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector13.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102995" class="home-layer-369">
<div class="home-layer-370">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector14.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102996" class="home-layer-371">
<div class="home-layer-372">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector15.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:102997" class="home-layer-373">
<div class="home-layer-374">
<div data-name="Vector" class="home-layer-137">
<div class="home-layer-375">
<img alt="" src="./assets/flow-home/2916-102903-Vector16.svg" class="home-layer-125" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:102998" class="home-layer-376">
<div class="home-layer-377">
<div data-name="Union" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Union.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:103003" class="home-layer-378">
<div class="home-layer-379">
<div data-name="Union" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Union1.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:103011" class="home-layer-380">
<div class="home-layer-381">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector17.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:103012" class="home-layer-382">
<div class="home-layer-383">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector18.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:103013" class="home-layer-384">
<div class="home-layer-385">
<div class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Group2147231613.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
<div data-node-id="2916:103057" class="home-layer-386">
<div class="home-layer-387">
<div class="home-layer-388">
<p class="home-layer-389">11 - 13  SEP</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-node-id="2916:103058" class="home-layer-390">
<div class="home-layer-391">
<div data-name="Vector" class="home-layer-137">
<img alt="" src="./assets/flow-home/2916-102903-Vector19.svg" class="home-layer-6" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div data-node-id="2916:103059" data-name="image 84140627" class="home-layer-392">
<img alt="" src="./assets/flow-home/2916-102903-Image84140627.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
<div data-node-id="2916:103060" data-name="image 84140628" class="home-layer-393">
<img alt="" src="./assets/flow-home/2916-102903-Image84140628.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>`,"offer-finance":String.raw`<div data-node-id="2916:103061" data-name="Desktop" class="home-layer-394">
<div data-node-id="2916:103062" class="home-layer-395">
<div data-node-id="2916:103063" class="home-layer-4">
<div data-node-id="985:42298" class="home-layer-396">
<div data-node-id="985:42299" class="home-layer-397">
<div data-node-id="985:42300" data-name="Mask group" class="home-layer-398">
<div data-node-id="985:42302" data-name="ChatGPT Image Aug 7, 2026, 07_49_22 PM 1" class="home-layer-399">
<img alt="" src="./assets/flow-home/2916-102903-ChatGptImageAug72026074922Pm2.png" class="home-layer-15" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="985:42303" class="home-layer-400">
<div class="home-layer-401">
<div class="home-layer-402">
<p class="home-layer-403">Introducing</p>
</div>
</div>
</div>
</div>
</div>
<p data-node-id="2916:103065" class="home-layer-404">Bring home your dream car with no upfront payment</p>
</div>
<div data-node-id="2916:103066" data-name="Button" class="home-layer-405 ">
<div data-node-id="I2916:103066;12284:6136" data-name="Base" class="home-layer-12">
<p data-node-id="I2916:103066;12284:6136;12232:1823" class="home-layer-13">Check eligibility</p>
<i aria-hidden="true" class="arrow-right-outline home-icon">
</i>
</div>
</div>
</div>
<div data-node-id="2916:103067" class="home-layer-406">
<div data-node-id="2916:103068" data-name="ChatGPT Image Aug 12, 2026, 04_35_09 PM 2" class="home-layer-407">
<div class="home-layer-95">
<img alt="" src="./assets/flow-home/2916-102903-ChatGptImageAug122026043509Pm2.png" class="home-layer-408" loading="lazy" decoding="async">
</div>
</div>
<div data-node-id="2916:103069" class="home-layer-409">
<div data-node-id="2916:103070" class="home-layer-409">
<div data-node-id="2916:103071" class="home-layer-409">
<div data-node-id="2916:103072" class="home-layer-409">
<div data-node-id="2916:103073" class="home-layer-409">
<div data-node-id="2916:103074" class="home-layer-410">
<div data-node-id="2916:103075" class="home-layer-411">
<div class="home-layer-412">
<div class="home-layer-413">
<div class="home-layer-414">
<img alt="" src="./assets/flow-home/2916-102903-Vector21.svg" class="home-layer-125" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
<div data-node-id="2916:103076" class="home-layer-415">
<div class="home-layer-416">
<div class="home-layer-417">
<p class="home-layer-403">Loan Approved</p>
</div>
</div>
</div>
</div>
<div data-node-id="2916:103077" class="home-layer-418">
<div class="home-layer-419">
<div class="home-layer-420">
<div class="home-layer-421">
<img alt="" src="./assets/flow-home/2916-102903-Group2147231400.svg" class="home-layer-125" loading="lazy" decoding="async">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`};var qe=["Maruti","Hyundai","new car","old car","challan","FASTag"];function be(e){let a=e.querySelector(".home-search-words");if(!a)return()=>{};let i=a.querySelector(".is-current"),r=a.querySelector(".is-next"),o=e.ownerDocument,l=o.defaultView,d=l.matchMedia("(prefers-reduced-motion: reduce)"),c,g,y=!1,h=()=>{l.clearTimeout(c),l.clearTimeout(g),a.classList.remove("is-cycling"),r.textContent=""},$=()=>{y||o.hidden||d.matches||(c=l.setTimeout(()=>{if(y)return;if(o.hidden||d.matches){h();return}let L=qe.filter(D=>D!==i.textContent);r.textContent=L[Math.floor(Math.random()*L.length)],a.classList.add("is-cycling"),g=l.setTimeout(()=>{if(!y){if(o.hidden||d.matches){h();return}i.textContent=r.textContent,a.classList.remove("is-cycling"),r.textContent="",$()}},300)},2800))},f=()=>{h(),$()};return o.addEventListener("visibilitychange",f),d.addEventListener("change",f),$(),()=>{y=!0,h(),o.removeEventListener("visibilitychange",f),d.removeEventListener("change",f)}}var ae=new WeakMap;function De(e){ae.get(e)?.();let a=e.querySelector(".clp-source"),i=a?.querySelector(".clp-scroll"),r=a?.querySelector(".clp-header"),o=a?.querySelector(".clp-toolbar"),l=a?.querySelector(".clp-banner-space"),d=e.closest(".screen");if(!a||!i||!r||!o||!l||!d)return()=>{};let c=be(a),g=r.offsetTop+r.offsetHeight,y=i.scrollTop>g-8,h=!1,$=()=>{if(h)return;(y?i.scrollTop<g-16:i.scrollTop>=g)&&(y=!y),a.classList.toggle("is-clp-collapsed",y),d.classList.toggle("is-clp-scrolled",y);let p=parseFloat(getComputedStyle(o).top)||0;a.classList.toggle("is-clp-toolbar-pinned",i.scrollTop+p>=l.offsetTop+l.offsetHeight)},f=()=>{h||(g=r.offsetTop+r.offsetHeight,$())};i.addEventListener("scroll",$,{passive:!0}),f();let L=new ResizeObserver(f);L.observe(a);let D=requestAnimationFrame(()=>{h||a.classList.add("is-clp-chrome-ready")}),V=()=>{h||(h=!0,cancelAnimationFrame(D),L.disconnect(),i.removeEventListener("scroll",$),c(),a.classList.remove("is-clp-collapsed","is-clp-chrome-ready","is-clp-toolbar-pinned"),d.classList.remove("is-clp-scrolled"),ae.delete(e))};return ae.set(e,V),V}var te={source:"https://autonaut-icons.vercel.app/",brand:"cars24",retrieved:"2026-11-16",semantic:{buy:"car-front-view",sell:"key-2",loans:"money-hand",checks:"square-checklist-magnifying-glass",challan:"receipt-bill",insurance:"shield-check",ownership:"garage",care:"toolbox",all:"layout-grid-1",home:"home-personal-feed",orders:"receipt-check",garage:"garage",ai:"sparkles-three",search:"magnifying-glass",account:"contacts",back:"arrow-left",close:"cross-large",next:"chevron-right",down:"chevron-down-small",external:"arrow-up-right",forward:"arrow-right",refresh:"arrow-rotate-counter-clockwise",check:"checkmark-1",save:"heart",saved:"heart",location:"map-pin",filter:"filter-1",sort:"sort-arrow-up-down",history:"clock",loan:"money-hand",emi:"calendar-check",gold:"coins",credit:"chart-2",fastag:"tag",pdi:"checklist","vehicle-history":"page-search",rto:"page-text",odometer:"dashboard-middle",roadside:"toolbox",warranty:"shield-check",health:"heart-beat",life:"shield",valuation:"coin-rupees",exchange:"arrows-repeat-right-left",scrap:"arrows-repeat",bike:"bike",car:"car-front-view",wifi:"wifi-full",battery:"battery-full",voice:"microphone","transmission-automatic":"settings-gear-1","transmission-manual":"steering-wheel","fuel-petrol":"gas","fuel-diesel":"drop","fuel-cng":"fire-1","fuel-electric":"lightning",play:"play",recommend:"thumbs-up"},legacy:{"arrow-left-filled":"back","arrow-left-outline":"back","cross-large-outline":"close","cross-large-filled":"close","close-line":"close","chevron-down-small-outline":"down","chevron-right-outline":"next","chevron-small-right-outline":"next","heart-like-outline":"save","magnifying-glass-outline":"search","ownership-line":"account","map-filled":"location","filter-outline":"filter","sparkle-filled":"ai","clock-time-timer-outline":"history","clock-timer-outline":"history","car-outline":"car","car-check-outline":"checks","car-insurance-outline":"insurance","credit-card-2-card-payment-outline":"loans","receipt-bill-purchase-invoice-outline":"challan","home-personal-feed-for-you-filled":"home","receipt-check-outline":"orders","car-front-view":"car","checkmark-1-filled":"check","checkmark-1-outline":"check","microphone-outline":"voice"},rules:[["gold loan","gold"],["credit score","credit"],["emi","emi"],["health insurance","health"],["life insurance","life"],["fastag","fastag"],["roadside","roadside"],["warranty","warranty"],["history","vehicle-history"],["rto","rto"],["odometer","odometer"],["pdi","pdi"],["inspection","pdi"],["challan","challan"],["valuation","valuation"],["exchange","exchange"],["scrap","scrap"],["bike","bike"],["loan","loans"],["insurance","insurance"],["car checks","checks"],["vehicle records","checks"],["care","care"],["ownership","ownership"],["sell","sell"],["buy","buy"],["used cars","buy"],["new cars","buy"]],custom:[]};var Fe=te.semantic,Xe=te.legacy;function He(e){let a=Xe[e]||e;if(!Object.hasOwn(Fe,a))throw new Error(`Unmapped icon: ${e}`);return a}function q(e,{filled:a=!1,className:i=""}={}){let r=He(e),o=String(i).replace(/[^a-zA-Z0-9 _-]/g,"");return`<i class="ui-icon ui-icon-${r}${a?" is-filled":""}${o?" "+o:""}" data-icon="${r}" data-icon-source="autonaut-cars24" aria-hidden="true"></i>`}var N={Maruti:{src:"./assets/makes/maruti-suzuki.png",image:{height:"83.74%",left:"-17.1%",top:"8.13%",width:"134.2%"}},Hyundai:{src:"./assets/makes/hyundai.png",image:{height:"81.34%",left:"0.28%",top:"24.8%",width:"98.92%"}},Tata:{src:"./assets/makes/tata.png",image:{height:"66.67%",left:"12.14%",top:"16.67%",width:"75.71%"}},Honda:{src:"./assets/makes/honda.png",image:{height:"64.41%",left:"19.3%",top:"17.79%",width:"61.4%"}},Mahindra:{src:"./assets/makes/mahindra.png",image:{height:"56.25%",left:"12.5%",top:"21.14%",width:"75%"}},KIA:{src:"./assets/makes/kia.png",image:{height:"26.53%",left:"7.78%",top:"36.96%",width:"84.47%"}},Renault:{src:"./assets/makes/renault.png",image:{height:"80%",left:"-3.33%",top:"10%",width:"106.67%"}},Toyota:{src:"./assets/makes/toyota.png",image:{height:"98.99%",left:"3.46%",top:"0.6%",width:"93.08%"}},Ford:{src:"./assets/makes/ford.png",image:{height:"43.72%",left:"7.04%",top:"28.14%",width:"86%"}},Volkswagen:{src:"./assets/makes/volkswagen.png",image:{height:"72.86%",left:"1.43%",top:"13.57%",width:"97.14%"}},MG:{src:"./assets/makes/mg.png",image:{height:"92.26%",left:"15.37%",top:"3.33%",width:"69.26%"}},Skoda:{src:"./assets/makes/skoda.png",image:{height:"70.16%",left:"21.4%",top:"15.32%",width:"57.2%"}},Nissan:{src:"./assets/makes/nissan.png",image:{height:"116.09%",left:"-19.51%",top:"-8.08%",width:"139.31%"}},Jeep:{src:"./assets/makes/jeep.png",image:{height:"78.75%",left:"-2.51%",top:"10.63%",width:"105%"}},Datsun:{src:"./assets/clp/brand-logos/datsun.png"},"Mercedes Benz":{src:"./assets/clp/brand-logos/mercedes-benz.png"},BMW:{src:"./assets/makes/bmw.png",image:{height:"66.61%",left:"24.74%",top:"16.69%",width:"50.51%"}},Audi:{src:"./assets/makes/audi.png",image:{height:"39.59%",left:"7.48%",top:"30.21%",width:"85.04%"}},Lexus:{src:"./assets/clp/brand-logos/lexus.png"},Chevrolet:{src:"./assets/clp/brand-logos/chevrolet.png"},CITROEN:{src:"./assets/clp/brand-logos/citroen.png"},ISUZU:{src:"./assets/clp/brand-logos/isuzu.png"},Porsche:{src:"./assets/clp/brand-logos/porsche.png"},Landrover:{src:"./assets/clp/brand-logos/landrover.png"},"Mahindra Renault":{src:"./assets/clp/brand-logos/mahindra-renault.png"},Fiat:{src:"./assets/clp/brand-logos/fiat.png"},Mitsubishi:{src:"./assets/clp/brand-logos/mitsubishi.png"},Mini:{src:"./assets/clp/brand-logos/mini.png"},Ssangyong:{src:"./assets/clp/brand-logos/ssangyong.png"},Vinfast:{src:"./assets/clp/brand-logos/vinfast.png"},"Force Motors":{src:"./assets/clp/brand-logos/force-motors.png"},Volvo:{src:"./assets/clp/brand-logos/volvo.png"},Jaguar:{src:"./assets/clp/brand-logos/jaguar.png"}};var x=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),$e=e=>(Array.isArray(e)?e:[e]).filter(a=>a!=null&&a!==""&&a!=="Any"&&a!=="any"),k=e=>String(e??"").toLowerCase().replace(/[^a-z0-9]/g,""),Ge=["sort","budget","makeModel","year","fuel","transmission","km","category","assurance","body","color","features","seats","owners","rto","safety","airbags","showrooms","discount"],Be={Honda:"honda",Maruti:"maruti-suzuki",Hyundai:"hyundai",Tata:"tata",KIA:"kia"},Oe=e=>{let a=N[e];if(!a)return"";let i=`<img src="${a.src}" alt=""${a.image?` style="${Object.entries(a.image).map(([r,o])=>`${r}:${o}`).join(";")}"`:""}>`;return`<span class="clp-modal-brand-logo" aria-hidden="true">${a.image?`<span class="clp-modal-brand-logo-frame">${i}</span>`:i}</span>`},G=(e,a,i="",r="",o="")=>`<button type="button" class="${r}" data-clp-modal="${a}" data-value="${x(i)}" ${o}>${e}</button>`,Ne=e=>e.group?`${e.group}: ${e.label}`:e.label;function Ue({root:e,catalog:a,profile:i,extra:r,seller:o="all",sort:l="recommended",selected:d="makeModel",budget:c={},sortOptions:g=[],countFor:y,onApply:h,renderMarkup:$}){let f=e.ownerDocument,L=f.defaultView,D=e.closest(".screen"),V=f.activeElement,p={profile:structuredClone(i),extra:structuredClone(r),seller:o,sort:l};!p.extra.budget&&Object.keys(c).length&&(p.extra.budget={...c});let w=d==="all"?"makeModel":d,T="",F=!1,K=!1,le,re,_e=!r.budget&&Object.keys(c).length>0,oe=new Set,v=f.createElement("div");v.className="clp-filter-modal",v.setAttribute("role","dialog"),v.setAttribute("aria-modal","true"),v.setAttribute("aria-labelledby","clp-modal-title"),v.tabIndex=-1;let X=e.querySelector("#page-scroll"),Ie=X?.style.overflow;X&&(X.style.overflow="hidden");let de=[...e.children].map(t=>[t,t.inert]);de.forEach(([t])=>t.inert=!0),e.append(v);let ne=t=>t==="sort"?"Sort by":a.filters[t]?.label||t,R=t=>{let s=a.filters.makeModel.brands.find(n=>[n.value,...n.prototypeAliases||[]].some(m=>k(m)===k(t)));return k(s?.value||t)},H=t=>{let s={makes:"make",models:"model"}[t]||t;return[...$e(p.profile[s]),...$e(p.extra[t])]},ce=t=>{let s=String(t).split("::");if(s.length>1)return{make:R(s.shift()),model:k(s.join("::"))};let n=k(t),u=a.filters.makeModel.brands.flatMap(b=>[b.value,...b.prototypeAliases||[]].map(I=>({make:R(b.value),prefix:k(I)}))).sort((b,I)=>I.prefix.length-b.prefix.length).find(b=>n.startsWith(b.prefix)&&n.length>b.prefix.length);return{make:u?.make,model:u?n.slice(u.prefix.length):n}},me=(t,s)=>{let n=ce(t),m=ce(s);return(!n.make||!m.make||n.make===m.make)&&n.model===m.model},Y=(t,s)=>H(t).some(n=>t==="makes"?R(n)===R(s):t==="models"?me(n,s):k(n)===k(s)),Te=()=>y(p),he=t=>t==="sort"?p.sort==="recommended"?0:1:t==="category"?p.seller==="all"?0:1:t==="makeModel"?H("makes").length+H("models").length:["budget","year","km"].includes(t)?Object.keys(p.extra[t]||{}).some(s=>s==="min"||s==="max")?1:0:H(t).length,J=(t,s)=>{let n=t==="category"||a.filters[t]?.selection==="single",m=t==="category"?p.seller===s.value:Y(t,s.value);return`<label class="clp-modal-option${m?" is-selected":""}"><input type="${n?"radio":"checkbox"}" name="modal-${t}" data-modal-filter="${t}" value="${x(s.value)}" ${m?"checked":""}><span>${x(s.label)}</span></label>`};function Ce(){let t=`<label class="clp-modal-search">${q("magnifying-glass-outline")}<input type="search" name="clp-modal-query" aria-label="Search a brand or model" placeholder="Search" value="${x(T)}" autocomplete="off"></label>`,s=(a.popularModels||[]).filter(m=>!T||k(m.label).includes(k(T))).map(m=>{let u=a.filters.makeModel.brands.find(Q=>Q.value===m.brand),b=u?.models.find(Q=>k(Q.value)===k(m.model));if(!b)return"";let I=m.brand+"::"+b.value,Z=Y("models",I);return G(`<img src="./assets/makes/${Be[m.brand]}.png" alt=""><span>${x(m.label)}</span>${Z?'<span class="clp-modal-chip-cross" aria-hidden="true">\xD7</span>':""}`,"popular",I,"clp-modal-model-chip"+(Z?" is-selected":""),`aria-pressed="${Z}"`)}).join(""),n=a.filters.makeModel.brands.map(m=>{let u=k(m.label).includes(k(T)),b=m.models.filter(I=>!T||u||k(I.label).includes(k(T)));return T&&!u&&!b.length?"":`<details class="clp-modal-brand" data-brand="${x(m.value)}" ${oe.has(m.value)||T?"open":""}><summary>${J("makes",m).replace("<span>",Oe(m.value)+"<span>")}<span class="clp-modal-chevron"><img src="./assets/clp/filters-8001/chevron-down-large-outline.svg" alt=""></span></summary><div class="clp-modal-model-options" role="group" aria-label="${x(m.label)} models">${b.map(I=>J("models",{label:I.label,value:m.value+"::"+I.value})).join("")}</div></details>`}).join("");return t+(s?`<h2>Popular models</h2><div class="clp-modal-popular">${s}</div>`:"")+`<h2>All brands</h2><div class="clp-modal-brands">${n||"<p>No brands or models found.</p>"}</div>`}function Ae(){if(w==="makeModel")return Ce();if(w==="sort")return`<h2>Sort by</h2><div class="clp-modal-options clp-modal-sort-options">${g.map(s=>`<label class="clp-modal-option${p.sort===s.value?" is-selected":""}${s.disabled?" is-disabled":""}"><input type="radio" name="modal-sort" value="${x(s.value)}" ${p.sort===s.value?"checked":""} ${s.disabled?"disabled":""}><span>${x(Ne(s))}</span><small class="clp-modal-sort-city" aria-hidden="true">${x(p.profile.city||"")}</small></label>`).join("")}</div><p class="clp-modal-note">Recently Added is unavailable when listing dates are missing.</p>`;let t=a.filters[w];if(!t)return"";if(["budget","year","km"].includes(w)){let s=p.extra[w]||{};return`<h2>${x(t.label)}</h2><div class="clp-modal-range">${["min","max"].map(n=>`<label>${n==="min"?"Minimum":"Maximum"}${w==="budget"?" (\u20B9)":w==="km"?" (km)":""}<input name="modal-range-${n}" type="number" inputmode="numeric" min="${Math.min(t.min,s[n]??t.min)}" max="${t.max}" step="${w==="budget"?1e3:1}" value="${x(s[n]??"")}" placeholder="${t[n]}"></label>`).join("")}</div>`}return`<h2>${x(t.label)}</h2><div class="clp-modal-options">${(w==="category"?[{value:"all",label:"All cars"},...t.options]:t.options||[]).map(s=>J(w,s)).join("")}</div>`}function A({keepScroll:t=!1,focusName:s,focusFilter:n}={}){let m=t&&v.querySelector(".clp-modal-content")?.scrollTop||0,u=v.querySelector(".clp-modal-menu")?.scrollTop||0;v.querySelectorAll(".clp-modal-brand[open]").forEach(b=>oe.add(b.dataset.brand)),v.dataset.activeGroup=w,$(v,`<header class="clp-modal-header">${G(q("back"),"cancel","","clp-modal-back",'aria-label="Back to cars"')}<h1 id="clp-modal-title">Filters</h1>${G("Clear all","clear","","clp-modal-clear")}</header><div class="clp-modal-body"><nav class="clp-modal-menu" aria-label="Filter categories">${Ge.filter(b=>b==="sort"||a.filters[b]).map(b=>G(`<span>${x(ne(b))}</span>${he(b)?`<small>${he(b)} selected</small>`:""}`,"group",b,"clp-modal-menu-item"+(w===b?" is-active":""),`aria-current="${w===b?"page":"false"}"`)).join("")}</nav><section class="clp-modal-content" aria-label="${x(ne(w))}">${Ae()}</section></div><footer class="clp-modal-footer"><div class="clp-modal-count" aria-live="polite"><strong>${Te()}</strong><span>sample cars</span></div>${G("Apply filter","apply","","clp-modal-apply")}</footer>`),v.querySelector(".clp-modal-content").scrollTop=m,v.querySelector(".clp-modal-menu").scrollTop=u,n&&v.querySelector(`[data-modal-filter="${n.key}"][value="${L.CSS.escape(n.value)}"]`)?.focus({preventScroll:!0}),s&&(v.querySelector(`[name="${s}"]:checked`)||v.querySelector(`[name="${s}"]`))?.focus({preventScroll:!0})}function O(t=!1){if(!F)if(F=!0,L.clearTimeout(le),L.cancelAnimationFrame(re),f.removeEventListener("keydown",fe,!0),v.removeEventListener("click",ue),v.removeEventListener("change",ge),v.removeEventListener("input",ye),D?.classList.add("is-clp-modal-restoring"),v.remove(),X&&(X.style.overflow=Ie),de.forEach(([s,n])=>s.inert=n),L.requestAnimationFrame(()=>L.requestAnimationFrame(()=>D?.classList.remove("is-clp-modal-restoring"))),t){_e&&!K&&delete p.extra.budget,h(p);let s=V?.dataset.action,n=V?.dataset.value;(s?[...e.querySelectorAll("[data-action]")].find(u=>u.dataset.action===s&&u.dataset.value===n):null)?.focus({preventScroll:!0})}else V?.isConnected&&V.focus({preventScroll:!0})}let pe=()=>{F||(v.classList.remove("is-open"),L.matchMedia("(prefers-reduced-motion: reduce)").matches?O():le=L.setTimeout(()=>O(),260))};function ve(t,s){let n={makes:"make",models:"model"}[t]||t,m=H(t);p.extra[t]=a.filters[t]?.selection==="single"?[s]:Y(t,s)?m.filter(u=>t==="makes"?R(u)!==R(s):t==="models"?!me(u,s):k(u)!==k(s)):[...m,s],n in p.profile&&(p.profile[n]="Any"),t==="makes"&&(p.profile.model="Any",p.extra.models=[])}function ue(t){let s=t.target.closest("[data-clp-modal]");if(!s)return;t.preventDefault();let n=s.dataset.clpModal,m=s.dataset.value;if(n==="cancel")pe();else if(n==="apply"){let u=v.querySelector("input:invalid");if(u){u.reportValidity();return}O(!0)}else n==="group"?(w=m,T="",A(),v.querySelector(`[data-clp-modal="group"][data-value="${m}"]`)?.focus({preventScroll:!0})):n==="clear"?(p.profile={...p.profile,budget:"any",body:"Any",make:"Any",model:"Any",fuel:"Any",transmission:"Any",seats:"Any",owners:"Any"},p.extra={},K=!0,p.seller="all",p.sort="recommended",A()):n==="popular"&&(ve("models",m),A({keepScroll:!0}))}function ge(t){let s=t.target;if(s.name==="modal-sort")p.sort=s.value,A({keepScroll:!0,focusName:"modal-sort"});else if(s.dataset.modalFilter)s.dataset.modalFilter==="category"?p.seller=s.value:ve(s.dataset.modalFilter,s.value),A({keepScroll:!0,focusFilter:{key:s.dataset.modalFilter,value:s.value}});else if(s.name?.startsWith("modal-range-")){let n=a.filters[w],m=s.name.slice(12),u={...p.extra[w]};if(s.setCustomValidity(""),s.value===""?delete u[m]:u[m]=Number(s.value),m==="max"&&delete u.maxExclusive,u.min!=null&&u.max!=null&&u.min>u.max&&s.setCustomValidity("Minimum must be less than or equal to maximum."),!s.checkValidity()){s.reportValidity();return}p.extra[w]=u,w==="budget"&&(p.profile.budget="any",K=!0),A({keepScroll:!0,focusName:s.name})}}function ye(t){t.target.name==="clp-modal-query"&&(T=t.target.value,A({focusName:"clp-modal-query"}))}function fe(t){if(F)return;if(t.key==="Escape"){t.preventDefault(),t.stopImmediatePropagation(),pe();return}if(t.key!=="Tab")return;let s=[...v.querySelectorAll('button,input,summary,[tabindex="0"]')].filter(u=>!u.disabled&&u.getClientRects().length);if(!s.length)return;let n=s[0],m=s.at(-1);t.shiftKey&&(f.activeElement===n||!v.contains(f.activeElement))?(t.preventDefault(),m.focus()):!t.shiftKey&&(f.activeElement===m||!v.contains(f.activeElement))&&(t.preventDefault(),n.focus())}return A(),v.addEventListener("click",ue),v.addEventListener("change",ge),v.addEventListener("input",ye),f.addEventListener("keydown",fe,!0),v.querySelector(".clp-modal-back").focus({preventScroll:!0}),v.getBoundingClientRect(),re=L.requestAnimationFrame(()=>{F||v.classList.add("is-open")}),()=>O()}var se=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),We=({playbackRate:e=1}={})=>`<canvas class="cargpt-entry-live" data-cargpt-orb${e!==1?` data-playback-rate="${e}"`:""} aria-hidden="true"></canvas>`;function we({surface:e="listing",carId:a=""}={}){let i=e==="detail",r=i?"cdp-ask":"clp-cargpt",o=["Show me all photos of this car","Book test drive for this car","Is this a good deal?","Show me similar cars"];return`<aside class="cargpt-discovery-entry" data-cargpt-discovery data-surface="${e}" data-entry-key="${se(e+":"+a)}" data-expanded="false" aria-label="CarGPT assistance">${i?'<div class="cargpt-discovery-material" aria-hidden="true"></div>':""}<button type="button" class="bottom-nav-search cargpt-discovery-launcher" data-action="${r}" aria-label="${i?"Ask CarGPT about this car":"Open CarGPT"}">${We()}</button>${i?`<div class="cargpt-entry-nudges" role="region" aria-label="CarGPT suggestions" tabindex="0" inert>${o.map((l,d)=>`<button type="button" class="cargpt-entry-nudge" data-action="cdp-cargpt-query" data-value="${se(l)}" data-cargpt-nudge="${d}">${se(l)}</button>`).join("")}</div>`:""}</aside>`}var E=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),U=e=>String(e??"").toLowerCase().replace(/[^a-z0-9]/g,""),xe=e=>`./assets/clp/inline-8727/${e}`,M=(e,a,i,r=E(e),o="")=>`<button type="button" class="clp-inline-choice ${o}" data-action="retail-clp-inline" data-value="${E(JSON.stringify({key:a,value:i}))}" aria-label="Filter by ${E(e)}">${r}</button>`,ke=(e,a=E(e),i="",r=!1)=>`<button type="button" class="clp-inline-choice ${i}" data-action="clp-cargpt-query" ${r?'data-unverified="true" ':""}data-value="${E(e)}" aria-label="Ask CarGPT: ${E(e)}">${a}</button>`,C=(e,a="")=>`<img${a?` class="${a}"`:""} src="${xe(e)}" alt="">`,P=(e,a,i="")=>`<div class="clp-inline-rail ${i}" tabindex="0" role="group" aria-label="${E(a)}">${e}</div>`,Ke=e=>{let a=N[e];return a?`<span class="clp-inline-logo" aria-hidden="true"><img src="${E(a.src)}" alt=""${a.image?` style="${Object.entries(a.image).map(([i,r])=>`${i}:${r}`).join(";")}"`:""}></span>`:""},Ye={people:"people",curated:"curated",bodytype:"body",brand:"brand",fuel:"fuel",seller:"seller"},z=(e,a,i,r,{subtitle:o="",viewAll:l=""}={})=>{let d=Ye[r];return`<section class="clp-inline-widget clp-inline-${r}" data-node-id="${e}" aria-label="${E(a)}">${C(d?d+"-imgWrapper.svg":"wave-top.svg","clp-inline-border")}<div class="clp-inline-body"><div class="clp-inline-heading"><div><h2>${E(a)}</h2>${o?`<p>${E(o)}</p>`:""}</div>${l?`<button type="button" class="clp-inline-view-all" data-action="retail-clp-filter" data-value="${l}">View all</button>`:""}</div>${i}</div>${C(d?d+"-imgWrapper1.svg":"wave-bottom.svg","clp-inline-border")}</section>`},Je=[["Maruti","Maruti","imgImage84139531.png",34,34,0,0,""],["Hyundai","Hyundai","imgBitmap.png",69,26.172,.5,.09,"height:148.24%;width:101.03%;left:0;top:0"],["Tata","TATA","imgImage84139573.png",54,35,0,.5,"height:162.96%;width:186.24%;left:-43.12%;top:-3.7%"],["Honda","Honda","imgImage84139574.png",37,31,.5,.5,"height:116.13%;width:100.48%;left:-.24%;top:0"],["Mahindra","Mahindra","imgImage84139530.png",52,30,0,0,""],["Renault","Renault","imgImage84139498.png",50,38.636,0,.32,"height:129.41%;width:100%;left:0;top:0"],["Ford","Ford","imgImage84139575.png",51,29,.5,.5,""],["KIA","KIA","imgLogo08.svg",64,64,0,0,""]];function Ee(e,{catalog:a,cars:i=[]}={}){if(!a||!Number.isInteger(e)||e<4||e%4)return"";let r=(e/4-1)%8;if(r===0)return z("9266:62693","People are also searching",`<div class="clp-inline-query-rows">${[["Tata Nexon Automatic","Maruti under \u20B95 lakh","Hyundai SUV","Under \u20B95 lakh"],["Honda City Petrol","Tata Nexon Petrol","Maruti Baleno under \u20B95 lakh","Under \u20B95 lakh"]].map((l,d)=>P(l.map(c=>ke(c,E(c),"clp-inline-query")).join(""),`Suggested searches ${d+1}`)).join("")}</div>`,"people");if(r===1){let o=(l,d,c,g,y)=>y?ke(y,`${C("curated-"+d+".svg")}<span>${c}</span><small aria-label="Matching count unavailable">\u2014</small>`,"clp-inline-tile",!0):M("Budget friendly: under \u20B95 lakh","budget",{max:5e5},`${C("curated-"+d+".svg")}<span>${c}</span><small>(${g})</small>`,"clp-inline-tile");return z("9283:67619","Shhh.. Don\u2019t tell anyone! \u{1F92B}",P(o("Budget friendly","imgTagSaleFilled","Budget<br>friendly",i.filter(l=>(l.priceRupees??l.price*1e5)<=5e5).length)+o("As good as new","imgSparkleFilled","As good<br>as new",null,"As good as new cars")+o("High safety","imgShieldBadgeCheckFilled","High<br>safety",null,"High safety cars with verified safety ratings"),"Curated filters"),"curated",{subtitle:"Cherry-picked by Cars24 people"})}if(r===2){let o=["Maruti","Hyundai","Tata","Honda","Mahindra","KIA","Toyota","Renault","Ford","Volkswagen","MG","Skoda","Nissan","Jeep","Datsun","Mercedes Benz","BMW","Audi","Lexus","Chevrolet","CITROEN","ISUZU"],l=a.filters.makeModel.brands.filter(c=>o.some(g=>U(g)===U(c.value))),d=(c,g)=>`<div class="clp-inline-filter-row"><h3>${c}</h3>${P(g,c)}</div>`;return z("9283:67683","Filters",d("Make",l.map(c=>M(c.label,"makes",c.value,Ke(c.value)+`<span>${E(c.label)}</span>`)).join(""))+d("Transmission",a.filters.transmission.options.map(c=>M(c.label,"transmission",c.value,`${q(c.value==="Automatic"?"transmission-automatic":"transmission-manual")}<span>${E(c.label)}</span>`)).join(""))+'<button type="button" class="clp-inline-apply" data-action="retail-clp-inline-apply" data-value="{}" hidden disabled>Apply filter</button>',"filters")}if(r===3)return z("9285:68324","Explore by body type",P([["SUV","imgImage84140922.png"],["Sedan","imgImage84140920.png"],["Hatchback","imgImage84140921.png"]].map(([l,d],c)=>M(l,"body",l,`<span class="clp-inline-body-art clp-inline-body-art-${c}"><span>${C("body-"+d)}</span></span><span>${l}</span>`,"clp-inline-body-choice")).join(""),"Body type"),"bodytype",{viewAll:"body"});if(r===4)return z("9285:68334","Explore by brand",P(Je.filter(([o])=>a.filters.makeModel.brands.some(l=>l.value===o)).map(([o,l,d,c,g,y,h,$],f)=>M(l,"makes",o,`<span class="clp-inline-brand-circle clp-inline-brand-circle-${f}"><span style="width:${c}px;height:${g}px;left:calc(50% + ${y}px);top:calc(50% + ${h}px)">${d.endsWith(".svg")?C("brand-"+d):`<img src="${xe("brand-"+d)}" alt=""${$?` style="${$}"`:""}>`}</span></span><span>${l}</span>`,"clp-inline-brand-choice")).join(""),"Brands"),"brand",{viewAll:"makeModel"});if(r===5)return z("9285:68341","Explore by budget",P([3,5,7,10,15,2,4,8,12,20].map(o=>M(`Under \u20B9${o} lakh`,"budget",{max:o*1e5},`<span>Under<br>\u20B9${o} lakhs</span><small>(${i.filter(l=>(l.priceRupees??l.price*1e5)<=o*1e5).length})</small>`,"clp-inline-tile")).join(""),"Budget"),"budget");if(r===6){let o=[...a.filters.fuel.options].sort((l,d)=>["Petrol","Diesel","CNG","Hybrid","Electric"].indexOf(l.value)-["Petrol","Diesel","CNG","Hybrid","Electric"].indexOf(d.value));return z("9285:68348","Filters",P(o.map(l=>M(l.label,"fuel",l.value,`${C(l.value.toLowerCase()+".svg")}<span>${E(l.label)}</span><small>(${i.filter(d=>U(d.fuel)===U(l.value)).length})</small>`,"clp-inline-tile")).join(""),"Fuel"),"fuel")}return r===7?z("9285:68359","Know who you\u2019re buying from",P([["Cars24","Cars24 Owned Stock","imgCategoryOwnedStockTypeWordmark.svg","Handpicked cars, fully refurbished<br>for best quality"],["Verified","Verified Direct Seller","imgSellerTypeBadge.svg","Negotiate directly with KYC-verified owners"],["Trusted","Partner dealer","imgSellerTypeBadge1.svg","Fully inpected cars by Cars24 verified dealers"]].map(([l,d,c,g],y)=>M(`${l} ${d}`,"seller",d,`<span class="clp-inline-seller-title">${l}<span class="clp-inline-seller-badge clp-inline-seller-badge-${y}">${C("seller-"+c)}</span></span><span class="clp-inline-seller-copy">${g}</span><span class="clp-inline-seller-arrow">${C("seller-imgArrowRightFilled.svg")}</span>`,"clp-inline-seller-card")).join(""),"Seller categories"),"seller"):""}function Le(e){for(let a of e.querySelectorAll(".clp-inline-filters")){if(a.dataset.bound)continue;a.dataset.bound="true";let i={};a.addEventListener("click",r=>{let o=r.target.closest('[data-action="retail-clp-inline"]');if(!o)return;r.preventDefault(),r.stopPropagation();let{key:l,value:d}=JSON.parse(o.dataset.value),c=i[l]||[];i[l]=c.includes(d)?c.filter(y=>y!==d):[...c,d],o.setAttribute("aria-pressed",String(i[l].includes(d)));let g=a.querySelector(".clp-inline-apply");g.dataset.value=JSON.stringify(i),g.disabled=!Object.values(i).some(y=>y.length),g.hidden=g.disabled})}}var _=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),B=e=>`./assets/clp/source-8727/${e}`,S=(e,a,i="",r="",o="")=>`<button type="button" class="${r}" data-action="${a}" data-value="${_(i)}" ${o}>${e}</button>`,ie=e=>q(e),W=e=>`<img src="${B("filter-"+e+".svg")}" alt="">`,Ze=[{value:"recommended",label:"Sort by"},{value:"price-low",label:"Price: low to high"},{value:"price-high",label:"Price: high to low"},{value:"km-low",label:"Lowest kilometres"},{value:"year-new",label:"Newest year"}];function Qe(e,a=!1,i="",r=!1,o=!1,l="desktop-grid"){return`<div class="clp-card" data-car-id="${_(e.id)}">${e.demoDifferences?.length?`<p class="clp-demo-differences">${e.demoDifferences.map(_).join(" \xB7 ")}</p>`:""}<car-card data-card-surface="clp" data-inventory-id="${_(e.id)}" data-family="${["list","tile","desktop-grid","india-mobile","carousel-grid"].includes(l)?l:"desktop-grid"}" data-recommended="${r}" data-emi-first="${o}"></car-card></div>`}function ea({sort:e,layout:a,filterChips:i,sortOptions:r,chips:o=[]}){let l=r||Ze,d=h=>h.group?`${h.group}: ${h.label}`:h.label,c=l.find(h=>h.value===e),g=i||[{label:"Car category",action:"retail-clp-category"},{label:a==="list"?"Card view":"List view",action:"retail-clp-layout"}],y=(h,$,f=!1)=>`<span class="clp-chip-icon${f?"":" clp-chip-icon--plain"}"><span class="clp-filter-icon">${ie($)}</span></span><span class="clp-chip-label"><span${$==="sort"?' class="clp-sort-display"':""}>${_(h)}</span></span><span class="clp-chip-chevron">${W("chevron")}</span>`;return`<div class="clp-toolbar" role="region" aria-label="Car filters"><div class="clp-available-filters" role="group" tabindex="0" aria-label="Available filters">${S(y("Filters","filter",!0),"retail-clp-filters","","clp-chip")}${S(y(!e||e==="recommended"?"Sort by":c?d(c):"Sort by","sort",!0),"retail-clp-sort","",`clp-chip clp-sort${e&&e!=="recommended"?" is-sorted":""}`,'aria-label="Sort cars"')}${g.map(h=>S(y(h.label,h.icon||"filter"),h.action,h.value||"",`clp-chip${h.active?" is-selected":""}`,`aria-label="${_(h.ariaLabel||h.label)}"${h.active?' aria-pressed="true"':""}`)).join("")}</div>${o.length?`<div class="clp-active-filters" role="group" tabindex="0" aria-label="Active filters">${S(`${W("sparkle")}<span>Clear all</span>`,"retail-clp-clear","","clp-reset")}<span class="clp-filter-separator" aria-hidden="true"><img src="${B("filter-separator.svg")}" alt=""></span>${o.map(([h,$])=>S(`<span class="clp-chip-label"><span>${_($)}</span></span><span class="clp-chip-cross">${W("cross")}</span>`,"retail-clp-remove",h,"clp-chip",`aria-label="Remove ${_($)} filter"`)).join("")}${S(W("arrow"),"retail-clp-filters","","clp-applied-more",'aria-label="Edit all filters"')}</div>`:""}</div>`}function aa(e){let a=[e.locality,e.address].find(r=>typeof r=="string"&&r.trim())||"Choose location";return`<header class="clp-header" data-clp-design="8727:60954"><div class="clp-header-row">${S(`<img src="${B("back.svg")}" alt="">`,"back","","clp-round",'aria-label="Back"')}${S(`<span class="clp-city-title"><strong>${_(e.city||"Choose city")}</strong><img src="${B("location-chevron.svg")}" alt=""></span><small>${_(a)}</small>`,"city","","clp-city",'aria-label="Choose city"')}${S("My wishlist","saved","","clp-wishlist",'aria-label="Saved cars"')}</div></header><div class="clp-search-rail"><div class="clp-search-inner">${S(`${ie("magnifying-glass-outline")}<span class="home-search-prompt" aria-hidden="true"><span class="home-search-prefix">Search for </span><span class="home-search-words"><span class="home-search-word is-current">Maruti</span><span class="home-search-word is-next"></span></span></span>`,"search","","clp-search",'aria-label="Search cars or services"')}</div></div><div class="clp-banner-space"><img class="clp-banner-dots" src="${B("page-control.svg")}" alt="">${S("","retail-clp-benefits","","clp-banner-action",'aria-label="View return benefit information"')}</div>`}function ta({discovery:e,filterEditor:a,searchMeta:i,loanApproval:r}){return`${e?.notice?`<p class="clp-demo-notice" role="status">${_(e.notice)}</p>`:""}${a||""}${i?.ai?`<section class="interpretation clp-interpretation" aria-label="AI search interpretation"><div class="interpretation-heading">${ie("sparkle-filled")}<strong>${i.edited?"Search started with":"Showing results for"} \u201C${_(i.query)}\u201D</strong></div><p>${_(i.answer||"Explore the matching cars below. Refine the filters to compare the options that fit your search.")}</p><div class="interpretation-actions">${S("Refine preferences","retail-clp-filters","","text-btn")}<span>AI preview</span></div></section>`:""}${r?`<section class="notice clp-approval" aria-label="Pre-approved car budget"><strong>Cars you\u2019re pre-approved for, up to \u20B9${r.cap} lakh</strong><p>Demo approval \xB7 EMI from dated listings; final terms depend on the lender.</p></section>`:""}`}function qa(e){let{cars:a,profile:i,saved:r,seller:o,layout:l,discovery:d,loanApproval:c}=e,g=a.filter($=>!$.demoDifferences?.length).length,y=d?.mode==="mixed"?`${g} exact ${g===1?"match":"matches"} \xB7 ${a.length-g} alternatives`:d?.mode==="alternatives"?`${a.length} demo alternatives`:`${a.length} ${a.length===1?"car":"cars"}${d?.mode==="expanded"?" in this demo":" available"}`,h=ta(e);return`<div class="clp-view clp-source" data-theme="cars24"><div class="clp-scroll" id="page-scroll">${aa(i)}${ea(e)}<section class="clp-results" aria-label="Car results"><div class="clp-count"><h1>${y}</h1><span class="clp-count-line" aria-hidden="true"></span></div>${a.length===1?ee(a):""}${h?`<div class="clp-context">${h}</div>`:""}<div class="clp-inventory ${l==="tile"?"compact":""}" data-seller="${_(o||"all")}">${a.length?a.map(($,f)=>($.demoDifferences?.length&&!a[f-1]?.demoDifferences?.length?'<p class="clp-demo-notice" data-alternatives-heading role="heading" aria-level="2">More cars to consider \xB7 some preferences differ</p>':"")+Qe($,r?.has($.id),$.city||i.city,f===0,!!c,e.cardFamily)+(f===1?ee(a):"")+Ee(f+1,{catalog:e.inlineCatalog,cars:a})).join(""):`<div class="clp-empty"><h2>No cars for these filters.</h2><p>Edit your preferences or reset filters to explore the sample inventory.</p>${S("Edit filters","retail-clp-filters","","primary")}${S("Reset all filters","retail-clp-clear","","secondary")}</div>`}</div></section></div>${we({surface:"listing"})}</div>`}var Se=new WeakSet;function Da(e){Le(e);for(let a of e.querySelectorAll(".clp-available-filters,.clp-active-filters"))Se.has(a)||(Se.add(a),a.addEventListener("keydown",i=>{i.target!==a||!["ArrowLeft","ArrowRight","Home","End"].includes(i.key)||(i.preventDefault(),a.scrollLeft=i.key==="Home"?0:i.key==="End"?a.scrollWidth:a.scrollLeft+(i.key==="ArrowRight"?1:-1)*a.clientWidth*.65)}))}export{Qe as clpCard,qa as clpMarkup,Ue as openClpFilterModal,Da as setupClpAssurance,De as setupClpChrome};
