//Example 1. A simple map then flat.
const a = [[1],[2],[3]];
const a3 = a.flatMap(element=>element*5);
console.log(a3);
//--

//Example 2 - Count all words in a song
const kdaMore =
`
Should we show 'em how we do it every day?
Yeah, yeah, yeah
Na, na-na-na, na-na-na-na-na-na
Let's get it
Akali that girl, 'kali go grr
'Kali don't stop, 'kali don't skrrt
'Kali got a job, 'kali go to work
뜨거워 언제나, don't get burnt
넘쳐 흘러 more than a buffet
죽여 주잖아 like I'm buffy
누가 감히 on my huffy
거, 문열지마 that's a rough day (woo)
I'm givin' you more 'cause I'm greater than
필요없는 시험들, 답은 이미
But all of my numbers are talkin', babe
블루마블 Mrs. 모노폴리 (ooh)
너는 종이 돈이 나는 real money (hey)
필요 없대 너네들이 많은 돈들
Go get it, go get it, go get it, the mission
눈을못떼 모두 그래 너도 그래 (oh)
'Cause I got it different
All I'll ever know is life up on a throne
시작하면 끝을 보는 거야
You want
More
Know I got it, so here you go (let's go)
You look like you could use some more (more)
Know I got it and never runnin' low (low, oh)
Yeah, I got more than enough, add it up and away (ay, ay)
You know I got it like bomb-bomb, blow your mind
Never givin' less and that's how it'll stay (ay, ay)
You know I got it like all day, all the time
When I go, it's for gold
Yeah, they cool, but I'm cold
I don't fit in the mold
I'm a rebel
I don't do what you say
Makin' moves, I don't wait
While I smile in your face
I got different DNA
What's higher than the top? That's me (that's me)
Come take a look before falling at my feet (oh)
조용히 몸을 숙여 봐 (yeah, yeah, yeah)
So take a look, 나를 기억해 a queen (oh)
All I'll ever know is life up on a throne
시작하면 끝을 보는 거야
You want
More
Know I got it, so here you go (let's go)
You look like you could use some more (more)
Know I got it and never runnin' low (low, oh)
Yeah, I got more than enough, add it up and away (ay, ay)
You know I got it like bomb-bomb, blow your mind
Never givin' less and that's how it'll stay (ay, ay)
You know I got it like all day, all the time
Way out
感觉犹如海浪, on the wave now
不断往前遨游, never weighed down
This is how I do it every day, wow, wow
这一路上的奇迹 都记住了你的
每一个瞬间, 无比的耀眼
I know, I know, you want some more
准备好就一起走 givin' it all
More
Know I got it, so here you go (let's go, babe)
You look like you could use some more (more)
Know I got it and never runnin' low (low)
Yeah, I got more than enough, add it up and away (ay, ay)
You know I got it like bomb-bomb, blow your mind
Never givin' less and that's how it'll stay (ay, ay)
You know I got it like all day, all the time
`
//Get all the words in the array.
//The following splits the lyrics into a matrix.
//Each nested array is row/sentence. We would also have to
//go one level deep to count how many words per sentence.
//lyricwords is an array of arrays
const lyricWords = kdaMore.split('\n').map(sentence=>sentence.split(' '));
//However... the flattening process would remove the nested arrays.
//And we will get all the words in the lyrics. One array, nothing else.
const flatWords = kdaMore.split('\n').flatMap(sentence=>sentence.split(' '));
console.log('Actually... sentences:',lyricWords.length);
console.log('Actual total words: ',flatWords.length);
//How many different (no-duplicate) words are in the lyrics?
console.log(new Set(flatWords).size);

//To detail this a bit more
//We don't want to have this:
//[ [], [], [], [], ]
//Rather we want to have one big:
// [ ]

