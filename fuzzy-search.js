/** Bounded Damerau-Levenshtein matching for local search vocabulary. */
export function editDistance(a,b){
 const rows=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
 for(let i=0;i<=a.length;i++)rows[i][0]=i;
 for(let j=0;j<=b.length;j++)rows[0][j]=j;
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++){
  rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
  if(i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1])rows[i][j]=Math.min(rows[i][j],rows[i-2][j-2]+1);
 }
 return rows[a.length][b.length];
}
export function tokenScore(query,word,{prefix=true}={}){
 if(query===word)return 100;
 if(prefix&&word.startsWith(query))return 80;
 // Short names and numeric/alphanumeric codes require exact or prefix matches.
 if(query.length<4||word.length<4||!/^[a-z]+$/.test(query+word))return 0;
 const limit=Math.min(query.length,word.length)>=8?2:1;
 if(Math.abs(query.length-word.length)>limit)return 0;
 const distance=editDistance(query,word);
 return distance<=limit?60-distance*10:0;
}
export function phraseScore(tokens,words){
 if(!tokens.length)return 0;
 const scores=tokens.map(token=>Math.max(0,...words.map(word=>tokenScore(token,word))));
 return scores.every(Boolean)?scores.reduce((sum,score)=>sum+score,0):0;
}
export function correctSearchText(text,vocabulary,protectedWords=new Set()){
 const corrections=[];
 const corrected=text.replace(/[a-z0-9]+/gi,original=>{
  const token=original.toLowerCase();
  if(vocabulary.has(token)||protectedWords.has(token))return original;
  const candidates=[...vocabulary].map(word=>({word,score:tokenScore(token,word,{prefix:false})})).filter(item=>item.score>0).sort((a,b)=>b.score-a.score);
  if(!candidates.length||candidates[0].score===candidates[1]?.score)return original;
  const replacement=candidates[0].word;corrections.push(replacement);return replacement;
 });
 return {text:corrected,corrections};
}
