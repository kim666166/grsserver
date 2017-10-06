/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "ThkX80sJHrk", name: "넉살 - 막이내려도 (Feat. 개코)"},
	{youtube: "UEQ4Ge7paeU", name: "볼빨간사춘기 - Blue"},
	{youtube: "BEf046e9TE0", name: "볼빨간사춘기 - 나의 사춘기에게"},
	{youtube: "WpFC_9bVVNI", name: "볼빨간사춘기 - 썸 탈꺼야"},
	{youtube: "LSGstdzAbKc", name: "Jason Mraz - Everywhere"},
	{youtube: "RKvx5RlmsaQ", name: "Weezer - Mexican Fender"},
	{youtube: "5bA7nrdVEqE", name: "The Chainsmokers - The One"},
	{youtube: "6siNjrIVfCA", name: "아이유 (IU) - 비밀의 화원"},
	{youtube: "TuRiJ86giVg", name: "류준열 - 어떻게 (Prod. By Philtre)"},
	{youtube: "p0JNeyqq8rQ", name: "아이유 (IU) - 가을 아침"},
	{youtube: "-ujr2GdhMcY", name: "행주 - Red Sun (Feat. ZICO, Swings)"},
	{youtube: "Ymz5ieVPB7Q", name: "스탠딩 에그(Standing Egg) - 오늘 밤은 (with JISIM)"},
	{youtube: "-sWMwXYXAzk", name: "Sam Smith - Too Good At Goodbyes"},
	{youtube: "3NmGGGlHpxQ", name: "Maroon 5 - What Lovers Do (feat. SZA)"},
	{youtube: "iIik7933PQw", name: "선미 - 가시나"},
	{youtube: "UbCJHMAWdqg", name: "10cm (십센치) - 폰서트"},
	{youtube: "RsHq6Q-7NsU", name: "우원재 - 시차 (We Are) (Feat. 로꼬 & GRAY)"},
	{youtube: "b7s4pvQCOoY", name: "10cm (십센치) - Everything"},
	{youtube: "vuScjZYirw4", name: "우원재 - 또 (Feat. Tiger JK, Bizzy, 마샬(MRSHLL)) "},
	{youtube: "1TEpu0qDL10", name: "10cm (십센치) - HELP"},
	{youtube: "1uEwXcULQyc", name: "넉살 - 필라멘트 (Feat. BSK A.K.A 김범수)"},
	{youtube: "xl8thVrlvjI", name: "Charle Puth & Wiz Khalifa - See You Again"},
	{youtube: "KEddeCFhExA", name: "Snoop Dogg & Wiz Khalifa - Young, Wild & Free (feat. Bruno Mars)"},
	{youtube: "g1-0g79fXvo", name: "Diddy-Dirty Money - Coming Home (feat. Skylar Grey)"},
	{youtube: "ICAD01dKJmw", name: "Troye Sivan - Youth"},
	{youtube: "F8RXkNfVOkk", name: "Troye Sivan - Bite"},
	{youtube: "_RKinK-O5N8", name: "Ariana Grande - Sometimes"},
	{youtube: "n4YQGUnj3TY", name: "박원 - touch"},
	{youtube: "Bjk0gOCinyc", name: "박원 - all of my life"},
	{youtube: "EB2m-qKtGhI", name: "버즈 (Buzz) - Tonight"},
	{youtube: "UsPLplYE4Mk", name: "Shawn Mednes - There's Nothing Holdin' Me Back"},
	{youtube: "2Fuaow-2OJw", name: "Red Velvet (레드벨벳)– 환생 (Rebirth)"},
	{youtube: "Gc4sY98Jn9I", name: "Twenty One Pilots - Stressed Out"},
	{youtube: "Fl2OvKxMA0s", name: "Panic! At The Disco - Death Of A Bachelor"},
	{youtube: "b1kQvZhQ6_M", name: "윤종신 - 좋니"},
	{youtube: "sjKlK0njMcw", name: "Charlie Puth - As You Are (feat. Shy Carter)"},
	{youtube: "067pUz5gT_0", name: "버즈 (Buzz) - 사랑하지 않은 것처럼"},
	{youtube: "g7TwWZjgtis", name: "아이유 (IU) - 이런 엔딩"},
	{youtube: "sB6UGX2YPjQ", name: "아이유 (IU) - 이 지금"},
	{youtube: "0w627XlZphs", name: "아이유 (IU) - 이름에게"},
	{youtube: "wtcQAxIaUQs", name: "헤이즈 (Heize) - 널 너무 모르고"},
	{youtube: "sXrR00uFZzc", name: "헤이즈 (Heize) - 비도 오고 그래서 (Feat. 신용재)"},
	{youtube: "Cu5fV5VaUxc", name: "박보람 - 넌 왜? (Feat. 서사무엘)"},
	{youtube: "j8Gkir-T_V8", name: "청하 - Why Don`t You Know (Feat. 넉살)"},
	{youtube: "VfSIeff6l3c", name: "아이유 (IU) - 팔레트 (Feat. G-DRAGON)"},
	{youtube: "GVTKt-k7VEs", name: "Red Velvet (레드벨벳) - 빨간 맛 (Red Flavor)"},
	{youtube: "ZLw9AFgPZZg", name: "BLACKPINK - 마지막처럼"},
	{youtube: "PflTgrIo980", name: "M.C The Max (엠씨 더 맥스) - 그대가 분다"},
	{youtube: "bi3Mz1ogz1A", name: "A Great Big World - Say Something"},
	{youtube: "GlXwAoBQcnQ", name: "A Great Big World - One Step Ahead"},
	{youtube: "B2FWgpfID3U", name: "Fun. - Sight Of The Sun"},
	{youtube: "zmWDablqiEI", name: "Fun. - Carry On"},
	{youtube: "4rg6puSP9ks", name: "Ed Sheeran - Tenerife Sea"},
	{youtube: "20pAJPNaAyw", name: "Ed Sheeran - Hearts Don't Break Round Here"},
	{youtube: "qXM0JdAwabU", name: "Ed Sheeran - Save Myself"},
	{youtube: "-4Qb7tqvfvQ", name: "Ed Sheeran - English Rose"},
	{youtube: "Ac-kCV0joDQ", name: "Jason Mraz - You Can Rely On Me"},
	{youtube: "dxOn-aZZ9z0", name: "Oasis - Don't Look Back In Anger"},
	{youtube: "rGlEZpOVjGo", name: "Imagine Dragons - Whatever It Takes"},
	{youtube: "1nv9br7P7g0", name: "Imagine Dragons - Walking The Wire"},
	{youtube: "qXM0JdAwabU", name: "Ed Sheeran - Save Myself"},
	{youtube: "qXM0JdAwabU", name: "Ed Sheeran - Save Myself"},
	
	
	
	
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"We Are Ready To Make Good Server For You",
	"환영합니다!",
	"여태것 경험하지 못한것을 GRS CITYRP 에서 경험하세요!",
	"단 '시민' 이라는 직업만을 가지고 여러분은 무엇을 할 수 있을까요?",
	"http://cafe.naver.com/grsserver",
	"노래는 '가수 - 노래제목' 입니다. 참고해주세요!",
	"스팀 커뮤니티 가입 꼭! 네이버 카페 가입 꼭!",
	"권력남용이 발생시 저 김재원이 직접 엄벌하겠습니다!",
	"모두가 즐거운 서버, GRS CITYRP 입니다!",
	"오늘도 즐거운 플레이 되세요!",
	"후원금은 서버를 위해 사용됩니다!",
	"많은 홍보, 후원 바랍니다!",
	"쓴소리는 개발자에겐 약입니다!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;