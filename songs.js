// Song pool v4 (Oct 2026). A song is in if it is mass-appeal, worldwide known — on any one of three counts:
//  • a hit on both sides of the Atlantic: US Billboard year-end Hot 100 AND UK top 10;
//  • a worldwide classic by plays (≈1B+ Spotify plays for the 2000s, 2B+ for the 2010s, 1.5B+ for the 2020s);
//  • a Grammy Record or Song of the Year nominee.
// Plus a floor of ~200M plays (2000s) / ~300M (2010s, 2020s), so nothing obscure gets in on a technicality.
// 2026 (no year-end charts yet): top 10 in both the US and UK in 2026 (2+ weeks in the US top 10), or 500M+ plays.
// Any genre is fine; Latin, country, K-pop and other regional genres must be a US + UK hit. No Christmas/novelty songs.
// One song per line: Artist | Title | optional extra accepted artist names (separated by ;)

const SONG_DATA = {
"00s": `
Coldplay | Yellow
Coldplay | Viva la Vida
The Killers | Mr. Brightside | Killers
Linkin Park | In the End
Eminem | Without Me
Eminem | Lose Yourself
Coldplay | The Scientist
Linkin Park | Numb
Keane | Somewhere Only We Know
Shakira | Hips Don't Lie
Eminem | Mockingbird
Gorillaz & De La Soul | Feel Good Inc. | Gorillaz
Eminem | The Real Slim Shady
Jason Mraz | I'm Yours
Rihanna | Umbrella
Miley Cyrus | Party in the U.S.A.
Kings of Leon | Sex on Fire
The White Stripes | Seven Nation Army
Black Eyed Peas | I Gotta Feeling | The Black Eyed Peas
50 Cent | In da Club
Coldplay | Fix You
Evanescence | Bring Me to Life
Maroon 5 | She Will Be Loved
Usher | Yeah!
Train | Hey, Soul Sister
Nelly Furtado | Promiscuous
Kanye West | Heartless | Ye
Beyoncé | Halo
Britney Spears | Toxic
Lady Gaga | Bad Romance
OutKast | Hey Ya!
Beyoncé | Crazy in Love
Natasha Bedingfield | Unwritten
Kesha | TiK ToK | Ke$ha
Kanye West | Flashing Lights
Lady Gaga | Just Dance
Rihanna | Don't Stop the Music
Kanye West | Stronger | Ye
Snow Patrol | Chasing Cars
Nickelback | How You Remind Me
Maroon 5 | This Love
The Fray | How to Save a Life | Fray
Akon | Smack That
Jay-Z | Empire State of Mind
Amy Winehouse | Back to Black
Flo Rida | Low
OutKast | Ms. Jackson
Alicia Keys | If I Ain't Got You
Hoobastank | The Reason
Papa Roach | Last Resort
Coldplay | Clocks
David Guetta | Sexy Bitch
Timbaland | The Way I Are
The Script | The Man Who Can't Be Moved
Kanye West | Gold Digger | Ye
Iyaz | Replay
Katy Perry | Hot n Cold
Eminem | Stan
Mario | Let Me Love You
Justin Timberlake | SexyBack
Linkin Park | What I've Done
Black Eyed Peas | Where Is the Love? | The Black Eyed Peas
Sean Paul | Temperature
Red Hot Chili Peppers | Snow (Hey Oh)
The Script | Breakeven
Avril Lavigne | Complicated
Shaggy | It Wasn't Me
Eminem | Superman
Franz Ferdinand | Take Me Out
Gnarls Barkley | Crazy
Plain White T's | Hey There Delilah
Adele | Make You Feel My Love
3 Doors Down | Kryptonite
Jimmy Eat World | The Middle
My Chemical Romance | Teenagers
50 Cent | Candy Shop
Jay-Z & Linkin Park | Numb / Encore | Jay-Z
Kings of Leon | Use Somebody
Train | Drops of Jupiter (Tell Me)
Katy Perry | I Kissed a Girl
Bon Jovi | It's My Life
NSYNC | Bye Bye Bye
Britney Spears | Gimme More
Nelly Furtado | Maneater
The Killers | Somebody Told Me
Nelly | Dilemma
Britney Spears | Oops!... I Did It Again
Alicia Keys | No One
Ne-Yo | So Sick
Audioslave | Like a Stone
Black Eyed Peas | Meet Me Halfway | The Black Eyed Peas
Gorillaz | Clint Eastwood
Arctic Monkeys | Fluorescent Adolescent
Linkin Park | Somewhere I Belong
B.o.B | Nothin' on You | Bob;Bruno Mars
The Game | Hate It or Love It
Lady Gaga | Telephone
Wheatus | Teenage Dirtbag
Sean Kingston | Beautiful Girls
Owl City | Fireflies
Leona Lewis | Bleeding Love
Taylor Swift | Love Story
James Blunt | You're Beautiful
Alicia Keys & Usher | My Boo | Usher and Alicia Keys
Rihanna | Disturbia
Kelly Clarkson | Since U Been Gone
Flo Rida | Right Round
50 Cent | P.I.M.P.
Panic! At the Disco | I Write Sins Not Tragedies
Kanye West | All Falls Down
Estelle | American Boy
Nelly Furtado | Say It Right
Kanye West | Homecoming
Akon | Lonely
Rihanna | Pon de Replay
Justin Timberlake | Rock Your Body
Kid Cudi | Day 'n' Nite
Green Day | Wake Me up When September Ends
blink-182 | I Miss You
Gwen Stefani | The Sweet Escape
50 Cent | 21 Questions
My Chemical Romance | Welcome To The Black Parade
Ne-Yo | Miss Independent
Red Hot Chili Peppers | Dani California
Jay Sean | Down
Fall Out Boy | Sugar, We're Goin Down
Keyshia Cole | Love
The Calling | Wherever You Will Go
M.I.A. | Paper Planes
Soulja Boy Tell 'Em | Kiss Me thru the Phone
Foo Fighters | The Pretender
Fall Out Boy | Thnks fr th Mmrs
Muse | Supermassive Black Hole
Rascal Flatts | Life is a Highway
Kylie Minogue | Can't Get You Out of My Head
OneRepublic | Apologize | Timbaland
Pitbull | Hotel Room Service
3 Doors Down | Here Without You
Rihanna | Take a Bow
50 Cent | Just A Lil Bit
t.A.T.u. | All The Things She Said
Mike Posner | Cooler Than Me
Mariah Carey | We Belong Together
Cascada | Everytime We Touch
Mary J. Blige | Family Affair
Adele | Chasing Pavements
Britney Spears | Womanizer
Shakira | Whenever, Wherever
Jason Derulo | Whatcha Say
Rihanna | Rude Boy
Beyoncé | Irreplaceable
Kelly Clarkson | Because of You
Beyoncé | Single Ladies (Put a Ring on It)
Taylor Swift | You Belong with Me
Avril Lavigne | Sk8er Boi
Gwen Stefani | Hollaback Girl
The Pussycat Dolls | Don't Cha | Pussycat Dolls
P!nk | So What | Pink
Nelly | Ride wit Me
Akon | Right Now (Na Na Na)
Taio Cruz | Break Your Heart
Justin Timberlake | My Love
Snoop Dogg | Drop It Like It's Hot
Fall Out Boy | Dance, Dance
Justin Timberlake | Cry Me a River
Sean Paul | Get Busy
Jay-Z & Kanye West | Run This Town | Jay-Z
Nickelback | Rockstar
Cassie | Me & U
Foo Fighters | Best of You
Fergie | Big Girls Don't Cry
Pitbull | I Know You Want Me (Calle Ocho)
Beyoncé | If I Were a Boy
Shaggy | Angel
Lady Gaga | Alejandro
Soulja Boy Tell 'Em | Crank That (Soulja Boy)
Alicia Keys | Fallin'
Nelly | Hot in Herre
T.I. | Live Your Life
Daniel Powter | Bad Day
Mario Winans | I Don't Wanna Know
Snoop Dogg | I Wanna Love You | Akon
Ne-Yo | Because of You
Vanessa Carlton | A Thousand Miles
Ciara | 1, 2 Step
Chris Brown | With You
Madonna | Hung Up
U2 | Beautiful Day
Norah Jones | Don't Know Why
Eminem | Sing For The Moment
Amy Winehouse | Rehab
Avril Lavigne | Girlfriend
Eve | Let Me Blow Ya Mind
Rihanna | SOS
R. Kelly | Ignition (Remix)
Evanescence | My Immortal
The Pussycat Dolls | Buttons | Pussycat Dolls
Edward Maya & Vika Jigulina | Stereo Love | Edward Maya
Justin Timberlake | What Goes Around... Comes Around
Akon | Don't Matter
Kid Rock | All Summer Long
Fergie | Glamorous
The Game | How We Do
Fat Joe | What's Luv?
Black Eyed Peas | My Humps | The Black Eyed Peas
Ja Rule | Always on Time
Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade
Eminem | When I'm Gone
Sara Bareilles | Love Song
Black Eyed Peas | Boom Boom Pow | The Black Eyed Peas
Chris Brown | Run It!
Madonna | 4 Minutes
Eminem | Cleanin' Out My Closet
Rihanna | Shut Up And Drive
Ashanti | Foolish
Gwen Stefani | Rich Girl
Nelly Furtado | I'm Like a Bird
Avril Lavigne | I'm with You
The Pussycat Dolls | Stickwitu | Pussycat Dolls
P!nk | Who Knew | Pink
Kanye West | Through The Wire
50 Cent | Ayo Technology
Busta Rhymes and Mariah Carey | I Know What You Want
Usher | U Remind Me
Jennifer Lopez | Jenny from the Block | J.Lo;JLo
Shakira & Beyoncé | Beautiful Liar | Beyoncé and Shakira
Beyoncé | Baby Boy
Kelis | Milkshake
Usher | Love in This Club
Black Eyed Peas | Let's Get It Started
Ne-Yo | Closer
Puddle of Mudd | Blurry
La Roux | Bulletproof
Rihanna | Unfaithful
Kevin Lyttle | Turn Me On
Outkast | Roses
Uncle Kracker | Follow Me
Craig David | 7 Days
Young Money | BedRock
*NSYNC | It's Gonna Be Me
Beyoncé | Sweet Dreams
Enrique Iglesias | Hero
Akon | Beautiful
Usher | U Got It Bad
The Pussycat Dolls | When I Grow Up | Pussycat Dolls
Michael Bublé | Haven't Met You Yet
Coldplay | Speed of Sound
Usher | Burn
Nickelback | Someday
Shakira | She Wolf
D12 | My Band
Ne-Yo | Sexy Love
Metro Station | Shake It
Missy Elliott | Work It
JoJo | Too Little Too Late
Christina Aguilera | Beautiful
Mariah Carey | Touch My Body
Eminem, Dr. Dre and 50 Cent | Crack a Bottle
Akon | Locked Up
Fall Out Boy | This Ain't a Scene, It's an Arms Race
Eminem | Just Lose It
Missy Elliott | Get Ur Freak On
T.I. | Dead and Gone
LeAnn Rimes | Can't Fight the Moonlight
Weezer | Beverly Hills
Beyoncé | Naughty Girl
Avril Lavigne | My Happy Ending
Chamillionaire | Ridin'
Nelly | Country Grammar (Hot Shit)
Bobby V | Slow Down
Ciara | Goodies
P!nk | Get the Party Started | Pink
Lupe Fiasco | Superstar
OutKast | The Way You Move
P!nk | Just Like a Pill | Pink
Jay-Z | '03 Bonnie & Clyde
Fergie | London Bridge
Nina Sky | Move Ya Body
Destiny's Child | Bootylicious
Missy Elliott | Lose Control
Mary J. Blige | Be Without You
Evanescence | Call Me When You're Sober
Timbaland | Carry Out
The Veronicas | Untouched
Christina Aguilera | Fighter
DJ Sammy & Yanou | Heaven | DJ Sammy
Kelly Clarkson | My Life Would Suck Without You
OneRepublic | Stop and Stare
Jennifer Lopez | Get Right | J.Lo;JLo
Kevin Rudolf | Let It Rock
Daniel Bedingfield | If You're Not the One
John Legend | Ordinary People
Kanye West | Love Lockdown
Ashanti | Rock wit U (Awww Baby)
John Mayer | Daughters
Jennifer Lopez | I'm Real (Murder Remix)
Destiny's Child | Lose My Breath
Toni Braxton | He Wasn't Man Enough
Natasha Bedingfield | These Words
P!nk | Sober
Amerie | 1 Thing
Aaliyah | Try Again
JoJo | Leave (Get Out)
Britney Spears | Everytime
Jennifer Lopez | Love Don't Cost a Thing | J.Lo;JLo
Black Eyed Peas | Don't Phunk with My Heart | The Black Eyed Peas
P!nk | U + Ur Hand
Shakira | Underneath Your Clothes
Jay-Z & Mr Hudson | Young Forever | Jay-Z
`,

"10s": `
The Weeknd | Blinding Lights | Weeknd
Ed Sheeran | Shape of You
The Neighbourhood | Sweater Weather
The Weeknd | Starboy | Weeknd;Daft Punk
Drake | One Dance
Post Malone & Swae Lee | Sunflower
Lewis Capaldi | Someone You Loved
Ed Sheeran | Perfect
Imagine Dragons | Believer
Vance Joy | Riptide
The Chainsmokers | Closer | Chainsmokers;Halsey
The Chainsmokers & Coldplay | Something Just Like This | Chainsmokers
Tom Odell | Another Love
James Arthur | Say You Won't Let Go
OneRepublic | Counting Stars
Hozier | Take Me to Church
Ed Sheeran | Photograph
Macklemore & Ryan Lewis | Can't Hold Us
Bruno Mars | Locked Out of Heaven
Tones and I | Dance Monkey
Bruno Mars | Just the Way You Are
Taylor Swift | Cruel Summer
Post Malone | rockstar
The Weeknd & Ariana Grande | Die For You | Weeknd
Shawn Mendes & Camila Cabello | Señorita
Bruno Mars | That's What I Like
Harry Styles | Watermelon Sugar
Justin Bieber | Love Yourself
Dua Lipa | Don't Start Now
Bruno Mars | When I Was Your Man
Post Malone | Circles
Avicii | Wake Me Up
DJ Snake | Let Me Love You | Justin Bieber
Travis Scott | goosebumps
Ed Sheeran | Thinking Out Loud
Juice Wrld | Lucid Dreams
John Legend | All of Me
Kendrick Lamar, SZA | All the Stars | Kendrick Lamar and SZA
Drake | God's Plan
twenty one pilots | Stressed Out | 21 Pilots
Lady Gaga & Bradley Cooper | Shallow
The Weeknd | The Hills
Shawn Mendes | Treat You Better
Imagine Dragons | Demons
Imagine Dragons | Thunder
Justin Bieber | Sorry
French Montana | Unforgettable
Shawn Mendes | There's Nothing Holdin' Me Back
Kendrick Lamar | Humble
Billie Eilish | bad guy
Ariana Grande | 7 rings
Passenger | Let Her Go
Maroon 5 | Payphone
Major Lazer & DJ Snake | Lean On | MØ
Mark Ronson | Uptown Funk | Bruno Mars
Calvin Harris & Dua Lipa | One Kiss
Charlie Puth | We Don't Talk Anymore
One Direction | Night Changes
Adele | Someone Like You
Marshmello & Bastille | Happier
Rihanna | We Found Love
Travis Scott | Sicko Mode
Charlie Puth | Attention
Shawn Mendes | Stitches
Dua Lipa | New Rules
Zara Larsson | Lush Life
Lukas Graham | 7 Years
Taylor Swift | Blank Space
Foster the People | Pumped Up Kicks
Gotye | Somebody That I Used to Know
Sam Smith | I'm Not the Only One
Halsey | Without Me
Lil Uzi Vert | XO Tour Llif3
Sam Smith | Stay with Me
Sam Smith | Too Good at Goodbyes
Billie Eilish | when the party's over
Camila Cabello | Havana
Maroon 5 | Memories
Wiz Khalifa | See You Again | Charlie Puth
Maroon 5 | Maps
Mike Posner | I Took a Pill in Ibiza
Avicii | The Nights
The Weeknd | Call Out My Name
The Chainsmokers | Don't Let Me Down | Chainsmokers
Adele | Rolling in the Deep
Coldplay | A Sky Full of Stars
Alan Walker | Faded
Lana Del Rey | Summertime Sadness
Walk the Moon | Shut Up and Dance
Lewis Capaldi | Before You Go
Harry Styles | Sign of the Times
Arctic Monkeys | Why'd You Only Call Me When You're High?
Adele | Set Fire to the Rain
David Guetta | Titanium
Maroon 5 | Sugar
Lauv | I Like Me Better
Calvin Harris | This Is What You Came For | Rihanna
Drake | Passionfruit
Christina Perri | A Thousand Years
Post Malone | Congratulations
twenty one pilots | Ride
Imagine Dragons | Radioactive
Eminem | Love the Way You Lie
Sia | Chandelier
Travis Scott | Highest in the Room
Justin Bieber | Beauty And A Beat
Måneskin | Beggin' | Maneskin
Ariana Grande | thank u, next
Twenty One Pilots | Heathens
Rihanna | Love On The Brain
Post Malone | Better Now
The Weeknd | I Feel It Coming
OMI | Cheerleader
Pitbull | Give Me Everything
Zayn | Dusk Till Dawn
Maroon 5 | Moves like Jagger
Miguel | Sure Thing
Pitbull & Kesha | Timber
MAGIC! | Rude | Magic
The Weeknd | Can't Feel My Face | Weeknd
Ed Sheeran & Justin Bieber | I Don't Care
The Weeknd | Earned It
Justin Bieber | What Do You Mean?
Ariana Grande | One Last Time
Luis Fonsi & Daddy Yankee | Despacito
5 Seconds of Summer | Youngblood
Zayn and Taylor Swift | I Don't Wanna Live Forever
Dean Lewis | Be Alright
Sia | Cheap Thrills
SAINt JHN | Roses | Saint Jhn;Imanbek
Harry Styles | Adore You
Billie Eilish | Everything I Wanted
Ava Max | Sweet but Psycho
Carly Rae Jepsen | Call Me Maybe
Benny Blanco, Halsey and Khalid | Eastside
Ariana Grande | Into You
Future | Mask Off
Bastille | Pompeii
DNCE | Cake by the Ocean
Justin Timberlake | Can't Stop the Feeling!
P!nk | Just Give Me a Reason | Pink;Nate Ruess
Khalid | Young Dumb & Broke
Katy Perry | Dark Horse
The Script | Hall of Fame
Maroon 5 | Animals
Katy Perry | Last Friday Night (T.G.I.F.)
Bruno Mars | Grenade
Rihanna | Stay
Pitbull & Ne-Yo | Time of Our Lives | Pitbull
Rihanna | Diamonds
Rihanna | Only Girl (In the World)
Coldplay | Hymn for the Weekend
Bruno Mars | 24K Magic
Clean Bandit | Rockabye
Offset & Metro Boomin | Ric Flair Drip | Offset
Lil Tecca | Ransom
One Direction | Story of My Life
One Direction | What Makes You Beautiful
Clean Bandit | Symphony
Panic! At the Disco | High Hopes | Panic at the Disco
Calvin Harris | Outside
Taylor Swift | Shake It Off
Katy Perry | The One That Got Away
Ariana Grande | Side to Side
Capital Cities | Safe and Sound
Coldplay | Paradise
Cardi B, Bad Bunny and J Balvin | I Like It
Clean Bandit | Rather Be
Post Malone | Wow
Major Lazer | Cold Water
Gym Class Heroes | Stereo Hearts | Adam Levine
Chris Brown | Under the Influence
Dua Lipa | IDGAF
Maroon 5 | Girls Like You
Ellie Goulding | Love Me like You Do
J Balvin and Willy William | Mi Gente
Adele | Hello
Pharrell Williams | Happy | Pharrell
Zedd, Maren Morris and Grey | The Middle
Portugal. The Man | Feel It Still | Portugal The Man
Zayn | Pillowtalk
Justin Bieber | Baby
Kygo & Selena Gomez | It Ain't Me
The Lumineers | Ho Hey
Fifth Harmony | Work from Home
Rihanna | Work
Drake | Hotline Bling
Fetty Wap | Trap Queen
Jessie J & Ariana Grande & Nicki Minaj | Bang Bang
Sam Smith & Normani | Dancing with a Stranger
NF | Let You Down
Lil Nas X | Old Town Road
Post Malone | Psycho
Coldplay | Adventure of a Lifetime
fun. | We Are Young | Fun
Calvin Harris | Feel So Close
Adele | When We Were Young
Jonas Brothers | Sucker
Nicki Minaj | Starships
Macklemore & Ryan Lewis | Thrift Shop
Justin Timberlake | Mirrors
Ed Sheeran | Castle on the Hill
George Ezra | Budapest
Arizona Zervas | ROXANNE
Katy Perry | Firework
Ariana Grande | No Tears Left to Cry
Katy Perry | Roar
Tyga | Taste
Gnash | I Hate U, I Love U
Ed Sheeran | Beautiful People
Selena Gomez & Marshmello | Wolves | Selena Gomez
Swedish House Mafia | Don't You Worry Child
J. Cole | MIDDLE CHILD
Lorde | Royals
Drake | In My Feelings
The Chainsmokers | Paris
Logic | 1-800-273-8255
Drake | Nice for What
Usher | DJ Got Us Fallin' in Love
Bruno Mars | The Lazy Song
Eminem | The Monster
Selena Gomez | Lose You to Love Me
Post Malone | Goodbyes
Taio Cruz | Dynamite
Icona Pop | I Love It | Charli XCX
Taylor Swift | Look What You Made Me Do
Zedd and Alessia Cara | Stay
Doja Cat | Say So
R. City | Locked Away
DJ Khaled | I'm the One
Maroon 5 | One More Night
One Direction | Drag Me Down
DJ Khaled | Wild Thoughts
Katy Perry | California Gurls
James Bay | Let It Go
Drake | Hold On, We're Going Home
Rihanna and Kanye West and Paul McCartney | FourFiveSeconds | Rihanna, Kanye West and Paul McCartney
Adele | Send My Love (To Your New Lover)
Miley Cyrus | We Can't Stop
Chris Brown | No Guidance
Mr Probz | Waves (Robin Schulz Remix)
Eminem | Not Afraid
Jack Ü, Skrillex & Diplo | Where Are Ü Now | Jack Ü
Avicii | Hey Brother
DJ Snake | Middle
Drake | Nonstop
Kodak Black | ZEZE
Miley Cyrus | Wrecking Ball
Rae Sremmurd | Black Beatles
Ariana Grande | God Is a Woman
Sia | Elastic Heart
Hailee Steinfeld & Grey | Starving | Hailee Steinfeld
Rihanna | Where Have You Been
Flo Rida | Wild Ones
Desiigner | Panda
Jason Derulo | Swalla
Nico & Vinz | Am I Wrong
One Direction | Perfect
Jason Derulo | Want to Want Me
Jennifer Lopez | On the Floor | J.Lo;JLo
Taylor Swift | All Too Well
Demi Lovato | Sorry Not Sorry
Julia Michaels | Issues
Demi Lovato | Heart Attack
The Weeknd | Heartless
Katy Perry | Teenage Dream
Sean Kingston & Justin Bieber | Eenie Meenie | Sean Kingston
A Great Big World | Say Something | A Great Big World and Christina Aguilera
Camila Cabello | Never Be the Same
Zara Larsson and MNEK | Never Forget You
Shawn Mendes | If I Can't Have You
Nicki Minaj | Super Bass
Drake | Too Good
Demi Lovato | Cool for the Summer
Ed Sheeran | The A Team
Taylor Swift | I Knew You Were Trouble.
Ariana Grande | Problem
Billie Eilish | bury a friend
Pitbull | Feel This Moment
P!nk | Try
Ariana Grande | Break Up with Your Girlfriend, I'm Bored
Taylor Swift | You Need to Calm Down
B.o.B | Airplanes | Bob;Hayley Williams
Liam Payne | Strip That Down
Maroon 5 | Don't Wanna Know
Ariana Grande & Social House | boyfriend | Ariana Grande
Robin Thicke | Blurred Lines
Will.i.am | Scream & Shout
Naughty Boy | La La La
Lizzo | Truth Hurts
Kesha | Die Young | Ke$ha
Fifth Harmony | Worth It
Sam Smith | How Do You Sleep?
Niall Horan | Slow Hands
The Wanted | Glad You Came
Ellie Goulding | Burn
LMFAO | Party Rock Anthem
Train | Drive By
Rachel Platten | Fight Song
Flo Rida | Good Feeling
CKay | Love Nwantiti (Ah Ah Ah)
Drake | Fake Love
David Guetta | Hey Mama
P!nk | What About Us
Shawn Mendes | In My Blood
Bruno Mars | Finesse
Travie McCoy | Billionaire
Far East Movement | Like a G6
Taylor Swift | Me!
Meghan Trainor | All About That Bass
Black Eyed Peas | Just Can't Get Enough | The Black Eyed Peas
Flo Rida | Club Can't Handle Me
Pitbull | International Love
Jason Derulo | Talk Dirty
David Guetta | Where Them Girls At
Wiz Khalifa | Black and Yellow
5 Seconds of Summer | She Looks So Perfect
Rixton | Me And My Broken Heart
Charlie Puth | How Long
Charlie Puth | Marvin Gaye
Kelly Clarkson | Stronger (What Doesn't Kill You)
Alicia Keys | Girl on Fire
Fall Out Boy | My Songs Know What You Did in the Dark (Light Em Up)
Iggy Azalea | Fancy
Katy Perry | Wide Awake
Ed Sheeran | Don't
Jessie J | Price Tag
Flo Rida | G.D.F.R.
Fun | Some Nights
Jessie J | Domino
Lady Gaga | Born This Way
Owl City and Carly Rae Jepsen | Good Time
Drake | Take Care
Lady Gaga | Applause
Justin Bieber | Boyfriend
Taylor Swift | We Are Never Ever Getting Back Together
One Direction | Best Song Ever
Katy Perry | Part of Me
Nelly | Just a Dream
Jason Derulo | Trumpets
Nick Jonas | Jealous
Taylor Swift | Bad Blood
David Guetta | Without You
Jeremih | Don't Tell 'Em
Beyoncé | Drunk in Love
Ariana Grande | breathin
Daft Punk | Get Lucky | Pharrell Williams
Lizzo | Good as Hell
Christina Perri | Jar of Hearts
Iggy Azalea | Black Widow
Psy | Gangnam Style
Olly Murs | Troublemaker
Childish Gambino | This Is America
DJ Khaled | No Brainer
Sam Smith | Lay Me Down
Ed Sheeran | Sing
LMFAO | Sexy and I Know It
Miguel | Adorn
Charli XCX | Boom Clap | Charli xcx
Nicki Minaj | Anaconda
Usher | OMG
Justin Timberlake | Say Something
Katy Perry | E.T.
Ellie Goulding | On My Mind
Meghan Trainor | Lips Are Movin
Jason Derulo | Wiggle
Jason Derulo | In My Head
Selena Gomez | Come & Get It
Kesha | We R Who We R
Martin Garrix | Animals
Michael Jackson | Love Never Felt So Good
Jason Derulo | Ridin' Solo
Taylor Swift | 22
Ella Henderson | Ghost
P!nk | Walk Me Home
Beyoncé | Best Thing I Never Had
Black Eyed Peas | The Time (Dirty Bit) | The Black Eyed Peas
The Script | For the First Time
Zedd | Stay The Night
David Guetta | Turn Me On
Lady Gaga | The Edge of Glory
Dr. Dre | I Need A Doctor
Jay-Z | Holy Grail
Enrique Iglesias | I Like It
Flo Rida | I Cry
OneRepublic | Love Runs Out
Natalie La Rose | Somebody
Sean Paul | I'm Still in Love with You
Macklemore & Ryan Lewis | Same Love
Eminem | Berzerk
will.i.am | #thatPOWER
Bad Meets Evil | Lighters
Aloe Blacc | The Man
Ne-Yo | Let Me Love You (Until You Learn to Love Yourself)
Justin Timberlake | Suit & Tie
Jason Derulo | The Other Side
Nicki Minaj | Pound The Alarm
Enrique Iglesias | Tonight (I'm Lovin' You)
`,

"20s": `
Harry Styles | As It Was
The Kid LAROI & Justin Bieber | STAY | Kid Laroi
Lady Gaga & Bruno Mars | Die With A Smile
Billie Eilish | BIRDS OF A FEATHER
Glass Animals | Heat Waves
Sabrina Carpenter | Espresso
Benson Boone | Beautiful Things
Jung Kook | Seven | Jungkook;Latto
Miley Cyrus | Flowers
Djo | End of Beginning
Olivia Rodrigo | drivers license
SZA | Kill Bill
The Weeknd | Save Your Tears | Weeknd
Elton John & Dua Lipa | Cold Heart
Olivia Rodrigo | good 4 u
Dua Lipa | Levitating
Teddy Swims | Lose Control
ROSÉ & Bruno Mars | APT. | Rose
Adele | Easy On Me
Jimin | Who
David Guetta & Bebe Rexha | I'm Good (Blue)
Doja Cat | Kiss Me More | SZA
Olivia Rodrigo | traitor
Olivia Rodrigo | deja vu
OneRepublic | I Ain't Worried
Justin Bieber | Ghost
Lil Nas X & Jack Harlow | INDUSTRY BABY
Tate McRae | greedy
BTS | Dynamite
Billie Eilish | WILDFLOWER
Chappell Roan | Good Luck, Babe!
sombr | back to friends | Sombr
Doja Cat | Woman
Gigi Perez | Sailor Song
Ed Sheeran | Bad Habits
Alex Warren | Ordinary
24kGoldn | Mood | iann dior
Lil Nas X | MONTERO (Call Me By Your Name)
Ariana Grande | we can't be friends (wait for your love)
Ed Sheeran | Shivers
Hozier | Too Sweet
Powfu | death bed (coffee for your head) | Beabadoobee
Taylor Swift | cardigan
SZA | Snooze
Mitski | My Love Mine All Mine
Imagine Dragons | Enemy | JID
Taylor Swift | Anti-Hero
Justin Bieber | Peaches
Sabrina Carpenter | Please Please Please
Sam Smith & Kim Petras | Unholy
Rema & Selena Gomez | Calm Down
Eminem | Godzilla
Noah Kahan | Stick Season
Billie Eilish | Happier Than Ever
Gracie Abrams | That's So True
Joji | Glimpse of Us
Steve Lacy | Bad Habit
Silk Sonic | Leave the Door Open | Bruno Mars;Anderson .Paak
Metro Boomin, the Weeknd and 21 Savage | Creepin'
DaBaby | Rockstar
Shaboozey | A Bar Song (Tipsy)
Ariana Grande | positions
Lost Frequencies & Calum Scott | Where Are You Now | Lost Frequencies
Olivia Rodrigo | vampire
SZA | Good Days
Taylor Swift | The Fate of Ophelia
The Weeknd and Playboi Carti | Timeless
Billie Eilish | What Was I Made For?
Jvke | Golden Hour
Travis Scott | FE!N
Kendrick Lamar & SZA | luther
Coldplay & BTS | My Universe
Stephen Sanchez | Until I Found You
Artemas | I Like the Way You Kiss Me
Doja Cat | Paint The Town Red
Post Malone | I Had Some Help | Morgan Wallen
Giveon | Heartbreak Anniversary
Sabrina Carpenter | Taste
Cardi B | WAP
Internet Money, Gunna & Don Toliver | Lemonade | Internet Money and Gunna
Dua Lipa | Break My Heart
Lil Mosey | Blueberry Faygo
Future | Life Is Good
Ravyn Lenae | Love Me Not
Doja Cat | Need to Know
BTS | Butter
Tommy Richman | Million Dollar Baby
Ariana Grande & Justin Bieber | Stuck with U
Tyla | Water
Justin Bieber | Intentions
Future | Wait for U
Pop Smoke | What You Know Bout Love
Drake | Jimmy Cooks
Dua Lipa | Dance the Night
RAYE | Escapism. | Raye;070 Shake
Chappell Roan | Pink Pony Club
Lola Young | Messy
Lady Gaga & Ariana Grande | Rain On Me
Myles Smith | Stargazing
Taylor Swift | Fortnight | Post Malone
Drake | Toosie Slide
Lil Nas X | THAT'S WHAT I WANT
Ariana Grande | 34+35
Harry Styles | Late Night Talking
Drake | Laugh Now Cry Later
Polo G | Rapstar
Juice Wrld and Marshmello | Come & Go
Dasha | Austin
Doja Cat and the Weeknd | You Right
Sabrina Carpenter | Manchild
Camila Cabello | Bam Bam
Taylor Swift | willow
Dua Lipa | Houdini
Jack Harlow | Lovin On Me
Sombr | Undressed
The Kid Laroi | Without You
Future, Metro Boomin and Kendrick Lamar | Like That
Billie Eilish | LUNCH
Justin Bieber | DAISIES
Fifty Fifty | Cupid
Billie Eilish | Therefore I Am
Drake and 21 Savage | Rich Flex
Drake | Wants and Needs
Lizzo | About Damn Time
Jack Harlow | First Class
Pop Smoke | Mood Swings
Beyoncé | CUFF IT
Lil Tjay and 6lack | Calling My Phone
Meghan Trainor | Made You Look
Chappell Roan | HOT TO GO!
Kendrick Lamar | TV Off
Tate McRae | Sports car
Teddy Swims | Bad Dreams
Justin Bieber | Yummy
Justin Bieber | Holy
Taylor Swift | Lavender Haze
Chris Brown and Young Thug | Go Crazy
Sabrina Carpenter | Bed Chem
CJ | Whoopty
Lady Gaga | Abracadabra
Taylor Swift | I Can Do It with a Broken Heart
Justin Bieber | Anyone
Dove Cameron | Boyfriend
Saja Boys | Soda Pop | KPop Demon Hunters
Beyoncé | TEXAS HOLD 'EM
Eminem | Houdini
Ariana Grande | yes, and?
Saja Boys | Your Idol | KPop Demon Hunters
THE ANXIETY, WILLOW & Tyler Cole | Meet Me At Our Spot | THE ANXIETY
Drake | Rich Baby Daddy
Adele | Oh My God
Nicki Minaj | Super Freaky Girl
Drake | Nokia
Drake | IDGAF
Doechii | Anxiety
Taylor Swift | Is It Over Now?
Nicki Minaj and Ice Spice | Barbie World
Coi Leray | Players
Tate McRae | Revolving door
Kendrick Lamar | Squabble Up
Lauren Spencer-Smith | Fingers Crossed
Taylor Swift | Down Bad
Beyoncé | BREAK MY SOUL
Ed Sheeran | Eyes Closed
Rihanna | Lift Me Up
Megan Thee Stallion | Savage
Drake | Search & Rescue
Jessica Darrow | Surface Pressure
Chappell Roan | The Subway
HUNTR/X | Golden | Huntrix;KPop Demon Hunters
HUNTR/X | How It's Done | Huntrix;KPop Demon Hunters
Taylor Swift | Opalite
Olivia Dean | Man I Need
Ella Langley | Choosin' Texas
Bruno Mars | I Just Might
Harry Styles | Aperture
Harry Styles | American Girls
Olivia Dean | So Easy (To Fall in Love)
BTS | SWIM
Olivia Rodrigo | drop dead
Tame Impala | Dracula
Drake | Janice STFU
Olivia Rodrigo | the cure
Ariana Grande | hate that i made you love me
Taylor Swift | I Knew It, I Knew You
Olivia Rodrigo | stupid song
Bruno Mars | Risk It All
Shakira & Burna Boy | Dai Dai
`
};

