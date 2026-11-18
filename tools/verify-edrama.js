const fs=require('fs'),path=require('path'),vm=require('vm');const root=path.resolve(__dirname,'..');const file=p=>path.join(root,p);const read=p=>fs.readFileSync(file(p),'utf8');
const association='E2:93:4C:35:8F:9F:CB:9F:08:97:0B:C7:D6:6B:81:31:FE:E3:C3:BF:08:5E:32:1D:2E:88:28:CA:1B:98:3A:B7';
const linkFile=file('.well-known/assetlinks.json');const links=JSON.parse(fs.readFileSync(linkFile,'utf8'));
if(!links.find(x=>x.target.package_name==='com.guns4america.edrama.preview'))links.push({relation:['delegate_permission/common.handle_all_urls'],target:{namespace:'android_app',package_name:'com.guns4america.edrama.preview',sha256_cert_fingerprints:[association]}});
if(!links.find(x=>x.target.package_name==='com.guns4america.kdrama'))throw Error('Original KDrama fingerprint missing');
fs.writeFileSync(linkFile,JSON.stringify(links,null,2)+'\n');
const pages=['index.html','edrama/index.html','edrama/privacy/index.html','edrama/community-guidelines/index.html','edrama/delete-account/index.html'];
for(const p of pages){const s=read(p);if(!s.includes('<html'))throw Error('Not HTML '+p);const matches=[...s.matchAll(/(?:src|href)="([^"]+)"/g)];for(const [,url] of matches){if(/^(https?:|mailto:|#|data:)/.test(url))continue;const link=url.split('?')[0].split('#')[0];const dest=link.startsWith('/')?link.slice(1):path.join(path.dirname(p),link);const full=file(dest);if(!fs.existsSync(full)&&!fs.existsSync(path.join(full,'index.html')))throw Error('Missing asset/link '+p+' => '+url)}console.log('Validated '+p+' ('+matches.length+' links)')}
for(const p of ['edrama/index.html','edrama/privacy/index.html','edrama/community-guidelines/index.html','edrama/delete-account/index.html'])if(read(p).includes('com.guns4america.kdrama"'))throw Error('KDrama Play URL in EDrama page: '+p);
const html=read('404.html');const code=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)][0]?.[1];if(!code)throw Error('404 script missing');new vm.Script(code,{filename:'404.html'});
console.log('KDrama association retained; EDrama preview association added. 404 script syntactically valid.');
