(()=>{"use strict";var e={862:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),a(333);const i=s(a(919)),n=s(a(520)),o=s(a(799)),r=s(a(647)),d=s(a(898)),l=s(a(530)),c=s(a(790)),h={width:800,height:600,type:Phaser.AUTO,parent:"content",title:"Starter Project for Phaser 3 with Visual Studio Code, TypeScript, and NodeJS"};class u extends Phaser.Game{constructor(e){d.default.LogSceneMethodEntry("Game","constructor"),super(e),this.scene.add(i.default.Name,i.default),this.scene.add(n.default.Name,n.default),this.scene.add(r.default.Name,r.default),this.scene.add(o.default.Name,o.default),this.scene.add(l.default.Name,l.default),this.scene.add(c.default.Name,c.default),this.scene.start(i.default.Name)}}t.default=u,window.onload=()=>{new u(h)}},919:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(520)),n=s(a(898));class o extends Phaser.Scene{preload(){}create(){n.default.LogSceneMethodEntry("Boot","create"),this.scene.start(i.default.Name)}}t.default=o,o.Name="Boot"},530:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(898));class n extends Phaser.Scene{preload(){}create(){i.default.LogSceneMethodEntry("MainGame","create"),this.input.keyboard.on("keydown-SPACE",this.bite,this),this.input.keyboard.on("keyup-SPACE",this.open,this),this.shark=this.add.sprite(this.cameras.main.centerX,this.cameras.main.centerY,"ChompSharkOpen"),this.shark.displayWidth=200,this.shark.scaleY=this.shark.scaleX}bite(){this.shark.setTexture("ChompSharkClosed")}open(){this.shark.setTexture("ChompSharkOpen")}}t.default=n,n.Name="MainGame"},799:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(898)),n=s(a(530)),o=s(a(790));class r extends Phaser.Scene{preload(){}create(){i.default.LogSceneMethodEntry("MainMenu","create");const e=this.cameras.main.height/3,t=this.add.text(this.cameras.main.centerX,e,"Start");t.setFontFamily("monospace").setFontSize(40).setFill("#fff").setAlign("center").setOrigin(.5),t.setInteractive(),t.on("pointerdown",(()=>{this.scene.start(n.default.Name)}),this);const a=this.add.text(this.cameras.main.centerX,2*e,"Settings");a.setOrigin(.5),a.setFontFamily("monospace").setFontSize(30).setFill("#fff"),a.setInteractive(),a.on("pointerdown",(()=>{this.scene.start(o.default.Name)}),this)}update(){}}t.default=r,r.Name="MainMenu"},790:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(898)),n=s(a(799));class o extends Phaser.Scene{create(){i.default.LogSceneMethodEntry("MainSettings","create");const e=this.cameras.main.height/4,t=this.add.text(this.cameras.main.centerX,2*e,"Go Back");t.setOrigin(.5).setFontFamily("monospace").setFontSize(25).setFill("#fff").setInteractive(),t.on("pointerdown",(()=>{this.scene.start(n.default.Name)}),this)}}t.default=o,o.Name="MainSettings"},520:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(647)),n=s(a(898));class o extends Phaser.Scene{preload(){this.addProgressBar(),this.load.path="assets/",this.load.image("phaser_pixel_medium_flat"),this.load.image("Phaser-Logo-Small"),this.load.image("ChompSharkOpen"),this.load.image("ChompSharkClosed")}create(){n.default.LogSceneMethodEntry("Preloader","create"),this.scene.start(i.default.Name)}update(){}addProgressBar(){const e=this.cameras.main.width,t=this.cameras.main.height,a="#ffffff",s=this.add.graphics(),i=this.add.graphics();i.fillStyle(2236962,.8),i.fillRect(e/4,t/2-30,e/2,50);const n=this.make.text({x:e/2,y:t/2-50,text:"Loading...",style:{font:"20px monospace",color:a}});n.setOrigin(.5,.5);const o=this.make.text({x:e/2,y:t/2-5,text:"0%",style:{font:"18px monospace",color:"#ffffff"}});o.setOrigin(.5,.5);const r=this.make.text({x:e/2,y:t/2+50,text:"",style:{font:"18px monospace",color:a}});r.setOrigin(.5,.5),this.load.on("progress",(a=>{o.setText(parseInt(100*a+"",10)+"%"),s.clear(),s.fillStyle(16777215,1),s.fillRect(e/4+10,t/2-30+10,(e/2-10-10)*a,30)})),this.load.on("fileprogress",(e=>{r.setText("Loading asset: "+e.key)})),this.load.on("complete",(()=>{s.destroy(),i.destroy(),n.destroy(),o.destroy(),r.destroy()}))}}t.default=o,o.Name="Preloader"},647:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(a(898)),n=s(a(799));class o extends Phaser.Scene{preload(){this.load.path="assets/"}create(){i.default.LogSceneMethodEntry("SplashScreen","create"),this.add.text(this.cameras.main.centerX,.5*this.cameras.main.centerY,"Chomp eater").setOrigin(.5,0).setFontFamily("monospace").setFontSize(26).setFill("#fff");const e=this.add.text(this.cameras.main.centerX,this.cameras.main.centerY-25,"Powered By");e.setOrigin(.5,.5),e.setFontFamily("monospace").setFontSize(20).setFill("#fff"),this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"phaser_pixel_medium_flat"),this.input.setDefaultCursor("pointer"),this.input.on("pointerdown",this.loadMainMenu,this),this.time.addEvent({delay:3e3,callback:this.loadMainMenu,callbackScope:this,loop:!1})}loadMainMenu(){this.scene.start(n.default.Name)}}t.default=o,o.Name="SplashScreen"},898:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{static Log(e){console.log((new Date).toISOString()+" : "+e)}static LogSceneMethodEntry(e,t){this.Log("Entered "+e+" "+t+"()")}}},333:e=>{e.exports=Phaser}},t={};!function a(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}(862)})();
//# sourceMappingURL=app.js.map