// Exact Apple track for each song, so every clip is the original recording.
const TRACK_IDS = {"Coldplay | Yellow": 1122782283, "Coldplay | Viva la Vida": 1122773680, "The Killers | Mr. Brightside": 1440891171, "Linkin Park | In the End": 590431785, "Eminem | Without Me": 1440821643, "Eminem | Lose Yourself": 1440903439, "Coldplay | The Scientist": 1122776155, "Linkin Park | Numb": 590423552, "Keane | Somewhere Only We Know": 1445287036, "Shakira | Hips Don't Lie": 211761919, "Eminem | Mockingbird": 1425131554, "Gorillaz & De La Soul | Feel Good Inc.": 850571371, "Eminem | The Real Slim Shady": 1815859197, "Jason Mraz | I'm Yours": 277635828, "Rihanna | Umbrella": 1441154437, "Miley Cyrus | Party in the U.S.A.": 1445007713, "Kings of Leon | Sex on Fire": 290303003, "The White Stripes | Seven Nation Army": 1533513537, "Black Eyed Peas | I Gotta Feeling": 1440769310, "50 Cent | In da Club": 1440877090, "Coldplay | Fix You": 1123076826, "Evanescence | Bring Me to Life": 1440666111, "Maroon 5 | She Will Be Loved": 1440851722, "Usher | Yeah!": 1692261346, "Train | Hey, Soul Sister": 1438174456, "Nelly Furtado | Promiscuous": 1471716722, "Kanye West | Heartless": 1441410309, "Beyoncé | Halo": 296016893, "Britney Spears | Toxic": 251948354, "Lady Gaga | Bad Romance": 1444893703, "OutKast | Hey Ya!": 1774799818, "Beyoncé | Crazy in Love": 201274644, "Natasha Bedingfield | Unwritten": 430514893, "Kesha | TiK ToK": 1852627148, "Kanye West | Flashing Lights": 1442846712, "Lady Gaga | Just Dance": 1440818653, "Rihanna | Don't Stop the Music": 1441154439, "Kanye West | Stronger": 1442846328, "Snow Patrol | Chasing Cars": 1442491770, "Nickelback | How You Remind Me": 214475478, "Maroon 5 | This Love": 1445283228, "The Fray | How to Save a Life": 821031488, "Akon | Smack That": 1445288974, "Jay-Z | Empire State of Mind": 1440777015, "Amy Winehouse | Back to Black": 1440856228, "Flo Rida | Low": 275496141, "OutKast | Ms. Jackson": 1536684150, "Alicia Keys | If I Ain't Got You": 255343130, "Hoobastank | The Reason": 1440769862, "Papa Roach | Last Resort": 1492001883, "Coldplay | Clocks": 1122776156, "David Guetta | Sexy Bitch": 693247224, "Timbaland | The Way I Are": 1440748894, "The Script | The Man Who Can't Be Moved": 289076746, "Kanye West | Gold Digger": 1440763833, "Iyaz | Replay": 326644034, "Katy Perry | Hot n Cold": 715891658, "Eminem | Stan": 1440906513, "Mario | Let Me Love You": 257524515, "Justin Timberlake | SexyBack": 400946435, "Linkin Park | What I've Done": 590427450, "Black Eyed Peas | Where Is the Love?": 1615142635, "Sean Paul | Temperature": 316742052, "Red Hot Chili Peppers | Snow (Hey Oh)": 207928116, "The Script | Breakeven": 1055488629, "Avril Lavigne | Complicated": 315025823, "Shaggy | It Wasn't Me": 1440745627, "Eminem | Superman": 1440821832, "Franz Ferdinand | Take Me Out": 315844084, "Gnarls Barkley | Crazy": 1741403966, "Plain White T's | Hey There Delilah": 1443175247, "Adele | Make You Feel My Love": 1545382976, "3 Doors Down | Kryptonite": 1440664900, "Jimmy Eat World | The Middle": 1450030115, "My Chemical Romance | Teenagers": 209388998, "50 Cent | Candy Shop": 1444007299, "Jay-Z & Linkin Park | Numb / Encore": 186088629, "Kings of Leon | Use Somebody": 290303018, "Train | Drops of Jupiter (Tell Me)": 311629509, "Katy Perry | I Kissed a Girl": 715891620, "Bon Jovi | It's My Life": 1440677670, "NSYNC | Bye Bye Bye": 303171368, "Britney Spears | Gimme More": 686780571, "Nelly Furtado | Maneater": 1442463828, "The Killers | Somebody Told Me": 1526194195, "Nelly | Dilemma": 1440735612, "Britney Spears | Oops!... I Did It Again": 267954487, "Alicia Keys | No One": 273048082, "Ne-Yo | So Sick": 1440783502, "Audioslave | Like a Stone": 208294873, "Black Eyed Peas | Meet Me Halfway": 1440769131, "Gorillaz | Clint Eastwood": 884147521, "Arctic Monkeys | Fluorescent Adolescent": 257738153, "Linkin Park | Somewhere I Belong": 590423282, "B.o.B | Nothin' on You": 367377661, "The Game | Hate It or Love It": 1443202892, "Lady Gaga | Telephone": 1440814438, "Wheatus | Teenage Dirtbag": 1640793116, "Sean Kingston | Beautiful Girls": 275820157, "Owl City | Fireflies": 1440783289, "Leona Lewis | Bleeding Love": 345289046, "Taylor Swift | Love Story": 1552791427, "James Blunt | You're Beautiful": 714601673, "Alicia Keys & Usher | My Boo": 386153729, "Rihanna | Disturbia": 1441154571, "Kelly Clarkson | Since U Been Gone": 275765380, "Flo Rida | Right Round": 1826847228, "50 Cent | P.I.M.P.": 1440907563, "Panic! At the Disco | I Write Sins Not Tragedies": 150052680, "Kanye West | All Falls Down": 1437467875, "Estelle | American Boy": 1712041678, "Nelly Furtado | Say It Right": 1442464133, "Kanye West | Homecoming": 1442846735, "Akon | Lonely": 1446019275, "Rihanna | Pon de Replay": 1440867324, "Justin Timberlake | Rock Your Body": 252606598, "Kid Cudi | Day 'n' Nite": 1440745246, "Green Day | Wake Me up When September Ends": 346255097, "blink-182 | I Miss You": 1440846785, "Gwen Stefani | The Sweet Escape": 1455390118, "50 Cent | 21 Questions": 1440907566, "My Chemical Romance | Welcome To The Black Parade": 209388682, "Ne-Yo | Miss Independent": 1445834188, "Red Hot Chili Peppers | Dani California": 945568998, "Jay Sean | Down": 1445002842, "Fall Out Boy | Sugar, We're Goin Down": 1440749374, "Keyshia Cole | Love": 1440667557, "The Calling | Wherever You Will Go": 407593225, "M.I.A. | Paper Planes": 296393515, "Soulja Boy Tell 'Em | Kiss Me thru the Phone": 1443711628, "Foo Fighters | The Pretender": 262743414, "Fall Out Boy | Thnks fr th Mmrs": 1440787031, "Muse | Supermassive Black Hole": 992221997, "Rascal Flatts | Life is a Highway": 1440667482, "Kylie Minogue | Can't Get You Out of My Head": 699920365, "OneRepublic | Apologize": 1440749959, "Pitbull | Hotel Room Service": 327261795, "3 Doors Down | Here Without You": 1440831121, "Rihanna | Take a Bow": 1441154580, "50 Cent | Just A Lil Bit": 1444007317, "t.A.T.u. | All The Things She Said": 1440812361, "Mike Posner | Cooler Than Me": 345373429, "Mariah Carey | We Belong Together": 1476731889, "Cascada | Everytime We Touch": 1836432106, "Mary J. Blige | Family Affair": 1440817530, "Adele | Chasing Pavements": 1545376345, "Britney Spears | Womanizer": 686780576, "Shakira | Whenever, Wherever": 188261029, "Jason Derulo | Whatcha Say": 353554372, "Rihanna | Rude Boy": 1440775739, "Beyoncé | Irreplaceable": 296790943, "Kelly Clarkson | Because of You": 275765399, "Beyoncé | Single Ladies (Put a Ring on It)": 296016899, "Taylor Swift | You Belong with Me": 1440925035, "Avril Lavigne | Sk8er Boi": 315025826, "Gwen Stefani | Hollaback Girl": 1491226770, "The Pussycat Dolls | Don't Cha": 1455130399, "P!nk | So What": 293000132, "Nelly | Ride wit Me": 1445122892, "Akon | Right Now (Na Na Na)": 1440742169, "Taio Cruz | Break Your Heart": 1443147099, "Justin Timberlake | My Love": 303099934, "Snoop Dogg | Drop It Like It's Hot": 1443396469, "Fall Out Boy | Dance, Dance": 1440749367, "Justin Timberlake | Cry Me a River": 252606592, "Sean Paul | Get Busy": 1652782418, "Jay-Z & Kanye West | Run This Town": 1440776346, "Nickelback | Rockstar": 214403648, "Cassie | Me & U": 171980163, "Foo Fighters | Best of You": 300855110, "Fergie | Big Girls Don't Cry": 1440659919, "Pitbull | I Know You Want Me (Calle Ocho)": 327261557, "Beyoncé | If I Were a Boy": 296016892, "Shaggy | Angel": 1440745528, "Lady Gaga | Alejandro": 1476727671, "Soulja Boy Tell 'Em | Crank That (Soulja Boy)": 1443917919, "Alicia Keys | Fallin'": 256937038, "Nelly | Hot in Herre": 1440735156, "T.I. | Live Your Life": 1258981727, "Daniel Powter | Bad Day": 63816165, "Mario Winans | I Don't Wanna Know": 1131822399, "Snoop Dogg | I Wanna Love You": 1443117363, "Ne-Yo | Because of You": 1440757476, "Vanessa Carlton | A Thousand Miles": 1440865959, "Ciara | 1, 2 Step": 1769555440, "Chris Brown | With You": 275904556, "Madonna | Hung Up": 91989806, "U2 | Beautiful Day": 1443100723, "Norah Jones | Don't Know Why": 1625058461, "Eminem | Sing For The Moment": 1440723677, "Amy Winehouse | Rehab": 1422677781, "Avril Lavigne | Girlfriend": 881915809, "Eve | Let Me Blow Ya Mind": 1553998006, "Rihanna | SOS": 1472000531, "R. Kelly | Ignition (Remix)": 283567745, "Evanescence | My Immortal": 1440666126, "The Pussycat Dolls | Buttons": 1440762733, "Edward Maya & Vika Jigulina | Stereo Love": 351996346, "Justin Timberlake | What Goes Around... Comes Around": 1441492959, "Akon | Don't Matter": 1453088780, "Kid Rock | All Summer Long": 586705159, "Fergie | Glamorous": 1619001760, "The Game | How We Do": 1443202897, "Fat Joe | What's Luv?": 298829909, "Black Eyed Peas | My Humps": 1440632597, "Ja Rule | Always on Time": 1371597594, "Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade": 1440845801, "Eminem | When I'm Gone": 1440723757, "Sara Bareilles | Love Song": 258604737, "Black Eyed Peas | Boom Boom Pow": 1443060256, "Chris Brown | Run It!": 202883800, "Madonna | 4 Minutes": 1874757117, "Eminem | Cleanin' Out My Closet": 1440821625, "Rihanna | Shut Up And Drive": 1441154562, "Ashanti | Foolish": 1444119831, "Gwen Stefani | Rich Girl": 1452917847, "Nelly Furtado | I'm Like a Bird": 1440781293, "Avril Lavigne | I'm with You": 315025828, "The Pussycat Dolls | Stickwitu": 1440762527, "P!nk | Who Knew": 298582189, "Kanye West | Through The Wire": 1437467903, "50 Cent | Ayo Technology": 1440877970, "Busta Rhymes and Mariah Carey | I Know What You Want": 304737691, "Usher | U Remind Me": 268532453, "Jennifer Lopez | Jenny from the Block": 190849540, "Shakira & Beyoncé | Beautiful Liar": 261707058, "Beyoncé | Baby Boy": 201274944, "Kelis | Milkshake": 275018555, "Usher | Love in This Club": 281698335, "Black Eyed Peas | Let's Get It Started": 1445664971, "Ne-Yo | Closer": 1445834051, "Puddle of Mudd | Blurry": 1450664888, "La Roux | Bulletproof": 1440747711, "Rihanna | Unfaithful": 1440866698, "Kevin Lyttle | Turn Me On": 6337732, "Outkast | Roses": 1774799821, "Uncle Kracker | Follow Me": 262071200, "Craig David | 7 Days": 1207938311, "Young Money | BedRock": 1443647273, "*NSYNC | It's Gonna Be Me": 303171383, "Beyoncé | Sweet Dreams": 296016902, "Enrique Iglesias | Hero": 1440914005, "Akon | Beautiful": 1440742395, "Usher | U Got It Bad": 268532564, "The Pussycat Dolls | When I Grow Up": 1443787006, "Michael Bublé | Haven't Met You Yet": 668403662, "Coldplay | Speed of Sound": 1123076830, "Usher | Burn": 1765605482, "Nickelback | Someday": 719617253, "Shakira | She Wolf": 1671883148, "D12 | My Band": 1444193152, "Metro Station | Shake It": 263685000, "Missy Elliott | Work It": 1264527, "JoJo | Too Little Too Late": 1816084448, "Christina Aguilera | Beautiful": 279647290, "Mariah Carey | Touch My Body": 989380808, "Eminem, Dr. Dre and 50 Cent | Crack a Bottle": 1443265746, "Akon | Locked Up": 1443624549, "Fall Out Boy | This Ain't a Scene, It's an Arms Race": 1445734014, "Eminem | Just Lose It": 1425131551, "Missy Elliott | Get Ur Freak On": 83134409, "T.I. | Dead and Gone": 1260878669, "LeAnn Rimes | Can't Fight the Moonlight": 79583285, "Weezer | Beverly Hills": 1440865427, "Beyoncé | Naughty Girl": 201274830, "Avril Lavigne | My Happy Ending": 306669121, "Chamillionaire | Ridin'": 1443906056, "Nelly | Country Grammar (Hot Shit)": 1440782551, "Bobby V | Slow Down": 1445128502, "Ciara | Goodies": 302992638, "P!nk | Get the Party Started": 400673114, "Lupe Fiasco | Superstar": 269746765, "OutKast | The Way You Move": 1774798905, "P!nk | Just Like a Pill": 314017601, "Jay-Z | '03 Bonnie & Clyde": 6815858477, "Fergie | London Bridge": 1619001756, "Nina Sky | Move Ya Body": 1444178490, "Destiny's Child | Bootylicious": 193157568, "Missy Elliott | Lose Control": 73240545, "Mary J. Blige | Be Without You": 1488527718, "Evanescence | Call Me When You're Sober": 1440634107, "Timbaland | Carry Out": 1443162415, "The Veronicas | Untouched": 279690802, "Christina Aguilera | Fighter": 279647282, "DJ Sammy & Yanou | Heaven": 17769882, "Kelly Clarkson | My Life Would Suck Without You": 301664592, "OneRepublic | Stop and Stare": 1882090715, "Jennifer Lopez | Get Right": 1448327920, "Kevin Rudolf | Let It Rock": 1445131753, "Daniel Bedingfield | If You're Not the One": 1444134379, "John Legend | Ordinary People": 1779402088, "Kanye West | Love Lockdown": 1441410404, "Ashanti | Rock wit U (Awww Baby)": 1440661039, "John Mayer | Daughters": 199051362, "Jennifer Lopez | I'm Real (Murder Remix)": 193030580, "Destiny's Child | Lose My Breath": 207341067, "Toni Braxton | He Wasn't Man Enough": 273798259, "Natasha Bedingfield | These Words": 430514889, "P!nk | Sober": 399891707, "Amerie | 1 Thing": 153437689, "Aaliyah | Try Again": 1816084755, "JoJo | Leave (Get Out)": 1816085262, "Britney Spears | Everytime": 251948405, "Jennifer Lopez | Love Don't Cost a Thing": 193030496, "Black Eyed Peas | Don't Phunk with My Heart": 1817288727, "P!nk | U + Ur Hand": 258894371, "Shakira | Underneath Your Clothes": 188260898, "Jay-Z & Mr Hudson | Young Forever": 1440932276, "The Weeknd | Blinding Lights": 1499378607, "Ed Sheeran | Shape of You": 1193700767, "The Neighbourhood | Sweater Weather": 635016640, "The Weeknd | Starboy": 1440870375, "Drake | One Dance": 1440841384, "Post Malone & Swae Lee | Sunflower": 1445949267, "Lewis Capaldi | Someone You Loved": 1452619054, "Ed Sheeran | Perfect": 1193700769, "Imagine Dragons | Believer": 1411628233, "Vance Joy | Riptide": 1022164261, "The Chainsmokers | Closer": 1170699703, "The Chainsmokers & Coldplay | Something Just Like This": 1207120448, "Tom Odell | Another Love": 719002824, "James Arthur | Say You Won't Let Go": 1147252591, "OneRepublic | Counting Stars": 1440854619, "Hozier | Take Me to Church": 923529775, "Ed Sheeran | Photograph": 1766261269, "Macklemore & Ryan Lewis | Can't Hold Us": 560148920, "Bruno Mars | Locked Out of Heaven": 573962551, "Tones and I | Dance Monkey": 1475930045, "Bruno Mars | Just the Way You Are": 576655095, "Taylor Swift | Cruel Summer": 1468058171, "Post Malone | rockstar": 1373506170, "The Weeknd & Ariana Grande | Die For You": 1440872304, "Shawn Mendes & Camila Cabello | Señorita": 1468910018, "Bruno Mars | That's What I Like": 1161504043, "Harry Styles | Watermelon Sugar": 1485802967, "Justin Bieber | Love Yourself": 1440826328, "Dua Lipa | Don't Start Now": 1484636829, "Bruno Mars | When I Was Your Man": 573962555, "Post Malone | Circles": 1477880561, "Avicii | Wake Me Up": 1440872929, "DJ Snake | Let Me Love You": 1440867817, "Travis Scott | goosebumps": 1151481750, "Ed Sheeran | Thinking Out Loud": 858518134, "Juice Wrld | Lucid Dreams": 1447177630, "John Legend | All of Me": 1441844542, "Kendrick Lamar, SZA | All the Stars": 1440903307, "Drake | God's Plan": 1406109863, "twenty one pilots | Stressed Out": 974485474, "Lady Gaga & Bradley Cooper | Shallow": 1434371887, "The Weeknd | The Hills": 1440858495, "Shawn Mendes | Treat You Better": 1440904109, "Imagine Dragons | Demons": 1440873339, "Imagine Dragons | Thunder": 1411629089, "Justin Bieber | Sorry": 1440826320, "French Montana | Unforgettable": 1254531914, "Shawn Mendes | There's Nothing Holdin' Me Back": 1440892573, "Kendrick Lamar | Humble": 1440882165, "Billie Eilish | bad guy": 1450695739, "Ariana Grande | 7 rings": 1450334168, "Passenger | Let Her Go": 1623014090, "Maroon 5 | Payphone": 1422675690, "Major Lazer & DJ Snake | Lean On": 1696639397, "Mark Ronson | Uptown Funk": 943946671, "Calvin Harris & Dua Lipa | One Kiss": 1364709436, "Charlie Puth | We Don't Talk Anymore": 1031416185, "One Direction | Night Changes": 1692243270, "Adele | Someone Like You": 1544491998, "Marshmello & Bastille | Happier": 1711849667, "Rihanna | We Found Love": 1440758945, "Travis Scott | Sicko Mode": 1421658123, "Charlie Puth | Attention": 1293229677, "Shawn Mendes | Stitches": 1440843848, "Dua Lipa | New Rules": 6772180432, "Zara Larsson | Lush Life": 1201058113, "Lukas Graham | 7 Years": 1081573445, "Taylor Swift | Blank Space": 1708308993, "Foster the People | Pumped Up Kicks": 435761212, "Gotye | Somebody That I Used to Know": 1440754487, "Sam Smith | I'm Not the Only One": 1440814433, "Halsey | Without Me": 1481418646, "Lil Uzi Vert | XO Tour Llif3": 1274598339, "Sam Smith | Stay with Me": 1440814425, "Sam Smith | Too Good at Goodbyes": 1440900165, "Billie Eilish | when the party's over": 1450695872, "Camila Cabello | Havana": 1321217032, "Maroon 5 | Memories": 1571176664, "Wiz Khalifa | See You Again": 966411602, "Maroon 5 | Maps": 1440842752, "Mike Posner | I Took a Pill in Ibiza": 1442858354, "Avicii | The Nights": 1440829549, "The Weeknd | Call Out My Name": 1363308560, "The Chainsmokers | Don't Let Me Down": 1170699706, "Adele | Rolling in the Deep": 1544491233, "Coldplay | A Sky Full of Stars": 829910927, "Alan Walker | Faded": 1196294581, "Lana Del Rey | Summertime Sadness": 1440812085, "Walk the Moon | Shut Up and Dance": 1473891823, "Lewis Capaldi | Before You Go": 1485384412, "Harry Styles | Sign of the Times": 1226034393, "Arctic Monkeys | Why'd You Only Call Me When You're High?": 663098056, "Adele | Set Fire to the Rain": 1544491988, "David Guetta | Titanium": 693226464, "Maroon 5 | Sugar": 1440829431, "Lauv | I Like Me Better": 1771702162, "Calvin Harris | This Is What You Came For": 1108212668, "Drake | Passionfruit": 1440892167, "Christina Perri | A Thousand Years": 467967170, "Post Malone | Congratulations": 1440901873, "twenty one pilots | Ride": 974485805, "Imagine Dragons | Radioactive": 1440873126, "Eminem | Love the Way You Lie": 1637717485, "Sia | Chandelier": 882945383, "Travis Scott | Highest in the Room": 1482217453, "Justin Bieber | Beauty And A Beat": 1440650961, "Måneskin | Beggin'": 1320781379, "Ariana Grande | thank u, next": 1450334169, "Twenty One Pilots | Heathens": 1125281487, "Rihanna | Love On The Brain": 1443231420, "Post Malone | Better Now": 1373506180, "The Weeknd | I Feel It Coming": 1440872309, "OMI | Cheerleader": 1141509249, "Pitbull | Give Me Everything": 1712042664, "Zayn | Dusk Till Dawn": 1531016360, "Maroon 5 | Moves like Jagger": 1440855997, "Miguel | Sure Thing": 439618071, "Pitbull & Kesha | Timber": 1307027311, "MAGIC! | Rude": 881629103, "The Weeknd | Can't Feel My Face": 1440858500, "Ed Sheeran & Justin Bieber | I Don't Care": 1464549844, "The Weeknd | Earned It": 1440845641, "Justin Bieber | What Do You Mean?": 1440829606, "Ariana Grande | One Last Time": 1440852679, "Luis Fonsi & Daddy Yankee | Despacito": 1447401620, "5 Seconds of Summer | Youngblood": 1369109665, "Zayn and Taylor Swift | I Don't Wanna Live Forever": 1440880860, "Dean Lewis | Be Alright": 1435118880, "Sia | Cheap Thrills": 1055074640, "SAINt JHN | Roses": 1711846986, "Harry Styles | Adore You": 1485802970, "Billie Eilish | Everything I Wanted": 1487502476, "Ava Max | Sweet but Psycho": 1538214889, "Carly Rae Jepsen | Call Me Maybe": 1442997912, "Benny Blanco, Halsey and Khalid | Eastside": 1445073665, "Ariana Grande | Into You": 1440843926, "Future | Mask Off": 1205690479, "Bastille | Pompeii": 715531601, "DNCE | Cake by the Ocean": 1440867865, "Justin Timberlake | Can't Stop the Feeling!": 1154239184, "P!nk | Just Give Me a Reason": 633431899, "Khalid | Young Dumb & Broke": 1200868874, "Katy Perry | Dark Horse": 1440871474, "The Script | Hall of Fame": 563641976, "Maroon 5 | Animals": 1440855552, "Katy Perry | Last Friday Night (T.G.I.F.)": 716192614, "Bruno Mars | Grenade": 576655094, "Rihanna | Stay": 1417177313, "Pitbull & Ne-Yo | Time of Our Lives": 938014004, "Rihanna | Diamonds": 1444321282, "Rihanna | Only Girl (In the World)": 1472173443, "Coldplay | Hymn for the Weekend": 1053934844, "Bruno Mars | 24K Magic": 1161504024, "Clean Bandit | Rockabye": 1418704737, "Offset & Metro Boomin | Ric Flair Drip": 1310807838, "Lil Tecca | Ransom": 1468508848, "One Direction | Story of My Life": 695312371, "One Direction | What Makes You Beautiful": 481400053, "Clean Bandit | Symphony": 1436738923, "Panic! At the Disco | High Hopes": 1361152303, "Calvin Harris | Outside": 922876187, "Taylor Swift | Shake It Off": 1708309002, "Katy Perry | The One That Got Away": 716192666, "Ariana Grande | Side to Side": 1440835649, "Capital Cities | Safe and Sound": 1766005715, "Coldplay | Paradise": 726373148, "Cardi B, Bad Bunny and J Balvin | I Like It": 1368105802, "Clean Bandit | Rather Be": 1027563268, "Post Malone | Wow": 1477887497, "Major Lazer | Cold Water": 1694794945, "Gym Class Heroes | Stereo Hearts": 477341015, "Chris Brown | Under the Influence": 1481598829, "Dua Lipa | IDGAF": 1228742329, "Maroon 5 | Girls Like You": 1381582728, "Ellie Goulding | Love Me like You Do": 1440900325, "J Balvin and Willy William | Mi Gente": 1368816792, "Adele | Hello": 1544494392, "Pharrell Williams | Happy": 652255046, "Zedd, Maren Morris and Grey | The Middle": 1444896450, "Portugal. The Man | Feel It Still": 1229315050, "Zayn | Pillowtalk": 1087165979, "Justin Bieber | Baby": 1472491703, "Kygo & Selena Gomez | It Ain't Me": 1444631771, "The Lumineers | Ho Hey": 1754031516, "Fifth Harmony | Work from Home": 1087454868, "Rihanna | Work": 1443231169, "Drake | Hotline Bling": 1440841730, "Fetty Wap | Trap Queen": 1039540875, "Jessie J & Ariana Grande & Nicki Minaj | Bang Bang": 1444896442, "Sam Smith & Normani | Dancing with a Stranger": 1447334978, "NF | Let You Down": 1440849363, "Lil Nas X | Old Town Road": 1468166468, "Post Malone | Psycho": 1373506178, "Coldplay | Adventure of a Lifetime": 1053934846, "fun. | We Are Young": 486040195, "Calvin Harris | Feel So Close": 450132719, "Adele | When We Were Young": 1544494407, "Jonas Brothers | Sucker": 1461478389, "Nicki Minaj | Starships": 1442868833, "Macklemore & Ryan Lewis | Thrift Shop": 560097550, "Justin Timberlake | Mirrors": 618261614, "Ed Sheeran | Castle on the Hill": 1193701328, "George Ezra | Budapest": 947999963, "Arizona Zervas | ROXANNE": 1496062761, "Katy Perry | Firework": 716192625, "Ariana Grande | No Tears Left to Cry": 1399204228, "Katy Perry | Roar": 1440871461, "Tyga | Taste": 1384304707, "Gnash | I Hate U, I Love U": 1099849073, "Ed Sheeran | Beautiful People": 1464549657, "Selena Gomez & Marshmello | Wolves": 1445055017, "Swedish House Mafia | Don't You Worry Child": 6798736833, "J. Cole | MIDDLE CHILD": 1450406398, "Lorde | Royals": 1594982922, "Drake | In My Feelings": 1406109901, "The Chainsmokers | Paris": 1207120538, "Logic | 1-800-273-8255": 1440896726, "Drake | Nice for What": 1406109896, "Usher | DJ Got Us Fallin' in Love": 923691611, "Bruno Mars | The Lazy Song": 576670462, "Eminem | The Monster": 1440858784, "Selena Gomez | Lose You to Love Me": 1488413376, "Post Malone | Goodbyes": 1477887483, "Taio Cruz | Dynamite": 1442897002, "Icona Pop | I Love It": 821412562, "Taylor Swift | Look What You Made Me Do": 1440934255, "Zedd and Alessia Cara | Stay": 1445043157, "Doja Cat | Say So": 1486465101, "R. City | Locked Away": 1031371163, "DJ Khaled | I'm the One": 1244229849, "Maroon 5 | One More Night": 1440808310, "One Direction | Drag Me Down": 1040195238, "DJ Khaled | Wild Thoughts": 1244229848, "Katy Perry | California Gurls": 716084621, "James Bay | Let It Go": 1440840292, "Drake | Hold On, We're Going Home": 1440829630, "Rihanna and Kanye West and Paul McCartney | FourFiveSeconds": 1445170918, "Adele | Send My Love (To Your New Lover)": 1544494394, "Miley Cyrus | We Can't Stop": 1692243715, "Chris Brown | No Guidance": 1466874531, "Mr Probz | Waves (Robin Schulz Remix)": 1532427385, "Eminem | Not Afraid": 1836036167, "Jack Ü, Skrillex & Diplo | Where Are Ü Now": 971262282, "Avicii | Hey Brother": 1440873108, "DJ Snake | Middle": 1440867457, "Drake | Nonstop": 1406109777, "Kodak Black | ZEZE": 1446115365, "Miley Cyrus | Wrecking Ball": 1635638289, "Rae Sremmurd | Black Beatles": 1440842851, "Ariana Grande | God Is a Woman": 1399203750, "Sia | Elastic Heart": 882945393, "Hailee Steinfeld & Grey | Starving": 1444891951, "Rihanna | Where Have You Been": 1443105353, "Flo Rida | Wild Ones": 613867347, "Desiigner | Panda": 1445306492, "Jason Derulo | Swalla": 1205573619, "Nico & Vinz | Am I Wrong": 1180381817, "One Direction | Perfect": 1040171617, "Jason Derulo | Want to Want Me": 982388023, "Jennifer Lopez | On the Floor": 1440622264, "Demi Lovato | Sorry Not Sorry": 1405206203, "Julia Michaels | Issues": 1440909761, "Demi Lovato | Heart Attack": 1440620921, "The Weeknd | Heartless": 1499386253, "Katy Perry | Teenage Dream": 716192601, "Sean Kingston & Justin Bieber | Eenie Meenie": 359966562, "A Great Big World | Say Something": 735301552, "Camila Cabello | Never Be the Same": 1321217021, "Zara Larsson and MNEK | Never Forget You": 1201058123, "Shawn Mendes | If I Can't Have You": 1474313954, "Nicki Minaj | Super Bass": 1641776318, "Drake | Too Good": 1440843716, "Demi Lovato | Cool for the Summer": 1440647805, "Ed Sheeran | The A Team": 448213995, "Taylor Swift | I Knew You Were Trouble.": 1590368455, "Ariana Grande | Problem": 1440825196, "Billie Eilish | bury a friend": 1450695881, "Pitbull | Feel This Moment": 737053272, "P!nk | Try": 545398138, "Ariana Grande | Break Up with Your Girlfriend, I'm Bored": 1450334170, "Taylor Swift | You Need to Calm Down": 1468058704, "B.o.B | Airplanes": 367377663, "Liam Payne | Strip That Down": 1445039161, "Maroon 5 | Don't Wanna Know": 1396141925, "Ariana Grande & Social House | boyfriend": 1474641583, "Robin Thicke | Blurred Lines": 1443274106, "Will.i.am | Scream & Shout": 1442823431, "Naughty Boy | La La La": 1443257774, "Lizzo | Truth Hurts": 1498195354, "Kesha | Die Young": 582983250, "Fifth Harmony | Worth It": 909767585, "Sam Smith | How Do You Sleep?": 1471596298, "Niall Horan | Slow Hands": 1444891331, "The Wanted | Glad You Came": 1443293784, "Ellie Goulding | Burn": 1440819532, "LMFAO | Party Rock Anthem": 1443158235, "Train | Drive By": 1438078577, "Rachel Platten | Fight Song": 1061182684, "Flo Rida | Good Feeling": 613867349, "CKay | Love Nwantiti (Ah Ah Ah)": 1607991612, "Drake | Fake Love": 1440893093, "David Guetta | Hey Mama": 924568962, "P!nk | What About Us": 1269268841, "Shawn Mendes | In My Blood": 1376115725, "Bruno Mars | Finesse": 1161504065, "Travie McCoy | Billionaire": 374385942, "Far East Movement | Like a G6": 1442933060, "Taylor Swift | Me!": 1468058706, "Meghan Trainor | All About That Bass": 1791794659, "Black Eyed Peas | Just Can't Get Enough": 1440772193, "Flo Rida | Club Can't Handle Me": 378650466, "Pitbull | International Love": 440733046, "Jason Derulo | Talk Dirty": 840493983, "David Guetta | Where Them Girls At": 693224810, "Wiz Khalifa | Black and Yellow": 426754283, "5 Seconds of Summer | She Looks So Perfect": 1440857725, "Rixton | Me And My Broken Heart": 1443257264, "Charlie Puth | How Long": 1293230534, "Charlie Puth | Marvin Gaye": 1031416183, "Kelly Clarkson | Stronger (What Doesn't Kill You)": 464446141, "Alicia Keys | Girl on Fire": 1635638720, "Fall Out Boy | My Songs Know What You Did in the Dark (Light Em Up)": 1440862694, "Iggy Azalea | Fancy": 1443825091, "Katy Perry | Wide Awake": 716085504, "Ed Sheeran | Don't": 1050204624, "Jessie J | Price Tag": 1442259252, "Flo Rida | G.D.F.R.": 971238815, "Fun | Some Nights": 601186061, "Jessie J | Domino": 1440809113, "Lady Gaga | Born This Way": 1440824264, "Owl City and Carly Rae Jepsen | Good Time": 1440807030, "Drake | Take Care": 1440746117, "Lady Gaga | Applause": 1451768063, "Justin Bieber | Boyfriend": 1440650857, "Taylor Swift | We Are Never Ever Getting Back Together": 1440935564, "One Direction | Best Song Ever": 695318301, "Katy Perry | Part of Me": 716085475, "Nelly | Just a Dream": 1445283464, "Jason Derulo | Trumpets": 840381892, "Nick Jonas | Jealous": 1440813456, "Taylor Swift | Bad Blood": 1440936028, "David Guetta | Without You": 693226002, "Jeremih | Don't Tell 'Em": 1442990486, "Beyoncé | Drunk in Love": 939780999, "Ariana Grande | breathin": 1399204219, "Daft Punk | Get Lucky": 617154366, "Lizzo | Good as Hell": 1150159755, "Christina Perri | Jar of Hearts": 511504020, "Iggy Azalea | Black Widow": 1443725207, "Psy | Gangnam Style": 1445144527, "Olly Murs | Troublemaker": 720777920, "Childish Gambino | This Is America": 1379065464, "DJ Khaled | No Brainer": 1418026017, "Sam Smith | Lay Me Down": 1440814843, "Ed Sheeran | Sing": 1050204619, "LMFAO | Sexy and I Know It": 1440636628, "Miguel | Adorn": 561709114, "Charli XCX | Boom Clap": 855630942, "Nicki Minaj | Anaconda": 1651049873, "Usher | OMG": 923691591, "Justin Timberlake | Say Something": 1330760180, "Katy Perry | E.T.": 716192673, "Ellie Goulding | On My Mind": 1443293593, "Meghan Trainor | Lips Are Movin": 929825624, "Jason Derulo | Wiggle": 840381891, "Jason Derulo | In My Head": 353554374, "Selena Gomez | Come & Get It": 1440625020, "Kesha | We R Who We R": 529843559, "Martin Garrix | Animals": 1670593167, "Michael Jackson | Love Never Felt So Good": 850697799, "Jason Derulo | Ridin' Solo": 353554373, "Taylor Swift | 22": 1440935562, "Ella Henderson | Ghost": 942753720, "P!nk | Walk Me Home": 1456444583, "Beyoncé | Best Thing I Never Had": 626205875, "Black Eyed Peas | The Time (Dirty Bit)": 1440771526, "The Script | For the First Time": 563642184, "Zedd | Stay The Night": 1440818685, "David Guetta | Turn Me On": 1440900899, "Lady Gaga | The Edge of Glory": 1440858186, "Dr. Dre | I Need A Doctor": 1445277813, "Jay-Z | Holy Grail": 1443063132, "Enrique Iglesias | I Like It": 1440722205, "Flo Rida | I Cry": 613867353, "OneRepublic | Love Runs Out": 1440854622, "Natalie La Rose | Somebody": 1445017004, "Sean Paul | I'm Still in Love with You": 1228295895, "Macklemore & Ryan Lewis | Same Love": 560097759, "Eminem | Berzerk": 1637717491, "will.i.am | #thatPOWER": 1443180801, "Bad Meets Evil | Lighters": 1637717478, "Aloe Blacc | The Man": 1758438884, "Ne-Yo | Let Me Love You (Until You Learn to Love Yourself)": 1445309387, "Justin Timberlake | Suit & Tie": 1422654146, "Jason Derulo | The Other Side": 840381897, "Nicki Minaj | Pound The Alarm": 1442868836, "Enrique Iglesias | Tonight (I'm Lovin' You)": 1443752176, "Harry Styles | As It Was": 1615585008, "The Kid LAROI & Justin Bieber | STAY": 1574968888, "Lady Gaga & Bruno Mars | Die With A Smile": 1762656732, "Billie Eilish | BIRDS OF A FEATHER": 1739659142, "Glass Animals | Heat Waves": 1508562516, "Sabrina Carpenter | Espresso": 1752214923, "Benson Boone | Beautiful Things": 1724488124, "Jung Kook | Seven": 1709555102, "Miley Cyrus | Flowers": 1674691586, "Djo | End of Beginning": 1632448108, "Olivia Rodrigo | drivers license": 1560735480, "SZA | Kill Bill": 1657869393, "The Weeknd | Save Your Tears": 1499386369, "Elton John & Dua Lipa | Cold Heart": 1652668531, "Olivia Rodrigo | good 4 u": 1582277652, "Dua Lipa | Levitating": 1538003843, "Teddy Swims | Lose Control": 1691699836, "ROSÉ & Bruno Mars | APT.": 1773452221, "Adele | Easy On Me": 1590036021, "Jimin | Who": 1751773093, "David Guetta & Bebe Rexha | I'm Good (Blue)": 1678878113, "Doja Cat | Kiss Me More": 1573475847, "Olivia Rodrigo | traitor": 1560735421, "Olivia Rodrigo | deja vu": 1560735847, "OneRepublic | I Ain't Worried": 1621817894, "Justin Bieber | Ghost": 1556170100, "Lil Nas X & Jack Harlow | INDUSTRY BABY": 1577414972, "Tate McRae | greedy": 1719661252, "BTS | Dynamite": 1596532400, "Billie Eilish | WILDFLOWER": 1739659144, "Chappell Roan | Good Luck, Babe!": 1737497080, "sombr | back to friends": 1786481197, "Doja Cat | Woman": 1573475829, "Gigi Perez | Sailor Song": 1770187510, "Ed Sheeran | Bad Habits": 1571330212, "Alex Warren | Ordinary": 1793663645, "24kGoldn | Mood": 1559066401, "Lil Nas X | MONTERO (Call Me By Your Name)": 1559318719, "Ariana Grande | we can't be friends (wait for your love)": 1725913689, "Ed Sheeran | Shivers": 1581087034, "Hozier | Too Sweet": 1735414394, "Powfu | death bed (coffee for your head)": 1498128769, "Taylor Swift | cardigan": 1524801580, "SZA | Snooze": 1658650499, "Mitski | My Love Mine All Mine": 1697335814, "Imagine Dragons | Enemy": 1591640885, "Taylor Swift | Anti-Hero": 1649434293, "Justin Bieber | Peaches": 1556170101, "Sabrina Carpenter | Please Please Please": 1752214912, "Sam Smith & Kim Petras | Unholy": 1643168566, "Rema & Selena Gomez | Calm Down": 1640501238, "Eminem | Godzilla": 1495269629, "Noah Kahan | Stick Season": 1689825330, "Billie Eilish | Happier Than Ever": 1584262469, "Gracie Abrams | That's So True": 1775581103, "Joji | Glimpse of Us": 1776748883, "Steve Lacy | Bad Habit": 6788150545, "Silk Sonic | Leave the Door Open": 1612867242, "Metro Boomin, the Weeknd and 21 Savage | Creepin'": 1657584259, "DaBaby | Rockstar": 1508028869, "Shaboozey | A Bar Song (Tipsy)": 1749591722, "Ariana Grande | positions": 1537486846, "Lost Frequencies & Calum Scott | Where Are You Now": 1576395046, "Olivia Rodrigo | vampire": 1736995100, "SZA | Good Days": 1658650802, "Taylor Swift | The Fate of Ophelia": 6814997402, "The Weeknd and Playboi Carti | Timeless": 1793702853, "Billie Eilish | What Was I Made For?": 1689239800, "Jvke | Golden Hour": 1640157165, "Travis Scott | FE!N": 1708274783, "Kendrick Lamar & SZA | luther": 1781270323, "Coldplay & BTS | My Universe": 1576350174, "Stephen Sanchez | Until I Found You": 1581702085, "Artemas | I Like the Way You Kiss Me": 1736426869, "Doja Cat | Paint The Town Red": 1699832214, "Post Malone | I Had Some Help": 1744452425, "Giveon | Heartbreak Anniversary": 1499127838, "Sabrina Carpenter | Taste": 1750307079, "Cardi B | WAP": 1822585609, "Internet Money, Gunna & Don Toliver | Lemonade": 1711563495, "Dua Lipa | Break My Heart": 1538004012, "Lil Mosey | Blueberry Faygo": 1497581631, "Future | Life Is Good": 1513389478, "Ravyn Lenae | Love Me Not": 1743852427, "Doja Cat | Need to Know": 1573475837, "BTS | Butter": 1627575769, "Tommy Richman | Million Dollar Baby": 1749616863, "Ariana Grande & Justin Bieber | Stuck with U": 1511562950, "Tyla | Water": 1699082734, "Justin Bieber | Intentions": 1496639586, "Future | Wait for U": 1621611495, "Pop Smoke | What You Know Bout Love": 1874258775, "Drake | Jimmy Cooks": 1630221907, "Dua Lipa | Dance the Night": 1689238922, "RAYE | Escapism.": 1668176885, "Chappell Roan | Pink Pony Club": 1675173768, "Lola Young | Messy": 1746042186, "Taylor Swift | All Too Well": 1440935561, "Lady Gaga & Ariana Grande | Rain On Me": 1500952424, "Myles Smith | Stargazing": 1742275653, "Taylor Swift | Fortnight": 1736268216, "Drake | Toosie Slide": 1511049970, "Lil Nas X | THAT'S WHAT I WANT": 1586182264, "Ariana Grande | 34+35": 1537486672, "Harry Styles | Late Night Talking": 1615585006, "Drake | Laugh Now Cry Later": 1527579780, "Polo G | Rapstar": 1598406499, "Juice Wrld and Marshmello | Come & Go": 1526575738, "Dasha | Austin": 1737331683, "Doja Cat and the Weeknd | You Right": 1577637135, "Sabrina Carpenter | Manchild": 1819377511, "Camila Cabello | Bam Bam": 1610834871, "Taylor Swift | willow": 1544276228, "Dua Lipa | Houdini": 1714502827, "Jack Harlow | Lovin On Me": 1715920580, "Sombr | Undressed": 1802084938, "The Kid Laroi | Without You": 1579787427, "Future, Metro Boomin and Kendrick Lamar | Like That": 1737320971, "Billie Eilish | LUNCH": 1739659140, "Justin Bieber | DAISIES": 1825994649, "Fifty Fifty | Cupid": 1762365714, "Billie Eilish | Therefore I Am": 1564531181, "Drake and 21 Savage | Rich Flex": 1653012565, "Drake | Wants and Needs": 1556658055, "Lizzo | About Damn Time": 1634655870, "Jack Harlow | First Class": 1622624618, "Pop Smoke | Mood Swings": 1874543627, "Beyoncé | CUFF IT": 1636790292, "Lil Tjay and 6lack | Calling My Phone": 1560913728, "Meghan Trainor | Made You Look": 1630437329, "Chappell Roan | HOT TO GO!": 1707413105, "Kendrick Lamar | TV Off": 1781316952, "Tate McRae | Sports car": 1779319634, "Teddy Swims | Bad Dreams": 1771020950, "Justin Bieber | Yummy": 1492502431, "Justin Bieber | Holy": 1531508507, "Taylor Swift | Lavender Haze": 1649435004, "Chris Brown and Young Thug | Go Crazy": 1512304640, "Sabrina Carpenter | Bed Chem": 1750307088, "CJ | Whoopty": 1553761345, "Lady Gaga | Abracadabra": 1837310871, "Taylor Swift | I Can Do It with a Broken Heart": 1742074914, "Justin Bieber | Anyone": 1544839502, "Dove Cameron | Boyfriend": 1718578287, "Saja Boys | Soda Pop": 1820264147, "Beyoncé | TEXAS HOLD 'EM": 1730410734, "Eminem | Houdini": 1749608600, "Ariana Grande | yes, and?": 1724584103, "Saja Boys | Your Idol": 1820264156, "THE ANXIETY, WILLOW & Tyler Cole | Meet Me At Our Spot": 1500096087, "Drake | Rich Baby Daddy": 1710694759, "Adele | Oh My God": 1590036031, "Nicki Minaj | Super Freaky Girl": 1638814933, "Drake | Nokia": 6814098030, "Drake | IDGAF": 1710694571, "Doechii | Anxiety": 1801820501, "Taylor Swift | Is It Over Now?": 1708309430, "Nicki Minaj and Ice Spice | Barbie World": 1689239206, "Coi Leray | Players": 1663560769, "Tate McRae | Revolving door": 1801831569, "Kendrick Lamar | Squabble Up": 1781316884, "Lauren Spencer-Smith | Fingers Crossed": 1710436008, "Taylor Swift | Down Bad": 1742074195, "Beyoncé | BREAK MY SOUL": 1630005854, "Ed Sheeran | Eyes Closed": 1766261548, "Rihanna | Lift Me Up": 1653546259, "Megan Thee Stallion | Savage": 1501739781, "Drake | Search & Rescue": 1681127431, "Jessica Darrow | Surface Pressure": 1594677759, "Ne-Yo | Sexy Love": 1440783519, "Chappell Roan | The Subway": 1831372120, "HUNTR/X | Golden": 1820264150, "HUNTR/X | How It's Done": 1837843443, "Taylor Swift | Opalite": 1838810953, "Olivia Dean | Man I Need": 1817609509, "Ella Langley | Choosin' Texas": 1844932150, "Bruno Mars | I Just Might": 1866732800, "Harry Styles | Aperture": 1870984033, "Harry Styles | American Girls": 1870984036, "Olivia Dean | So Easy (To Fall in Love)": 1817609507, "BTS | SWIM": 1868482073, "Olivia Rodrigo | drop dead": 1889992113, "Tame Impala | Dracula": 1842444457, "Drake | Janice STFU": 6769649576, "Olivia Rodrigo | the cure": 6779097756, "Ariana Grande | hate that i made you love me": 6763656725, "Taylor Swift | I Knew It, I Knew You": 6775527443, "Olivia Rodrigo | stupid song": 6801305319, "Bruno Mars | Risk It All": 1866732797, "Shakira & Burna Boy | Dai Dai": 6768469976};

const DECADE_LABELS = { "00s": "2000s Pop", "10s": "2010s Pop", "20s": "2020s Pop" };

const SONGS = Object.entries(SONG_DATA).flatMap(([decade, block]) =>
  block.trim().split("\n").map(l => l.trim()).filter(Boolean).map((line, i) => {
    const [artist, title, extra] = line.split("|").map(s => s && s.trim());
    return {
      id: `${decade}-${i}`,
      decade,
      artist,
      title,
      aliases: extra ? extra.split(";").map(s => s.trim()).filter(Boolean) : []
    };
  })
);

if (typeof module !== "undefined") module.exports = { SONGS, SONG_DATA, DECADE_LABELS, TRACK_IDS };
