// Song pool. One song per line: Artist | Title | optional extra accepted artist names (separated by ;)
// Multiple main artists are joined with " & " — naming any one of them counts as correct.
// Clips are looked up live from Apple's iTunes catalogue when you play.

const SONG_DATA = {
"00s": `
Britney Spears | Toxic
Britney Spears | Oops!... I Did It Again
Britney Spears | Womanizer
Britney Spears | Circus
Britney Spears | Gimme More
Christina Aguilera | Beautiful
Christina Aguilera | Ain't No Other Man
Christina Aguilera | Come On Over Baby (All I Want Is You)
Beyoncé | Crazy in Love
Beyoncé | Single Ladies (Put a Ring on It)
Beyoncé | Irreplaceable
Beyoncé | Halo
Beyoncé | Baby Boy
Destiny's Child | Survivor
Destiny's Child | Say My Name
Destiny's Child | Bootylicious
Destiny's Child | Independent Women, Pt. 1
Rihanna | Umbrella
Rihanna | SOS
Rihanna | Pon de Replay
Rihanna | Don't Stop the Music
Rihanna | Disturbia
Rihanna | Take a Bow
Lady Gaga | Just Dance
Kylie Minogue | Spinning Around
Taylor Swift | Teardrops on My Guitar
Lady Gaga | Bad Romance
Kelly Clarkson | Since U Been Gone
Kelly Clarkson | Behind These Hazel Eyes
Kelly Clarkson | Because of You
Kelly Clarkson | My Life Would Suck Without You
Avril Lavigne | Complicated
Avril Lavigne | Sk8er Boi
Avril Lavigne | Girlfriend
Avril Lavigne | I'm with You
Justin Timberlake | SexyBack
Justin Timberlake | Cry Me a River
Justin Timberlake | Rock Your Body
Justin Timberlake | What Goes Around... Comes Around
Justin Timberlake | My Love
Nelly Furtado | Promiscuous
Nelly Furtado | Maneater
Nelly Furtado | I'm Like a Bird
Nelly Furtado | Say It Right
Gwen Stefani | Hollaback Girl
Gwen Stefani | The Sweet Escape
Gwen Stefani | Rich Girl
No Doubt | Hey Baby
P!nk | Get the Party Started | Pink
P!nk | So What | Pink
P!nk | Just Like a Pill | Pink
P!nk | Who Knew | Pink
Lifehouse | You and Me
Katy Perry | I Kissed a Girl
Katy Perry | Hot n Cold
Kesha | TiK ToK | Ke$ha
Black Eyed Peas | I Gotta Feeling | The Black Eyed Peas
Black Eyed Peas | Boom Boom Pow | The Black Eyed Peas
Black Eyed Peas | Where Is the Love? | The Black Eyed Peas
Black Eyed Peas | My Humps | The Black Eyed Peas
Michelle Branch | Everywhere
Fergie | Glamorous
Fergie | Big Girls Don't Cry
Fergie | London Bridge
Usher | Yeah!
Usher | Burn
Usher | Confessions Part II
Usher | U Remind Me
Usher | Love in This Club
Alicia Keys | Fallin'
Alicia Keys | No One
Alicia Keys | If I Ain't Got You
Mariah Carey | We Belong Together
Mariah Carey | Touch My Body
Shakira | Hips Don't Lie
Shakira | Whenever, Wherever
Shakira | She Wolf
Leona Lewis | Bleeding Love
Natasha Bedingfield | Unwritten
Natasha Bedingfield | Pocketful of Sunshine
Natasha Bedingfield | These Words
Daniel Powter | Bad Day
James Blunt | You're Beautiful
Jason Mraz | I'm Yours
Maroon 5 | This Love
Maroon 5 | She Will Be Loved
Jesse McCartney | Beautiful Soul
Ashlee Simpson | Pieces of Me
The Pussycat Dolls | Don't Cha | Pussycat Dolls
The Pussycat Dolls | Buttons | Pussycat Dolls
The Pussycat Dolls | When I Grow Up | Pussycat Dolls
Sean Paul | Get Busy
Sean Paul | Temperature
OutKast | Hey Ya!
OutKast | Ms. Jackson
Gnarls Barkley | Crazy
Amy Winehouse | Rehab
Amy Winehouse | Back to Black
Duffy | Mercy
Adele | Chasing Pavements
Kylie Minogue | Can't Get You Out of My Head
Sugababes | Push the Button
Robbie Williams | Rock DJ
Coldplay | Viva la Vida
Coldplay | Clocks
Coldplay | Yellow
Coldplay | Fix You
The Killers | Mr. Brightside | Killers
Kanye West | Gold Digger | Ye
Kanye West | Stronger | Ye
Kanye West | Heartless | Ye
Flo Rida | Low
Flo Rida | Right Round
Chris Brown | Run It!
Chris Brown | With You
Chris Brown | Forever
Ne-Yo | So Sick
Ne-Yo | Miss Independent
Ne-Yo | Closer
Akon | Smack That
Akon | Lonely
Akon | Right Now (Na Na Na)
Sean Kingston | Beautiful Girls
OneRepublic | Apologize | Timbaland
Timbaland | The Way I Are
Nelly | Hot in Herre
Nelly | Dilemma
Ciara | Goodies
Ciara | 1, 2 Step
Jennifer Lopez | Jenny from the Block | J.Lo;JLo
Jennifer Lopez | Get Right | J.Lo;JLo
Jennifer Lopez | Love Don't Cost a Thing | J.Lo;JLo
Miley Cyrus | Party in the U.S.A.
Miley Cyrus | 7 Things
Jonas Brothers | Burnin' Up
Taylor Swift | Love Story
Taylor Swift | You Belong with Me
Owl City | Fireflies
The Fray | How to Save a Life | Fray
The Fray | Over My Head (Cable Car) | Fray
Snow Patrol | Chasing Cars
Vanessa Carlton | A Thousand Miles
Train | Drops of Jupiter (Tell Me)
Train | Hey, Soul Sister
Nickelback | How You Remind Me
50 Cent | In da Club
Eminem | Without Me
Mika | Grace Kelly
Lily Allen | Smile
Corinne Bailey Rae | Put Your Records On
KT Tunstall | Suddenly I See
Keane | Somewhere Only We Know
O-Zone | Dragostea Din Tei
Modjo | Lady (Hear Me Tonight)
Shaggy | It Wasn't Me
Shaggy | Angel
Craig David | 7 Days
Faith Hill | Breathe
David Guetta | When Love Takes Over
Cascada | Everytime We Touch
Jordin Sparks | Tattoo
Colbie Caillat | Bubbly
Sara Bareilles | Love Song
Plain White T's | Hey There Delilah
Fall Out Boy | Sugar, We're Goin Down
Hilary Duff | Come Clean
Paramore | Misery Business
Eminem | Lose Yourself
T.I. | Live Your Life
Soulja Boy Tell 'Em | Crank That (Soulja Boy)
Kings of Leon | Use Somebody
Jay Sean | Down
R. Kelly | Ignition (Remix)
Jay-Z | Empire State of Mind
Jennifer Lopez | Ain't It Funny (Murder Remix)
Jason Derulo | Whatcha Say
Evanescence | Bring Me to Life
Madonna | 4 Minutes
Mary J. Blige | Family Affair
Mario Winans | I Don't Wanna Know
Timbaland | Give It to Me
Iyaz | Replay
Mario | Let Me Love You
Nickelback | Rockstar
Taio Cruz | Break Your Heart
Enrique Iglesias | Hero
P. Diddy | I Need a Girl (Part One)
Jennifer Lopez | All I Have
Chamillionaire | Ridin'
Gym Class Heroes | Cupid's Chokehold
Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade
Snoop Dogg | I Wanna Love You | Akon
Sophie Ellis-Bextor | Murder on the Dancefloor
Beyoncé | Check on It
Estelle | American Boy
Madonna | Music
The Calling | Wherever You Will Go
Kevin Lyttle | Turn Me On
Santana | Smooth
50 Cent | Candy Shop
T.I. | Dead and Gone
Gorillaz & De La Soul | Feel Good Inc. | Gorillaz
Akon | Don't Matter
Jay-Z & Kanye West | Run This Town | Jay-Z
Ashanti | Foolish
Kevin Rudolf | Let It Rock
Beyoncé | If I Were a Boy
Eve | Let Me Blow Ya Mind
Busta Rhymes and Mariah Carey | I Know What You Want
Black Eyed Peas | Don't Phunk with My Heart | The Black Eyed Peas
Sonique | It Feels So Good
City High | What Would You Do?
Dido | Thank You
Christina Milian | Dip It Low
Nelly | Ride wit Me
Fat Joe | What's Luv?
Will Smith | Switch
Rihanna | Unfaithful
Shakira & Beyoncé | Beautiful Liar | Beyoncé and Shakira
T.I. | Whatever You Like
Kid Cudi | Day 'n' Nite
La Roux | Bulletproof
Black Eyed Peas | Meet Me Halfway | The Black Eyed Peas
Mýa | Case of the Ex (Whatcha Gonna Do)
Jennifer Lopez | I'm Real (Murder Remix)
Uncle Kracker | Follow Me
DJ Sammy & Yanou | Heaven | DJ Sammy
Missy Elliott | Work It
Pitbull | I Know You Want Me (Calle Ocho)
Twista, Kanye West & Jamie Foxx | Slow Jamz | Twista
The Pussycat Dolls | Stickwitu | Pussycat Dolls
Craig David | Fill Me In
Red Hot Chili Peppers | Dani California
3 Doors Down | Kryptonite
Dido | White Flag
Fall Out Boy | This Ain't a Scene, It's an Arms Race
Eminem | The Real Slim Shady
Kelis | Milkshake
Daniel Bedingfield | If You're Not the One
Wayne Wonder | No Letting Go
Destiny's Child | Lose My Breath
Toni Braxton | He Wasn't Man Enough
Christina Aguilera | What a Girl Wants
NSYNC | Girlfriend
Nelly | Over and Over
Cassidy | Hotel
NSYNC | Bye Bye Bye
Elvis Presley & JXL | A Little Less Conversation | Elvis vs. JXL
Ja Rule | Always on Time
JoJo | Leave (Get Out)
Faith Hill | The Way You Love Me
Chad Kroeger | Hero
Lumidee | Never Leave You (Uh Oooh, Uh Oooh)
OneRepublic | Stop and Stare
Aaliyah | Try Again
LeAnn Rimes | Can't Fight the Moonlight
Santana | Maria Maria
Destiny's Child | Jumpin', Jumpin'
Crazy Town | Butterfly
Usher | U Got It Bad
Jennifer Lopez | I'm Gonna Be Alright
Daniel Bedingfield | Gotta Get thru This
Jay-Z | '03 Bonnie & Clyde
Ciara | Oh
Cassie | Me & U
OutKast | The Way You Move
Soulja Boy Tell 'Em | Kiss Me thru the Phone
Creed | With Arms Wide Open
Blink-182 | All the Small Things
The Game | Hate It or Love It
Backstreet Boys | Show Me the Meaning of Being Lonely
The Game | How We Do
Hinder | Lips of an Angel
3 Doors Down | Here Without You
Destiny's Child | Soldier
S Club | Never Had a Dream Come True | S Club 7
Alicia Keys & Usher | My Boo | Usher and Alicia Keys
Nickelback | Someday
My Chemical Romance | Welcome To The Black Parade
Lil Jon & The East Side Boyz | Get Low
50 Cent | 21 Questions
Nina Sky | Move Ya Body
Nickelback | Photograph
Missy Elliott | Get Ur Freak On
50 Cent | P.I.M.P.
Missy Elliott | Lose Control
Snoop Dogg | Drop It Like It's Hot
Joe | Stutter
Linkin Park | In the End
Eve | Gangsta Lovin'
Kid Rock | All Summer Long
Metro Station | Shake It
Beyoncé | Sweet Dreams
Michael Bublé | Haven't Met You Yet
Madonna | Don't Tell Me
Puddle of Mudd | Blurry
D12 | My Band
Las Ketchup | The Ketchup Song (Aserejé)
Aaliyah | More Than A Woman
Sean Paul | We Be Burnin'
O-Town | All or Nothing
Evanescence | My Immortal
Madonna | Hung Up
Kanye West | Love Lockdown
DJ Ötzi | Hey Baby (Uhh, Ahh)
BBMak | Back Here
Eminem, Dr. Dre and 50 Cent | Crack a Bottle
Tweet | Oops (Oh My)
Donell Jones | U Know What's Up
Ludacris | Stand Up
Britney Spears | Everytime
Coldplay | Speed of Sound
Mark Ronson | Valerie
Faith Hill | There You'll Be
Akon | Locked Up
Eminem | Cleanin' Out My Closet
Enrique Iglesias | Escape
Ashanti | Rock wit U (Awww Baby)
Atomic Kitten | Whole Again
Take That | Patience
Baha Men | Who Let the Dogs Out
Take That | Rule the World
Sam Sparro | Black and Gold
Kelly Clarkson | Breakaway
Lifehouse | Hanging by a Moment
50 Cent | Ayo Technology
Lupe Fiasco | Superstar
Kaiser Chiefs | Ruby
Dizzee Rascal | Dance wiv Me
The Pussycat Dolls | Beep | Pussycat Dolls
Janet Jackson | All for You | Janet
Murphy Lee | Shake Ya Tailfeather | Nelly, P. Diddy and Murphy Lee
Ne-Yo | Sexy Love
Beyoncé | Déjà Vu
Ne-Yo | Because of You
`,

"10s": `
Adele | Rolling in the Deep
Adele | Someone Like You
Adele | Set Fire to the Rain
Adele | Hello
Bruno Mars | Just the Way You Are
Bruno Mars | Grenade
Bruno Mars | Locked Out of Heaven
Bruno Mars | When I Was Your Man
Bruno Mars | That's What I Like
Bruno Mars | 24K Magic
Mark Ronson | Uptown Funk | Bruno Mars
Katy Perry | California Gurls
Katy Perry | Teenage Dream
Katy Perry | Firework
Katy Perry | E.T.
Katy Perry | Last Friday Night (T.G.I.F.)
Katy Perry | Roar
Katy Perry | Dark Horse
Lady Gaga | Born This Way
Lady Gaga | Telephone
Lady Gaga & Bradley Cooper | Shallow
Rihanna | Only Girl (In the World)
Rihanna | Rude Boy
Rihanna | We Found Love
Rihanna | Diamonds
Rihanna | Work
Taylor Swift | Shake It Off
Taylor Swift | Blank Space
Taylor Swift | Bad Blood
Taylor Swift | We Are Never Ever Getting Back Together
Taylor Swift | I Knew You Were Trouble.
Ed Sheeran | Shape of You
Ed Sheeran | Thinking Out Loud
Ed Sheeran | Perfect
Ed Sheeran | Photograph
Ed Sheeran & Justin Bieber | I Don't Care
Justin Bieber | Baby
Justin Bieber | Sorry
Justin Bieber | Love Yourself
Luis Fonsi & Daddy Yankee | Despacito
Ariana Grande | Problem
Ariana Grande | Side to Side
Ariana Grande | No Tears Left to Cry
Ariana Grande | thank u, next
Ariana Grande | 7 rings
Jessie J & Ariana Grande & Nicki Minaj | Bang Bang
Sia | Chandelier
Pharrell Williams | Happy | Pharrell
Robin Thicke | Blurred Lines
Carly Rae Jepsen | Call Me Maybe
Gotye | Somebody That I Used to Know
fun. | We Are Young | Fun
Maroon 5 | Moves like Jagger
Maroon 5 | Payphone
Maroon 5 | Sugar
Maroon 5 | Girls Like You
LMFAO | Party Rock Anthem
Kesha | Your Love Is My Drug | Ke$ha
Kesha | Die Young | Ke$ha
Lorde | Royals
Imagine Dragons | Radioactive
Imagine Dragons | Believer
OneRepublic | Counting Stars
Avicii | Wake Me Up
Avicii | Hey Brother
Calvin Harris | Summer
Calvin Harris | This Is What You Came For | Rihanna
Calvin Harris & Dua Lipa | One Kiss
The Chainsmokers | Closer | Chainsmokers;Halsey
The Chainsmokers | Don't Let Me Down | Chainsmokers
The Chainsmokers & Coldplay | Something Just Like This | Chainsmokers
Demi Lovato | Cool for the Summer
Sam Smith | Stay with Me
Sam Smith | Too Good at Goodbyes
Sam Smith & Normani | Dancing with a Stranger
Disclosure | Latch | Sam Smith
Hozier | Take Me to Church
Clean Bandit | Rather Be
Charli XCX | Boom Clap | Charli xcx
Icona Pop | I Love It | Charli XCX
Iggy Azalea | Fancy
Nicki Minaj | Super Bass
Nicki Minaj | Anaconda
Miley Cyrus | Wrecking Ball
Miley Cyrus | We Can't Stop
Selena Gomez | Good for You
Selena Gomez | Lose You to Love Me
Kygo & Selena Gomez | It Ain't Me
Demi Lovato | Sorry Not Sorry
Shawn Mendes | Stitches
Shawn Mendes | Treat You Better
Shawn Mendes & Camila Cabello | Señorita
Camila Cabello | Havana
Fifth Harmony | Work from Home
Dua Lipa | New Rules
Billie Eilish | bad guy
Billie Eilish | when the party's over
Lizzo | Truth Hurts
Lil Nas X | Old Town Road
Post Malone | Circles
Post Malone & Swae Lee | Sunflower
Post Malone | rockstar
The Weeknd | Can't Feel My Face | Weeknd
The Weeknd | Starboy | Weeknd;Daft Punk
Daft Punk | Get Lucky | Pharrell Williams
Drake | Hotline Bling
Drake | One Dance
Halsey | Without Me
Marshmello & Bastille | Happier
Lewis Capaldi | Someone You Loved
Tones and I | Dance Monkey
Harry Styles | Sign of the Times
One Direction | What Makes You Beautiful
One Direction | Story of My Life
One Direction | Night Changes
Little Mix | Shout Out to My Ex
Jessie J | Price Tag
Ellie Goulding | Love Me like You Do
Major Lazer & DJ Snake | Lean On | MØ
DJ Snake | Let Me Love You | Justin Bieber
Alan Walker | Faded
Lukas Graham | 7 Years
Mike Posner | I Took a Pill in Ibiza
twenty one pilots | Stressed Out | 21 Pilots
Portugal. The Man | Feel It Still | Portugal The Man
Walk the Moon | Shut Up and Dance
MAGIC! | Rude | Magic
OMI | Cheerleader
Passenger | Let Her Go
Christina Perri | A Thousand Years
Christina Perri | Jar of Hearts
Jason Derulo | Talk Dirty
Pitbull | Give Me Everything
Pitbull & Kesha | Timber
Flo Rida | Whistle
Usher | OMG
Enrique Iglesias | Bailando
Jennifer Lopez | On the Floor | J.Lo;JLo
Taio Cruz | Dynamite
B.o.B | Airplanes | Bob;Hayley Williams
B.o.B | Nothin' on You | Bob;Bruno Mars
Far East Movement | Like a G6
Foster the People | Pumped Up Kicks
Gym Class Heroes | Stereo Hearts | Adam Levine
Macklemore & Ryan Lewis | Thrift Shop
Macklemore & Ryan Lewis | Can't Hold Us
Wiz Khalifa | See You Again | Charlie Puth
Charlie Puth | Attention
Zara Larsson | Lush Life
Anne-Marie | 2002
Ellie Goulding | Burn
Ava Max | Sweet but Psycho
Panic! At the Disco | High Hopes | Panic at the Disco
Bebe Rexha | Meant to Be | Florida Georgia Line
Khalid | Young Dumb & Broke
Jonas Brothers | Sucker
Of Monsters and Men | Little Talks
Bastille | Pompeii
Lana Del Rey | Summertime Sadness
Jess Glynne | Hold My Hand
Beyoncé | Drunk in Love
Beyoncé | Run the World (Girls)
Justin Timberlake | Can't Stop the Feeling!
Justin Timberlake | Mirrors
P!nk | Just Give Me a Reason | Pink;Nate Ruess
Coldplay | Paradise
Coldplay | A Sky Full of Stars
Meghan Trainor | All About That Bass
Justin Bieber | What Do You Mean?
Psy | Gangnam Style
Post Malone | Better Now
John Legend | All of Me
James Arthur | Say You Won't Let Go
Eminem | Love the Way You Lie
Sia | Cheap Thrills
French Montana | Unforgettable
Drake | God's Plan
Benny Blanco, Halsey and Khalid | Eastside
LMFAO | Sexy and I Know It
5 Seconds of Summer | Youngblood
Eminem | The Monster
Nicki Minaj | Starships
Flo Rida | Good Feeling
David Guetta | Titanium
Drake | In My Feelings
Chris Brown | No Guidance
Drake | Nice for What
DJ Khaled | I'm the One
Major Lazer | Cold Water
Drake | Hold On, We're Going Home
Post Malone | Psycho
Flo Rida | Wild Ones
Drake | Too Good
The Wanted | Glad You Came
DJ Khaled | Wild Thoughts
Maroon 5 | One More Night
Post Malone | Wow
Will.i.am | Scream & Shout
Cardi B, Bad Bunny and J Balvin | I Like It
Zayn | Pillowtalk
Ed Sheeran | Castle on the Hill
Billie Eilish | Everything I Wanted
Rihanna | Stay
Jason Derulo | Want to Want Me
Jason Derulo | In My Head
Nico & Vinz | Am I Wrong
Travis Scott | Sicko Mode
Fun | Some Nights
Bruno Mars | The Lazy Song
Sam Smith | I'm Not the Only One
The Weeknd | Earned It
Baauer | Harlem Shake
Rachel Platten | Fight Song
Maroon 5 | Memories
Rae Sremmurd | Black Beatles
Black Eyed Peas | Just Can't Get Enough | The Black Eyed Peas
Swedish House Mafia | Don't You Worry Child
Jack Ü, Skrillex & Diplo | Where Are Ü Now | Jack Ü
Ariana Grande | Break Up with Your Girlfriend, I'm Bored
Black Eyed Peas | The Time (Dirty Bit) | The Black Eyed Peas
Miguel | Sure Thing
Kendrick Lamar, SZA | All the Stars | Kendrick Lamar and SZA
Flo Rida | Club Can't Handle Me
DNCE | Cake by the Ocean
Shawn Mendes | There's Nothing Holdin' Me Back
Juice Wrld | Lucid Dreams
Jessie J | Domino
Rihanna and Kanye West and Paul McCartney | FourFiveSeconds | Rihanna, Kanye West and Paul McCartney
Travie McCoy | Billionaire
Liam Payne | Strip That Down
Enrique Iglesias | I Like It
Usher | DJ Got Us Fallin' in Love
Bruno Mars | Finesse
Ed Sheeran | Beautiful People
Jason Derulo | Ridin' Solo
Meghan Trainor | Lips Are Movin
The Weeknd | The Hills
The Lumineers | Ho Hey
Kesha | We R Who We R
Katy Perry | Part of Me
Taylor Swift | Look What You Made Me Do
Nelly | Just a Dream
Alex Clare | Too Close
Tyga | Taste
Mike Posner | Cooler Than Me
A Great Big World | Say Something | A Great Big World and Christina Aguilera
Eminem | Not Afraid
Iggy Azalea | Black Widow
Ed Sheeran | Sing
Zedd, Maren Morris and Grey | The Middle
Train | Drive By
Justin Bieber | Boyfriend
R. City | Locked Away
Kendrick Lamar | Humble
Maroon 5 | Maps
Fifth Harmony | Worth It
Justin Timberlake | Suit & Tie
Nick Jonas | Jealous
Rihanna | Where Have You Been
Enrique Iglesias | Tonight (I'm Lovin' You)
Calvin Harris | Feel So Close
Calvin Harris | Sweet Nothing
Imagine Dragons | Thunder
Kelly Clarkson | Stronger (What Doesn't Kill You)
Fetty Wap | Trap Queen
Fetty Wap | 679
Desiigner | Panda
Wiz Khalifa | Black and Yellow
Ed Sheeran | The A Team
David Guetta | Without You
Aloe Blacc | The Man
Flo Rida | G.D.F.R.
Cardi B | Bodak Yellow
Chris Brown | Don't Wake Me Up
Naughty Boy | La La La
Zayn and Taylor Swift | I Don't Wanna Live Forever
The Chainsmokers | Paris
Natalie La Rose | Somebody
Travis Scott | Highest in the Room
Diddy – Dirty Money & Skylar Grey | Coming Home | Diddy – Dirty Money
Lil Tecca | Ransom
Lady Gaga | Applause
George Ezra | Shotgun
Adele | Send My Love (To Your New Lover)
Zara Larsson and MNEK | Never Forget You
Maroon 5 | Don't Wanna Know
Camila Cabello | Never Be the Same
Lady Gaga | The Edge of Glory
Tinie Tempah | Written in the Stars
Ne-Yo | Let Me Love You (Until You Learn to Love Yourself)
NF | Let You Down
Taylor Swift | Me!
Pitbull | Feel This Moment
Imagine Dragons | Demons
J Balvin and Willy William | Mi Gente
Owl City and Carly Rae Jepsen | Good Time
Jeremih | Don't Tell 'Em
Post Malone | Goodbyes
Katy Perry | Wide Awake
Jason Derulo | Trumpets
Martin Garrix | Animals
Zedd and Alessia Cara | Stay
Calum Scott | Dancing On My Own
Khalid | Talk
Ella Henderson | Ghost
Drake | Passionfruit
Jay-Z | Holy Grail
Olly Murs | Troublemaker
Charlie Puth | Marvin Gaye
Mr Probz | Waves (Robin Schulz Remix)
Lizzo | Good as Hell
Calvin Harris, Rag'n'Bone Man | Giant | Calvin Harris & Rag'n'Bone Man
Timbaland | Carry Out
Flo Rida | I Cry
Lady Gaga | Alejandro
Clean Bandit | Symphony
Calvin Harris, Sam Smith | Promises | Calvin Harris & Sam Smith
Phillip Phillips | Home
Demi Lovato | Heart Attack
Gnash | I Hate U, I Love U
Logic | 1-800-273-8255
Twenty One Pilots | Heathens
Silentó | Watch Me
Taylor Swift | You Need to Calm Down
Rag'n'Bone Man | Human
Edward Maya & Vika Jigulina | Stereo Love | Edward Maya
Usher | Scream
Jason Derulo | The Other Side
Young Money | BedRock
Macklemore & Ryan Lewis | Same Love
One Direction | Drag Me Down
George Ezra | Budapest
Rudimental | Feel the Love
Rudimental | These Days
Calvin Harris | I Need Your Love
Calvin Harris, Disciples | How Deep Is Your Love | Calvin Harris and Disciples
David Guetta | Hey Mama
Lewis Capaldi | Hold Me While You Wait
Fall Out Boy | My Songs Know What You Did in the Dark (Light Em Up)
Niall Horan | Slow Hands
Ariana Grande | God Is a Woman
David Guetta | Turn Me On
Alicia Keys | Girl on Fire
The Script | Hall of Fame
Ariana Grande | One Last Time
`,

"20s": `
The Weeknd | Blinding Lights | Weeknd
The Weeknd | Save Your Tears | Weeknd
The Weeknd | In Your Eyes | Weeknd
The Weeknd & Ariana Grande | Die For You | Weeknd
Dua Lipa | Don't Start Now
Dua Lipa | Levitating
Dua Lipa | Physical
Dua Lipa | Dance the Night
Dua Lipa | Houdini
Dua Lipa | Training Season
Elton John & Dua Lipa | Cold Heart
Harry Styles | Watermelon Sugar
Harry Styles | Adore You
Harry Styles | As It Was
Harry Styles | Late Night Talking
Olivia Rodrigo | drivers license
Olivia Rodrigo | good 4 u
Olivia Rodrigo | deja vu
Olivia Rodrigo | traitor
Olivia Rodrigo | vampire
Olivia Rodrigo | bad idea right?
Olivia Rodrigo | get him back!
Doja Cat | Say So
Doja Cat | Kiss Me More | SZA
Doja Cat | Woman
Doja Cat | Need to Know
Doja Cat | Paint The Town Red
SZA | Kill Bill
SZA | Snooze
SZA | Saturn
Taylor Swift | Anti-Hero
Taylor Swift | cardigan
Taylor Swift | willow
Taylor Swift | Lavender Haze
Taylor Swift | Karma
Taylor Swift | Fortnight | Post Malone
Taylor Swift | Is It Over Now?
Taylor Swift | The Fate of Ophelia
Miley Cyrus | Flowers
Miley Cyrus | Midnight Sky
Sabrina Carpenter | Espresso
Sabrina Carpenter | Please Please Please
Sabrina Carpenter | Taste
Sabrina Carpenter | Feather
Sabrina Carpenter | Manchild
Chappell Roan | Good Luck, Babe!
Chappell Roan | Pink Pony Club
Chappell Roan | HOT TO GO!
Billie Eilish | BIRDS OF A FEATHER
Billie Eilish | What Was I Made For?
Billie Eilish | Happier Than Ever
Billie Eilish | LUNCH
Billie Eilish | Therefore I Am
Billie Eilish | No Time To Die
Billie Eilish | WILDFLOWER
Lady Gaga & Bruno Mars | Die With A Smile
Lady Gaga | Abracadabra
Lady Gaga | Hold My Hand
Lady Gaga & Ariana Grande | Rain On Me
ROSÉ & Bruno Mars | APT. | Rose
Silk Sonic | Leave the Door Open | Bruno Mars;Anderson .Paak
Ariana Grande | positions
Ariana Grande | 34+35
Ariana Grande | yes, and?
Ariana Grande | we can't be friends (wait for your love)
Ariana Grande & Justin Bieber | Stuck with U
Justin Bieber | Peaches
Justin Bieber | Ghost
Justin Bieber | DAISIES
The Kid LAROI & Justin Bieber | STAY | Kid Laroi
Glass Animals | Heat Waves
Lil Nas X | MONTERO (Call Me By Your Name)
Lil Nas X & Jack Harlow | INDUSTRY BABY
Jack Harlow | First Class
Måneskin | Beggin' | Maneskin
Ed Sheeran | Bad Habits
Ed Sheeran | Shivers
Ed Sheeran | Eyes Closed
Jack Harlow | Lovin On Me
Kali Uchis | telepatía
Lil Nas X | THAT'S WHAT I WANT
Adele | Easy On Me
Lizzo | About Damn Time
Steve Lacy | Bad Habit
Beyoncé | BREAK MY SOUL
Beyoncé | CUFF IT
Beyoncé | TEXAS HOLD 'EM
Rihanna | Lift Me Up
Sam Smith & Kim Petras | Unholy
Benson Boone | Beautiful Things
Benson Boone | Mystical Magical
Tate McRae | greedy
Tate McRae | Sports car
Teddy Swims | Lose Control
Hozier | Too Sweet
Noah Kahan | Stick Season
Shaboozey | A Bar Song (Tipsy)
Post Malone | I Had Some Help | Morgan Wallen
Morgan Wallen | Last Night
Gracie Abrams | That's So True
Alex Warren | Ordinary
KATSEYE | Gabriela | Katseye
HUNTR/X | Golden | Huntrix;EJAE;Audrey Nuna;Rei Ami
Lola Young | Messy
Djo | End of Beginning
Coldplay & BTS | My Universe
BTS | Dynamite
BTS | Butter
Jung Kook | Seven | Jungkook;Latto
Charli xcx | 360 | Charli XCX
Charli xcx | Apple | Charli XCX
Tyla | Water
RAYE | Escapism. | Raye;070 Shake
Calvin Harris & Ellie Goulding | Miracle
David Guetta & Bebe Rexha | I'm Good (Blue)
Ava Max | Kings & Queens
24kGoldn | Mood | iann dior
Jason Derulo & Jawsh 685 | Savage Love
SAINt JHN | Roses | Saint Jhn;Imanbek
Surf Mesa | ily (i love you baby) | Emilee
Joel Corry | Head & Heart | MNEK
Conan Gray | Heather
Lewis Capaldi | Before You Go
Imagine Dragons | Enemy | JID
Imagine Dragons | Bones
Rema & Selena Gomez | Calm Down
Peggy Gou | (It Goes Like) Nanana
Sabrina Carpenter | Bed Chem
Loreen | Tattoo
Myles Smith | Stargazing
Ravyn Lenae | Love Me Not
Addison Rae | Diet Pepsi
sombr | back to friends | Sombr
Doechii | Anxiety
Kenya Grace | Strangers
Mitski | My Love Mine All Mine
Troye Sivan | Rush
Victoria Monét | On My Mama
Meghan Trainor | Made You Look
Joji | Glimpse of Us
OneRepublic | I Ain't Worried
Nicki Minaj | Super Freaky Girl
Latto | Big Energy
Powfu | death bed (coffee for your head) | Beabadoobee
Arizona Zervas | ROXANNE
Tiësto | The Business | Tiesto
Masked Wolf | Astronaut In The Ocean
Nicky Youre & dazy | Sunroof
Doja Cat | Agora Hills
Taylor Swift | Cruel Summer
Post Malone | Chemical
Kendrick Lamar & SZA | luther
Sabrina Carpenter | Nonsense
Dua Lipa | Love Again
The Weeknd | Take My Breath | Weeknd
Harry Styles | Music for a Sushi Restaurant
Olivia Rodrigo | happier
Doja Cat | Streets
Billie Eilish | CHIHIRO
Gracie Abrams | I Love You, I'm Sorry
Benson Boone | Slow It Down
Teddy Swims | The Door
Tate McRae | exes
Miley Cyrus | Used To Be Young
Sabrina Carpenter | Tears
Coldplay | Higher Power
Kendrick Lamar | Not Like Us
DaBaby | Rockstar
Gigi Perez | Sailor Song
Drake | Laugh Now Cry Later
The Kid Laroi | Without You
Encanto Cast | We Don't Talk About Bruno | Encanto
Cardi B | WAP
Drake | Toosie Slide
Luke Combs | Fast Car
Future | Life Is Good
Megan Thee Stallion | Savage
Dasha | Austin
Tommy Richman | Million Dollar Baby
Morgan Wallen | You Proof
Eminem | Houdini
Chris Brown and Young Thug | Go Crazy
Metro Boomin, the Weeknd and 21 Savage | Creepin'
Morgan Wallen | Thinkin' Bout Me
Drake and 21 Savage | Rich Flex
Gabby Barrett | I Hope
Zach Bryan | Something in the Orange
Pop Smoke | What You Know Bout Love
Lil Tjay and 6lack | Calling My Phone
Internet Money, Gunna & Don Toliver | Lemonade | Internet Money and Gunna
Walker Hayes | Fancy Like
Polo G | Rapstar
Future | Wait for U
Sombr | Undressed
Chris Brown | Under the Influence
Saja Boys | Your Idol | KPop Demon Hunters
Doja Cat and the Weeknd | You Right
CKay | Love Nwantiti (Ah Ah Ah)
David Kushner | Daylight
Jessica Darrow | Surface Pressure
Saja Boys | Soda Pop | KPop Demon Hunters
Kendrick Lamar | Squabble Up
Justin Bieber | Intentions
Future, Metro Boomin and Kendrick Lamar | Like That
Eminem | Godzilla
Kendrick Lamar | TV Off
Sam Fender | Rein Me In | Sam Fender & Olivia Dean
Olivia Dean | Man I Need
Raye | Where Is My Husband!
CJ | Whoopty
Zach Bryan | I Remember Everything
Justin Bieber | Holy
Nicki Minaj and Ice Spice | Barbie World
The Weeknd and Playboi Carti | Timeless
Bailey Zimmerman | Rock and a Hard Place
Nathan Evans, 220 Kid & Billen Ted | Wellerman
Artemas | I Like the Way You Kiss Me
Fireboy DML & Ed Sheeran | Peru
Cat Burns | Go
Cassö & Raye | Prada | Cassö, Raye & D-Block Europe
Olivia Dean | So Easy (To Fall in Love)
Little Mix | Sweet Melody
Dave & Tems | Raindance | Dave
Dua Lipa | Break My Heart
Coi Leray | Players
LF System | Afraid to Feel
Lewis Capaldi | Forget Me
Teddy Swims | Bad Dreams
Jelly Roll | Need a Favor
Sam Fender | Seventeen Going Under
Dave | Starlight
George Ezra | Green Green Grass
MK | Dior
Taylor Swift | Opalite
Anne-Marie, KSI & Digital Farm Animals | Don't Play
Post Malone | I Like You (A Happier Song)
Drake | Search & Rescue
Venbee & Goddard. | Messy in Heaven
Calvin Harris & Clementine Douglas | Blessings | Calvin Harris
Jimin | Who
Headie One | Ain't It Different | Headie One, AJ Tracey & Stormzy
Riton & Nightcrawlers | Friday
Belters Only & Jazzy | Make Me Feel Good | Belters Only
Pop Smoke | Mood Swings
Drake | Jimmy Cooks
Galantis, David Guetta & Little Mix | Heartbreak Anthem
Lost Frequencies & Calum Scott | Where Are You Now | Lost Frequencies
Eliza Rose & Interplanetary Criminal | B.O.T.A. (Baddest of Them All)
Chase & Status & Stormzy | Backbone
Aitch & Ashanti | Baby | Aitch
Libianca | People
Justin Bieber | Anyone
Maren Morris & Hozier | The Bones | Maren Morris
Kodak Black | Super Gremlin
Lewis Capaldi | Wish You the Best
Camila Cabello | Bam Bam
Adele | Oh My God
Lil Mosey | Blueberry Faygo
Morgan Wallen | Love Somebody
PinkPantheress | Boy's a Liar
Jack Harlow | Whats Poppin
Taylor Swift | I Can Do It with a Broken Heart
Morgan Wallen | I'm the Problem
Joel Corry, Raye & David Guetta | Bed
Ed Sheeran | Azizam
Justin Bieber | Yummy
Fifty Fifty | Cupid
Drake | Nokia
Drake | First Person Shooter
Olivia Dean | Nice to Each Other
Nathan Dawe | Lighter
Charli XCX | Guess
Luke Combs | Forever After All
Morgan Wallen | Just in Case
Morgan Wallen | Wasted on You
Joel Corry | Lonely
Switch Disco & Ella Henderson | React
Lauren Spencer-Smith | Fingers Crossed
Toosii | Favorite Song
SZA | 30 for 30 | SZA and Kendrick Lamar
Becky Hill & David Guetta | Remember
Bl3ss & CamrinWatsin | Kisses
WizTheMc & Bees & Honey | Show Me Love
Chappell Roan | The Subway
Trevor Daniel | Falling
Drake | What's Next
Morgan Wallen | Thought You Should Know
Leon Thomas | Mutt
Dan + Shay and Justin Bieber | 10,000 Hours
Wizkid | Essence
Kane Brown and Katelyn Brown | Thank God
Shaboozey | Good News
KSI | Holiday
Mustard and Roddy Ricch | Ballin'
Lil Durk | All My Life
Topic & A7S | Breaking Me
Jonasu | Black Magic
Luude | Down Under
Jazzy | Giving Me
Chase & Status & Bou | Baddadan
Lewis Capaldi | Survive
Taylor Swift | Elizabeth Taylor
Blackbear | Hot Girl Bummer
Cardi B | Up
Eslabon Armado and Peso Pluma | Ella Baila Sola
Morgan Wallen & Tate McRae | What I Want | Morgan Wallen
Ed Sheeran | Afterglow
Joel Corry & Jax Jones | Out Out
Drake | Girls Want Girls
Chrystal | The Days
Lil Uzi Vert | Just Wanna Rock
DaBaby | Bop
Saweetie | Best Friend
Morgan Wallen | Cowgirls
Meduza | Paradise
David Guetta, Becky Hill & Ella Henderson | Crazy What Love Can Do
Sonny Fodera, Jazzy & D.O.D. | Somedays
Ed Sheeran | Sapphire
Post Malone and the Weeknd | One Right Now
Zach Bryan | Pink Skies
Giveon | Heartbreak Anniversary
A1 x J1 | Latest Trends
Sam Ryder | Space Man
Becky Hill & Chase & Status | Disconnect
Chappell Roan | The Giver
Em Beihold | Numb Little Bug
The Marías | No One Noticed
BigXthaPlug & Bailey Zimmerman | All the Way | BigXthaPlug
The Beatles | Now and Then
Central Cee & Lil Baby | Band4Band
Morgan Wallen | Chasin' You
Maroon 5 & Megan Thee Stallion | Beautiful Mistakes | Maroon 5
Cody Johnson | 'Til You Can't
Marshmello and Kane Brown | Miles on It
Dove Cameron | Boyfriend
Drake | Rich Baby Daddy
Koe Wetzel & Jessie Murph | High Road | Koe Wetzel
Riley Green | Worst Way
Paul Woolford, Diplo & Kareen Lomax | Looking for Me | Paul Woolford & Diplo
KSI | Not Over Yet
Fred Again & Obongjayar | Adore U | Fred Again
Lil Baby | On Me
Luke Combs | The Kind of Love We Make
Luke Combs | Love You Anyway
Jessie Murph and Jelly Roll | Wild Ones
Camila Cabello | My Oh My
Drake | Wants and Needs
Morgan Wallen | One Thing at a Time
Luke Combs | Ain't No Love in Oklahoma
Benson Boone | Sorry I'm Here for Someone Else
ArrDee | Flowers (Say My Name)
Jax Jones & MNEK | Where Did You Go?
Lewis Capaldi | Pointless
Juice Wrld and Marshmello | Come & Go
Metro Boomin, Future and Chris Brown | Superhero (Heroes & Villains)
¥$, Kanye West & Ty Dolla $ign | Carnival | ¥$
Pooh Shiesty | Back in Blood
Drake | IDGAF
Regard & Raye | Secrets
Shane Codd | Get Out My Head
Ed Sheeran | Overpass Graffiti
Burna Boy | Last Last
James Hype & Miggy Dela Rosa | Ferrari
Taylor Swift | Now That We Don't Talk (Taylor's Version)
Yng Lvcas | La Bebé | Yng Lvcas and Peso Pluma
GloRilla and Megan Thee Stallion | Wanna Be
Morgan Wallen | I Got Better
Bruno Mars, Anderson .Paak & Silk Sonic | Smokin out the Window | Silk Sonic
Jvke | Golden Hour
Tyler, the Creator | Sticky
Aitch & AJ Tracey | Rain
KSI | Really Love
Elton John & Britney Spears | Hold Me Closer
Skye Newman | Family Matters
Lil Baby | Woah
Moneybagg Yo | Wockesha
Bailey Zimmerman | Religiously
21 Savage | Redrum
Lil Baby | In a Minute
Drake and 21 Savage | Spin Bout U
Ed Sheeran | The Joker and the Queen
Lizzy McAlpine | Ceilings
GloRilla | Yeah Glo!
HUNTR/X | How It's Done | Huntrix: Ejae, Audrey Nuna and Rei Ami;Huntrix;KPop Demon Hunters
Drake | Knife Talk
KSI | Patience
Tom Grennan | Little Bit of Love
Drake | Fair Trade
Rudimental, Charlotte Plank & Vibe Chemistry | Dancing Is Healing | Rudimental
YG Marley | Praise Jah in the Moonlight
Cole Swindell | She Had Me at Heads Carolina
Jordan Davis | Next Thing You Know
Drake | Way 2 Sexy
Gunna and Future | Pushin P
GloRilla and Sexyy Red | Whatchu Kno About Me
Jordan Davis | Buy Dirt | Jordan Davis and Luke Bryan
Grupo Frontera and Bad Bunny | Un x100to
Flo Milli | Never Lose Me
Taylor Swift | Down Bad
Sam Barber | Indigo
SwitchOTR | Coming for You
Stormzy | Firebabe
Taylor Swift | The Tortured Poets Department
Alex Warren | Eternity
Lewis Capaldi | Something in the Heavens
Black Eyed Peas and J Balvin | Ritmo (Bad Boys for Life)
SZA | I Hate U
Stephen Sanchez | Until I Found You
Morgan Wallen | Lies Lies Lies
SZA | Shirt
The Weeknd | Cry for Me
Adele | I Drink Wine
Taylor Swift | Snow on the Beach
Calvin Harris & Sam Smith | Desire
KSI | Thick of It
Myles Smith | Nice to Meet You
Blake Shelton | Nobody but You | Blake Shelton and Gwen Stefani
SZA | Good Days
Jessie Murph | Blue Strips
Chris Stapleton | Starting Over
Jelly Roll | I Am Not Okay
Kendrick Lamar | Peekaboo
Sombr | 12 to 12
Megan Thee Stallion | Body
Bailey Zimmerman | Fall in Love
Hardy & Lainey Wilson | Wait in the Truck | Hardy
Sexyy Red | Get It Sexyy
DJ Khaled | Greece | DJ Khaled & Drake
Jesy Nelson | Boyz
Mimi Webb | House on Fire
`
};

// Exact Apple track for each song (checked against the catalogue), so every clip is the original recording.
const TRACK_IDS = {"Britney Spears | Toxic": 251948354, "Britney Spears | Oops!... I Did It Again": 267954487, "Britney Spears | Womanizer": 686780576, "Britney Spears | Circus": 686780578, "Britney Spears | Gimme More": 686780571, "Christina Aguilera | Beautiful": 279647290, "Christina Aguilera | Ain't No Other Man": 402298905, "Christina Aguilera | Come On Over Baby (All I Want Is You)": 294372544, "Beyoncé | Crazy in Love": 201274644, "Beyoncé | Single Ladies (Put a Ring on It)": 296016899, "Beyoncé | Irreplaceable": 296790943, "Beyoncé | Halo": 296016893, "Beyoncé | Baby Boy": 201274944, "Destiny's Child | Survivor": 1301495399, "Destiny's Child | Say My Name": 266809802, "Destiny's Child | Bootylicious": 193157568, "Destiny's Child | Independent Women, Pt. 1": 1301495398, "Rihanna | Umbrella": 1441154437, "Rihanna | SOS": 1472000531, "Rihanna | Pon de Replay": 1440867324, "Rihanna | Don't Stop the Music": 1441154439, "Rihanna | Disturbia": 1441154571, "Rihanna | Take a Bow": 1441154580, "Lady Gaga | Just Dance": 1440818653, "Kylie Minogue | Spinning Around": 697117365, "Taylor Swift | Teardrops on My Guitar": 1860454450, "Lady Gaga | Bad Romance": 1444893703, "Kelly Clarkson | Since U Been Gone": 275765380, "Kelly Clarkson | Behind These Hazel Eyes": 275765392, "Kelly Clarkson | Because of You": 275765399, "Kelly Clarkson | My Life Would Suck Without You": 301664592, "Avril Lavigne | Complicated": 315025823, "Avril Lavigne | Sk8er Boi": 315025826, "Avril Lavigne | Girlfriend": 881915809, "Avril Lavigne | I'm with You": 315025828, "Justin Timberlake | SexyBack": 400946435, "Justin Timberlake | Cry Me a River": 252606592, "Justin Timberlake | Rock Your Body": 252606598, "Justin Timberlake | What Goes Around... Comes Around": 1441492959, "Justin Timberlake | My Love": 303099934, "Nelly Furtado | Promiscuous": 1471716722, "Nelly Furtado | Maneater": 1442463828, "Nelly Furtado | I'm Like a Bird": 1440781293, "Nelly Furtado | Say It Right": 1442464133, "Gwen Stefani | Hollaback Girl": 1491226770, "Gwen Stefani | The Sweet Escape": 1455390118, "Gwen Stefani | Rich Girl": 1452917847, "No Doubt | Hey Baby": 1450443195, "P!nk | Get the Party Started": 400673114, "P!nk | So What": 293000132, "P!nk | Just Like a Pill": 314017601, "P!nk | Who Knew": 298582189, "Lifehouse | You and Me": 1443833976, "Katy Perry | I Kissed a Girl": 715891620, "Katy Perry | Hot n Cold": 715891658, "Kesha | TiK ToK": 1852627148, "Black Eyed Peas | I Gotta Feeling": 1440769310, "Black Eyed Peas | Boom Boom Pow": 1443060256, "Black Eyed Peas | Where Is the Love?": 1615142635, "Black Eyed Peas | My Humps": 1440632597, "Michelle Branch | Everywhere": 301027748, "Fergie | Glamorous": 1619001760, "Fergie | Big Girls Don't Cry": 1440659919, "Fergie | London Bridge": 1619001756, "Usher | Yeah!": 1692261346, "Usher | Burn": 1765605482, "Usher | Confessions Part II": 1765605477, "Usher | U Remind Me": 268532453, "Usher | Love in This Club": 281698335, "Alicia Keys | Fallin'": 256937038, "Alicia Keys | No One": 273048082, "Alicia Keys | If I Ain't Got You": 255343130, "Mariah Carey | We Belong Together": 1476731889, "Mariah Carey | Touch My Body": 989380808, "Shakira | Hips Don't Lie": 211761919, "Shakira | Whenever, Wherever": 188261029, "Shakira | She Wolf": 1671883148, "Leona Lewis | Bleeding Love": 345289046, "Natasha Bedingfield | Unwritten": 430514893, "Natasha Bedingfield | Pocketful of Sunshine": 1429194116, "Natasha Bedingfield | These Words": 430514889, "Daniel Powter | Bad Day": 63816165, "James Blunt | You're Beautiful": 714601673, "Jason Mraz | I'm Yours": 277635828, "Maroon 5 | This Love": 1445283228, "Maroon 5 | She Will Be Loved": 1440851722, "Jesse McCartney | Beautiful Soul": 1440915195, "Ashlee Simpson | Pieces of Me": 1762087882, "The Pussycat Dolls | Don't Cha": 1455130399, "The Pussycat Dolls | Buttons": 1440762733, "The Pussycat Dolls | When I Grow Up": 1443787006, "Sean Paul | Get Busy": 1652782418, "Sean Paul | Temperature": 316742052, "OutKast | Hey Ya!": 1774799818, "OutKast | Ms. Jackson": 1536684150, "Gnarls Barkley | Crazy": 1741403966, "Amy Winehouse | Rehab": 1422677781, "Amy Winehouse | Back to Black": 1440856228, "Duffy | Mercy": 1440746199, "Adele | Chasing Pavements": 1545376345, "Kylie Minogue | Can't Get You Out of My Head": 699920365, "Sugababes | Push the Button": 1440861646, "Robbie Williams | Rock DJ": 724201567, "Coldplay | Viva la Vida": 1122773680, "Coldplay | Clocks": 1122776156, "Coldplay | Yellow": 1122782283, "Coldplay | Fix You": 1123076826, "The Killers | Mr. Brightside": 1440891171, "Kanye West | Gold Digger": 1440763833, "Kanye West | Stronger": 1442846328, "Kanye West | Heartless": 1441410309, "Flo Rida | Low": 275496141, "Flo Rida | Right Round": 1826847228, "Chris Brown | Run It!": 202883800, "Chris Brown | With You": 275904556, "Chris Brown | Forever": 282988494, "Ne-Yo | So Sick": 1440783502, "Ne-Yo | Miss Independent": 1445834188, "Ne-Yo | Closer": 1445834051, "Akon | Smack That": 1445288974, "Akon | Lonely": 1446019275, "Akon | Right Now (Na Na Na)": 1440742169, "Sean Kingston | Beautiful Girls": 275820157, "OneRepublic | Apologize": 1440749959, "Timbaland | The Way I Are": 1440748894, "Nelly | Hot in Herre": 1440735156, "Nelly | Dilemma": 1440735612, "Ciara | Goodies": 302992638, "Ciara | 1, 2 Step": 1769555440, "Jennifer Lopez | Jenny from the Block": 190849540, "Jennifer Lopez | Get Right": 1448327920, "Jennifer Lopez | Love Don't Cost a Thing": 193030496, "Miley Cyrus | Party in the U.S.A.": 1445007713, "Miley Cyrus | 7 Things": 1440776305, "Jonas Brothers | Burnin' Up": 1672144743, "Taylor Swift | Love Story": 1552791427, "Taylor Swift | You Belong with Me": 1440925035, "Owl City | Fireflies": 1440783289, "The Fray | How to Save a Life": 821031488, "The Fray | Over My Head (Cable Car)": 385629699, "Snow Patrol | Chasing Cars": 1442491770, "Vanessa Carlton | A Thousand Miles": 1440865959, "Train | Drops of Jupiter (Tell Me)": 311629509, "Train | Hey, Soul Sister": 1438174456, "Nickelback | How You Remind Me": 214475478, "50 Cent | In da Club": 1440877090, "Eminem | Without Me": 1440821643, "Mika | Grace Kelly": 1440763492, "Lily Allen | Smile": 726141811, "Corinne Bailey Rae | Put Your Records On": 724884380, "KT Tunstall | Suddenly I See": 724693357, "Keane | Somewhere Only We Know": 1445287036, "O-Zone | Dragostea Din Tei": 1719518261, "Modjo | Lady (Hear Me Tonight)": 692624266, "Shaggy | It Wasn't Me": 1440745627, "Shaggy | Angel": 1440745528, "Craig David | 7 Days": 1207938311, "Faith Hill | Breathe": 321981540, "David Guetta | When Love Takes Over": 693255018, "Cascada | Everytime We Touch": 1836432106, "Jordin Sparks | Tattoo": 263988099, "Colbie Caillat | Bubbly": 1440745635, "Sara Bareilles | Love Song": 258604737, "Plain White T's | Hey There Delilah": 1443175247, "Fall Out Boy | Sugar, We're Goin Down": 1440749374, "Hilary Duff | Come Clean": 1440622583, "Paramore | Misery Business": 260164266, "Adele | Rolling in the Deep": 1544491233, "Adele | Someone Like You": 1544491998, "Adele | Set Fire to the Rain": 1544491988, "Adele | Hello": 1544494392, "Bruno Mars | Just the Way You Are": 576655095, "Bruno Mars | Grenade": 576655094, "Bruno Mars | Locked Out of Heaven": 573962551, "Bruno Mars | When I Was Your Man": 573962555, "Bruno Mars | That's What I Like": 1161504043, "Bruno Mars | 24K Magic": 1161504024, "Mark Ronson | Uptown Funk": 943946671, "Katy Perry | California Gurls": 716084621, "Katy Perry | Teenage Dream": 716192601, "Katy Perry | Firework": 716192625, "Katy Perry | E.T.": 716192673, "Katy Perry | Last Friday Night (T.G.I.F.)": 716192614, "Katy Perry | Roar": 1440871461, "Katy Perry | Dark Horse": 1440871474, "Lady Gaga | Born This Way": 1440824264, "Lady Gaga | Telephone": 1440814438, "Lady Gaga & Bradley Cooper | Shallow": 1434371887, "Rihanna | Only Girl (In the World)": 1472173443, "Rihanna | Rude Boy": 1440775739, "Rihanna | We Found Love": 1440758945, "Rihanna | Diamonds": 1444321282, "Rihanna | Work": 1443231169, "Taylor Swift | Shake It Off": 1708309002, "Taylor Swift | Blank Space": 1708308993, "Taylor Swift | Bad Blood": 1440936028, "Taylor Swift | We Are Never Ever Getting Back Together": 1440935564, "Taylor Swift | I Knew You Were Trouble.": 1590368455, "Ed Sheeran | Shape of You": 1193700767, "Ed Sheeran | Thinking Out Loud": 858518134, "Ed Sheeran | Perfect": 1193700769, "Ed Sheeran | Photograph": 1766261269, "Ed Sheeran & Justin Bieber | I Don't Care": 1464549844, "Justin Bieber | Baby": 1472491703, "Justin Bieber | Sorry": 1440826320, "Justin Bieber | Love Yourself": 1440826328, "Luis Fonsi & Daddy Yankee | Despacito": 1447401620, "Ariana Grande | Problem": 1440825196, "Ariana Grande | Side to Side": 1440835649, "Ariana Grande | No Tears Left to Cry": 1399204228, "Ariana Grande | thank u, next": 1450334169, "Ariana Grande | 7 rings": 1450334168, "Jessie J & Ariana Grande & Nicki Minaj | Bang Bang": 1444896442, "Sia | Chandelier": 882945383, "Pharrell Williams | Happy": 652255046, "Robin Thicke | Blurred Lines": 1443274106, "Carly Rae Jepsen | Call Me Maybe": 1442997912, "Gotye | Somebody That I Used to Know": 1440754487, "fun. | We Are Young": 486040195, "Maroon 5 | Moves like Jagger": 1440855997, "Maroon 5 | Payphone": 1422675690, "Maroon 5 | Sugar": 1440829431, "Maroon 5 | Girls Like You": 1381582728, "LMFAO | Party Rock Anthem": 1443158235, "Kesha | Your Love Is My Drug": 374879155, "Kesha | Die Young": 582983250, "Lorde | Royals": 1594982922, "Imagine Dragons | Radioactive": 1440873126, "Imagine Dragons | Believer": 1411628233, "OneRepublic | Counting Stars": 1440854619, "Avicii | Wake Me Up": 1440872929, "Avicii | Hey Brother": 1440873108, "Calvin Harris | Summer": 922876189, "Calvin Harris | This Is What You Came For": 1108212668, "Calvin Harris & Dua Lipa | One Kiss": 1364709436, "The Chainsmokers | Closer": 1170699703, "The Chainsmokers | Don't Let Me Down": 1170699706, "The Chainsmokers & Coldplay | Something Just Like This": 1207120448, "Demi Lovato | Cool for the Summer": 1440647805, "Sam Smith | Stay with Me": 1440814425, "Sam Smith | Too Good at Goodbyes": 1440900165, "Sam Smith & Normani | Dancing with a Stranger": 1447334978, "Disclosure | Latch": 1471695442, "Hozier | Take Me to Church": 923529775, "Clean Bandit | Rather Be": 1027563268, "Charli XCX | Boom Clap": 855630942, "Icona Pop | I Love It": 821412562, "Iggy Azalea | Fancy": 1443825091, "Nicki Minaj | Super Bass": 1641776318, "Nicki Minaj | Anaconda": 1651049873, "Miley Cyrus | Wrecking Ball": 1635638289, "Miley Cyrus | We Can't Stop": 1692243715, "Selena Gomez | Good for You": 1440836811, "Selena Gomez | Lose You to Love Me": 1488413376, "Kygo & Selena Gomez | It Ain't Me": 1444631771, "Demi Lovato | Sorry Not Sorry": 1405206203, "Shawn Mendes | Stitches": 1440843848, "Shawn Mendes | Treat You Better": 1440904109, "Shawn Mendes & Camila Cabello | Señorita": 1468910018, "Camila Cabello | Havana": 1321217032, "Fifth Harmony | Work from Home": 1087454868, "Dua Lipa | New Rules": 6772180432, "Billie Eilish | bad guy": 1450695739, "Billie Eilish | when the party's over": 1450695872, "Lizzo | Truth Hurts": 1498195354, "Lil Nas X | Old Town Road": 1468166468, "Post Malone | Circles": 1477880561, "Post Malone & Swae Lee | Sunflower": 1445949267, "Post Malone | rockstar": 1373506170, "The Weeknd | Can't Feel My Face": 1440858500, "The Weeknd | Starboy": 1440870375, "Daft Punk | Get Lucky": 617154366, "Drake | Hotline Bling": 1440841730, "Drake | One Dance": 1440841384, "Halsey | Without Me": 1481418646, "Marshmello & Bastille | Happier": 1711849667, "Lewis Capaldi | Someone You Loved": 1452619054, "Tones and I | Dance Monkey": 1475930045, "Harry Styles | Sign of the Times": 1226034393, "One Direction | What Makes You Beautiful": 481400053, "One Direction | Story of My Life": 695312371, "One Direction | Night Changes": 1692243270, "Little Mix | Shout Out to My Ex": 1594440592, "Jessie J | Price Tag": 1442259252, "Ellie Goulding | Love Me like You Do": 1440900325, "Major Lazer & DJ Snake | Lean On": 1696639397, "DJ Snake | Let Me Love You": 1440867817, "Alan Walker | Faded": 1196294581, "Lukas Graham | 7 Years": 1081573445, "Mike Posner | I Took a Pill in Ibiza": 1442858354, "twenty one pilots | Stressed Out": 974485474, "Portugal. The Man | Feel It Still": 1229315050, "Walk the Moon | Shut Up and Dance": 1473891823, "MAGIC! | Rude": 881629103, "OMI | Cheerleader": 1141509249, "Passenger | Let Her Go": 1623014090, "Christina Perri | A Thousand Years": 467967170, "Christina Perri | Jar of Hearts": 511504020, "Jason Derulo | Talk Dirty": 840493983, "Pitbull | Give Me Everything": 1712042664, "Pitbull & Kesha | Timber": 1307027311, "Flo Rida | Whistle": 613867346, "Usher | OMG": 923691591, "Enrique Iglesias | Bailando": 1443206483, "Jennifer Lopez | On the Floor": 1440622264, "Taio Cruz | Dynamite": 1442897002, "B.o.B | Airplanes": 367377663, "B.o.B | Nothin' on You": 367377661, "Far East Movement | Like a G6": 1442933060, "Foster the People | Pumped Up Kicks": 435761212, "Gym Class Heroes | Stereo Hearts": 477341015, "Macklemore & Ryan Lewis | Thrift Shop": 560097550, "Macklemore & Ryan Lewis | Can't Hold Us": 560148920, "Wiz Khalifa | See You Again": 966411602, "Charlie Puth | Attention": 1293229677, "Zara Larsson | Lush Life": 1201058113, "Anne-Marie | 2002": 1351247438, "Ellie Goulding | Burn": 1440819532, "Ava Max | Sweet but Psycho": 1538214889, "Panic! At the Disco | High Hopes": 1361152303, "Bebe Rexha | Meant to Be": 1251713725, "Khalid | Young Dumb & Broke": 1200868874, "Jonas Brothers | Sucker": 1461478389, "Of Monsters and Men | Little Talks": 1440809330, "Bastille | Pompeii": 715531601, "Lana Del Rey | Summertime Sadness": 1440812085, "Jess Glynne | Hold My Hand": 1027563253, "Beyoncé | Drunk in Love": 939780999, "Beyoncé | Run the World (Girls)": 626205874, "Justin Timberlake | Can't Stop the Feeling!": 1154239184, "Justin Timberlake | Mirrors": 618261614, "P!nk | Just Give Me a Reason": 633431899, "Coldplay | Paradise": 726373148, "Coldplay | A Sky Full of Stars": 829910927, "The Weeknd | Blinding Lights": 1499378607, "The Weeknd | Save Your Tears": 1499386369, "The Weeknd | In Your Eyes": 1499386363, "The Weeknd & Ariana Grande | Die For You": 1440872304, "Dua Lipa | Don't Start Now": 1484636829, "Dua Lipa | Levitating": 1538003843, "Dua Lipa | Physical": 1538003644, "Dua Lipa | Dance the Night": 1689238922, "Dua Lipa | Houdini": 1714502827, "Dua Lipa | Training Season": 1727526894, "Elton John & Dua Lipa | Cold Heart": 1652668531, "Harry Styles | Watermelon Sugar": 1485802967, "Harry Styles | Adore You": 1485802970, "Harry Styles | As It Was": 1615585008, "Harry Styles | Late Night Talking": 1615585006, "Olivia Rodrigo | drivers license": 1560735480, "Olivia Rodrigo | good 4 u": 1582277652, "Olivia Rodrigo | deja vu": 1560735847, "Olivia Rodrigo | traitor": 1560735421, "Olivia Rodrigo | vampire": 1736995100, "Olivia Rodrigo | bad idea right?": 1736995097, "Olivia Rodrigo | get him back!": 1694768053, "Doja Cat | Say So": 1486465101, "Doja Cat | Kiss Me More": 1573475847, "Doja Cat | Woman": 1573475829, "Doja Cat | Need to Know": 1573475837, "Doja Cat | Paint The Town Red": 1699832214, "SZA | Kill Bill": 1657869393, "SZA | Snooze": 1658650499, "SZA | Saturn": 1732348414, "Taylor Swift | Anti-Hero": 1649434293, "Taylor Swift | cardigan": 1524801580, "Taylor Swift | willow": 1544276228, "Taylor Swift | Lavender Haze": 1649435004, "Taylor Swift | Karma": 1649435543, "Taylor Swift | Fortnight": 1736268216, "Taylor Swift | Is It Over Now?": 1708309430, "Taylor Swift | The Fate of Ophelia": 6814997402, "Miley Cyrus | Flowers": 1674691586, "Miley Cyrus | Midnight Sky": 1536966421, "Sabrina Carpenter | Espresso": 1752214923, "Sabrina Carpenter | Please Please Please": 1752214912, "Sabrina Carpenter | Taste": 1750307079, "Sabrina Carpenter | Feather": 1677892279, "Sabrina Carpenter | Manchild": 1819377511, "Chappell Roan | Good Luck, Babe!": 1737497080, "Chappell Roan | Pink Pony Club": 1675173768, "Chappell Roan | HOT TO GO!": 1707413105, "Billie Eilish | BIRDS OF A FEATHER": 1739659142, "Billie Eilish | What Was I Made For?": 1689239800, "Billie Eilish | Happier Than Ever": 1584262469, "Billie Eilish | LUNCH": 1739659140, "Billie Eilish | Therefore I Am": 1564531181, "Billie Eilish | No Time To Die": 1498647654, "Billie Eilish | WILDFLOWER": 1739659144, "Lady Gaga & Bruno Mars | Die With A Smile": 1762656732, "Lady Gaga | Abracadabra": 1837310871, "Lady Gaga | Hold My Hand": 1621817905, "Lady Gaga & Ariana Grande | Rain On Me": 1500952424, "ROSÉ & Bruno Mars | APT.": 1773452221, "Silk Sonic | Leave the Door Open": 1612867242, "Ariana Grande | positions": 1537486846, "Ariana Grande | 34+35": 1537486672, "Ariana Grande | yes, and?": 1724584103, "Ariana Grande | we can't be friends (wait for your love)": 1725913689, "Ariana Grande & Justin Bieber | Stuck with U": 1511562950, "Justin Bieber | Peaches": 1556170101, "Justin Bieber | Ghost": 1556170100, "Justin Bieber | DAISIES": 1825994649, "The Kid LAROI & Justin Bieber | STAY": 1574968888, "Glass Animals | Heat Waves": 1508562516, "Lil Nas X | MONTERO (Call Me By Your Name)": 1559318719, "Lil Nas X & Jack Harlow | INDUSTRY BABY": 1577414972, "Jack Harlow | First Class": 1622624618, "Måneskin | Beggin'": 1320781379, "Ed Sheeran | Bad Habits": 1571330212, "Ed Sheeran | Shivers": 1581087034, "Ed Sheeran | Eyes Closed": 1766261548, "Jack Harlow | Lovin On Me": 1715920580, "Kali Uchis | telepatía": 1541731262, "Lil Nas X | THAT'S WHAT I WANT": 1586182264, "Adele | Easy On Me": 1590036021, "Lizzo | About Damn Time": 1634655870, "Steve Lacy | Bad Habit": 6788150545, "Beyoncé | BREAK MY SOUL": 1630005854, "Beyoncé | CUFF IT": 1636790292, "Beyoncé | TEXAS HOLD 'EM": 1730410734, "Rihanna | Lift Me Up": 1653546259, "Sam Smith & Kim Petras | Unholy": 1643168566, "Benson Boone | Beautiful Things": 1724488124, "Benson Boone | Mystical Magical": 1807490820, "Tate McRae | greedy": 1719661252, "Tate McRae | Sports car": 1779319634, "Teddy Swims | Lose Control": 1691699836, "Hozier | Too Sweet": 1735414394, "Noah Kahan | Stick Season": 1689825330, "Shaboozey | A Bar Song (Tipsy)": 1749591722, "Post Malone | I Had Some Help": 1744452425, "Morgan Wallen | Last Night": 1818408858, "Gracie Abrams | That's So True": 1775581103, "Alex Warren | Ordinary": 1793663645, "KATSEYE | Gabriela": 1811464273, "HUNTR/X | Golden": 1820264150, "Lola Young | Messy": 1746042186, "Djo | End of Beginning": 1632448108, "Coldplay & BTS | My Universe": 1576350174, "BTS | Dynamite": 1596532400, "BTS | Butter": 1627575769, "Jung Kook | Seven": 1709555102, "Charli xcx | 360": 1762679426, "Charli xcx | Apple": 1739080645, "Tyla | Water": 1699082734, "RAYE | Escapism.": 1668176885, "Calvin Harris & Ellie Goulding | Miracle": 1673798699, "David Guetta & Bebe Rexha | I'm Good (Blue)": 1678878113, "Ava Max | Kings & Queens": 1538214605, "24kGoldn | Mood": 1559066401, "Jason Derulo & Jawsh 685 | Savage Love": 1517698089, "SAINt JHN | Roses": 1711846986, "Surf Mesa | ily (i love you baby)": 1500359571, "Joel Corry | Head & Heart": 1518804165, "Conan Gray | Heather": 1491987867, "Lewis Capaldi | Before You Go": 1485384412, "Imagine Dragons | Enemy": 1591640885, "Imagine Dragons | Bones": 1612321591, "Rema & Selena Gomez | Calm Down": 1640501238, "Peggy Gou | (It Goes Like) Nanana": 1689088958, "Sabrina Carpenter | Bed Chem": 1750307088, "Loreen | Tattoo": 1672056675, "Myles Smith | Stargazing": 1742275653, "Ravyn Lenae | Love Me Not": 1743852427, "Addison Rae | Diet Pepsi": 1760428041, "sombr | back to friends": 1786481197, "Doechii | Anxiety": 1801820501, "Kenya Grace | Strangers": 1704393613, "Mitski | My Love Mine All Mine": 1697335814, "Troye Sivan | Rush": 1704603323, "Victoria Monét | On My Mama": 1690628891, "Meghan Trainor | Made You Look": 1630437329, "Joji | Glimpse of Us": 1776748883, "OneRepublic | I Ain't Worried": 1621817894, "Nicki Minaj | Super Freaky Girl": 1638814933, "Latto | Big Energy": 1585435197, "Powfu | death bed (coffee for your head)": 1498128769, "Arizona Zervas | ROXANNE": 1496062761, "Tiësto | The Business": 1532019310, "Masked Wolf | Astronaut In The Ocean": 1568740033, "Nicky Youre & dazy | Sunroof": 1689433299, "Doja Cat | Agora Hills": 1739451025, "Taylor Swift | Cruel Summer": 1468058171, "Post Malone | Chemical": 1681605996, "Kendrick Lamar & SZA | luther": 1781270323, "Sabrina Carpenter | Nonsense": 1631586891, "Dua Lipa | Love Again": 1538004007, "The Weeknd | Take My Breath": 1603164239, "Harry Styles | Music for a Sushi Restaurant": 1615585001, "Olivia Rodrigo | happier": 1560735859, "Doja Cat | Streets": 1486465107, "Billie Eilish | CHIHIRO": 1739659141, "Gracie Abrams | I Love You, I'm Sorry": 1770861177, "Benson Boone | Slow It Down": 1736051616, "Teddy Swims | The Door": 1691699849, "Tate McRae | exes": 1716470299, "Miley Cyrus | Used To Be Young": 1702906876, "Sabrina Carpenter | Tears": 1819861157, "Coldplay | Higher Power": 1564099110, "Kendrick Lamar | Not Like Us": 1781353929, "DaBaby | Rockstar": 1508028869, "Gigi Perez | Sailor Song": 1770187510, "Drake | Laugh Now Cry Later": 1527579780, "The Kid Laroi | Without You": 1579787427, "Encanto Cast | We Don't Talk About Bruno": 1594677760, "Cardi B | WAP": 1822585609, "Drake | Toosie Slide": 1511049970, "Luke Combs | Fast Car": 1666738585, "Future | Life Is Good": 1513389478, "Megan Thee Stallion | Savage": 1501739781, "Dasha | Austin": 1737331683, "Tommy Richman | Million Dollar Baby": 1749616863, "Morgan Wallen | You Proof": 1818425037, "Eminem | Houdini": 1749608600, "Chris Brown and Young Thug | Go Crazy": 1512304640, "Metro Boomin, the Weeknd and 21 Savage | Creepin'": 1657584259, "Morgan Wallen | Thinkin' Bout Me": 1818425528, "Drake and 21 Savage | Rich Flex": 1653012565, "Gabby Barrett | I Hope": 1593026184, "Zach Bryan | Something in the Orange": 1620419734, "Pop Smoke | What You Know Bout Love": 1874258775, "Lil Tjay and 6lack | Calling My Phone": 1560913728, "Internet Money, Gunna & Don Toliver | Lemonade": 1711563495, "Walker Hayes | Fancy Like": 1595928077, "Polo G | Rapstar": 1598406499, "Future | Wait for U": 1621611495, "Sombr | Undressed": 1802084938, "Chris Brown | Under the Influence": 1481598829, "Saja Boys | Your Idol": 1820264156, "Doja Cat and the Weeknd | You Right": 1577637135, "CKay | Love Nwantiti (Ah Ah Ah)": 1607991612, "David Kushner | Daylight": 1796004433, "Jessica Darrow | Surface Pressure": 1594677759, "Saja Boys | Soda Pop": 1820264147, "Kendrick Lamar | Squabble Up": 1781316884, "Justin Bieber | Intentions": 1496639586, "Future, Metro Boomin and Kendrick Lamar | Like That": 1737320971, "Eminem | Godzilla": 1495269629, "Kendrick Lamar | TV Off": 1781316952, "Sam Fender | Rein Me In": 1846589938, "Olivia Dean | Man I Need": 1817609509, "Raye | Where Is My Husband!": 1838737598, "CJ | Whoopty": 1553761345, "Zach Bryan | I Remember Everything": 1703217516, "Justin Bieber | Holy": 1531508507, "Nicki Minaj and Ice Spice | Barbie World": 1689239206, "The Weeknd and Playboi Carti | Timeless": 1793702853, "Bailey Zimmerman | Rock and a Hard Place": 1644401715, "Nathan Evans, 220 Kid & Billen Ted | Wellerman": 1644665577, "Artemas | I Like the Way You Kiss Me": 1736426869, "Fireboy DML & Ed Sheeran | Peru": 1600604159, "Cat Burns | Go": 1618963983, "Cassö & Raye | Prada": 1705910871, "Olivia Dean | So Easy (To Fall in Love)": 1817609507, "Little Mix | Sweet Melody": 1531469131, "Dave & Tems | Raindance": 1847992612, "Dua Lipa | Break My Heart": 1538004012, "Coi Leray | Players": 1663560769, "LF System | Afraid to Feel": 1616903944, "Lewis Capaldi | Forget Me": 1637088297, "Teddy Swims | Bad Dreams": 1771020950, "Jelly Roll | Need a Favor": 1688698795, "Sam Fender | Seventeen Going Under": 1575910316, "Dave | Starlight": 1839902050, "George Ezra | Green Green Grass": 1606177914, "MK | Dior": 1815350222, "Taylor Swift | Opalite": 6814997409, "Anne-Marie, KSI & Digital Farm Animals | Don't Play": 1545615622, "Post Malone | I Like You (A Happier Song)": 1623258536, "Drake | Search & Rescue": 1681127431, "Venbee & Goddard. | Messy in Heaven": 1641128726, "Calvin Harris & Clementine Douglas | Blessings": 1811333176, "Jimin | Who": 1751773093, "Headie One | Ain't It Different": 1528728851, "Riton & Nightcrawlers | Friday": 1544962737, "Belters Only & Jazzy | Make Me Feel Good": 1597155449, "Pop Smoke | Mood Swings": 1874543627, "Drake | Jimmy Cooks": 1630221907, "Galantis, David Guetta & Little Mix | Heartbreak Anthem": 1740520900, "Lost Frequencies & Calum Scott | Where Are You Now": 1576395046, "Eliza Rose & Interplanetary Criminal | B.O.T.A. (Baddest of Them All)": 1639317826, "Chase & Status & Stormzy | Backbone": 1760321175, "Aitch & Ashanti | Baby": 1611753997, "Libianca | People": 1658390607, "Justin Bieber | Anyone": 1544839502, "Maren Morris & Hozier | The Bones": 1481659078, "Kodak Black | Super Gremlin": 1613765773, "Lewis Capaldi | Wish You the Best": 1649787568, "Camila Cabello | Bam Bam": 1610834871, "Adele | Oh My God": 1590036031, "Lil Mosey | Blueberry Faygo": 1497581631, "Morgan Wallen | Love Somebody": 1773342229, "PinkPantheress | Boy's a Liar": 1656745398, "Jack Harlow | Whats Poppin": 1502760065, "Taylor Swift | I Can Do It with a Broken Heart": 1742074914, "Morgan Wallen | I'm the Problem": 1792812019, "Joel Corry, Raye & David Guetta | Bed": 1552434656, "Ed Sheeran | Azizam": 1803412611, "Justin Bieber | Yummy": 1492502431, "Fifty Fifty | Cupid": 1762365714, "Drake | Nokia": 6814098030, "Drake | First Person Shooter": 1710694569, "Olivia Dean | Nice to Each Other": 1814620247, "Nathan Dawe | Lighter": 1522012311, "Charli XCX | Guess": 1750469221, "Luke Combs | Forever After All": 1527782455, "Morgan Wallen | Just in Case": 1802103915, "Morgan Wallen | Wasted on You": 1818409987, "Joel Corry | Lonely": 1492481353, "Switch Disco & Ella Henderson | React": 1663845297, "Lauren Spencer-Smith | Fingers Crossed": 1710436008, "Toosii | Favorite Song": 1670756419, "SZA | 30 for 30": 1796270267, "Becky Hill & David Guetta | Remember": 1570736952, "Bl3ss & CamrinWatsin | Kisses": 1735803279, "WizTheMc & Bees & Honey | Show Me Love": 6766874208, "Chappell Roan | The Subway": 1831372120, "Trevor Daniel | Falling": 1574967276, "Drake | What's Next": 1556658001, "Morgan Wallen | Thought You Should Know": 1818410321, "Leon Thomas | Mutt": 1761678083, "Dan + Shay and Justin Bieber | 10,000 Hours": 1481229017, "Wizkid | Essence": 1531532767, "Kane Brown and Katelyn Brown | Thank God": 1634040984, "Shaboozey | Good News": 1775307497, "KSI | Holiday": 1581965342, "Mustard and Roddy Ricch | Ballin'": 1470317582, "Lil Durk | All My Life": 1688638981, "Topic & A7S | Breaking Me": 1490348552, "Jonasu | Black Magic": 1543302924, "Luude | Down Under": 1595974668, "Jazzy | Giving Me": 1674124880, "Chase & Status & Bou | Baddadan": 1698551200, "Lewis Capaldi | Survive": 1819073311, "Taylor Swift | Elizabeth Taylor": 6814995864, "Blackbear | Hot Girl Bummer": 1576025375, "Cardi B | Up": 1552255040, "Eslabon Armado and Peso Pluma | Ella Baila Sola": 1677446410, "Morgan Wallen & Tate McRae | What I Want": 1802103975, "Ed Sheeran | Afterglow": 1545341251, "Joel Corry & Jax Jones | Out Out": 1579553005, "Drake | Girls Want Girls": 1584449203, "Chrystal | The Days": 1771477810, "Lil Uzi Vert | Just Wanna Rock": 1650201274, "DaBaby | Bop": 1480802000, "Saweetie | Best Friend": 1542959224, "Morgan Wallen | Cowgirls": 1818426110, "Meduza | Paradise": 1536062139, "David Guetta, Becky Hill & Ella Henderson | Crazy What Love Can Do": 1614270485, "Sonny Fodera, Jazzy & D.O.D. | Somedays": 1753774219, "Ed Sheeran | Sapphire": 1811175544, "Post Malone and the Weeknd | One Right Now": 1593056951, "Zach Bryan | Pink Skies": 1747842759, "Giveon | Heartbreak Anniversary": 1499127838, "A1 x J1 | Latest Trends": 1551315643, "Sam Ryder | Space Man": 1643133980, "Becky Hill & Chase & Status | Disconnect": 1696160175, "Chappell Roan | The Giver": 1801197851, "Em Beihold | Numb Little Bug": 1633558383, "The Marías | No One Noticed": 1733731157, "BigXthaPlug & Bailey Zimmerman | All the Way": 1806169463, "The Beatles | Now and Then": 1713197541, "Central Cee & Lil Baby | Band4Band": 1792329114, "Morgan Wallen | Chasin' You": 1752598329, "Maroon 5 & Megan Thee Stallion | Beautiful Mistakes": 1570531973, "Cody Johnson | 'Til You Can't": 1582024384, "Marshmello and Kane Brown | Miles on It": 1771767811, "Dove Cameron | Boyfriend": 1718578287, "Drake | Rich Baby Daddy": 1710694759, "Koe Wetzel & Jessie Murph | High Road": 1766787478, "Riley Green | Worst Way": 1736951792, "Paul Woolford, Diplo & Kareen Lomax | Looking for Me": 1511808887, "KSI | Not Over Yet": 1667258939, "Fred Again & Obongjayar | Adore U": 1700707219, "Lil Baby | On Me": 1541937508, "Luke Combs | The Kind of Love We Make": 1619408877, "Luke Combs | Love You Anyway": 1666738582, "Jessie Murph and Jelly Roll | Wild Ones": 1727004103, "Camila Cabello | My Oh My": 1487577497, "Drake | Wants and Needs": 1556658055, "Morgan Wallen | One Thing at a Time": 1818424391, "Luke Combs | Ain't No Love in Oklahoma": 1746560129, "Benson Boone | Sorry I'm Here for Someone Else": 1797895104, "ArrDee | Flowers (Say My Name)": 1594162136, "Jax Jones & MNEK | Where Did You Go?": 1606770075, "Lewis Capaldi | Pointless": 1649787579, "Juice Wrld and Marshmello | Come & Go": 1526575738, "Metro Boomin, Future and Chris Brown | Superhero (Heroes & Villains)": 1657890059, "¥$, Kanye West & Ty Dolla $ign | Carnival": 1762082207, "Pooh Shiesty | Back in Blood": 1552114795, "Drake | IDGAF": 1710694571, "Regard & Raye | Secrets": 1522863926, "Shane Codd | Get Out My Head": 1532234605, "Ed Sheeran | Overpass Graffiti": 1581087534, "Burna Boy | Last Last": 1623677811, "James Hype & Miggy Dela Rosa | Ferrari": 1617280597, "Taylor Swift | Now That We Don't Talk (Taylor's Version)": 1713846523, "Yng Lvcas | La Bebé": 1852903734, "GloRilla and Megan Thee Stallion | Wanna Be": 1739256032, "Morgan Wallen | I Got Better": 1802103912, "Bruno Mars, Anderson .Paak & Silk Sonic | Smokin out the Window": 1611638138, "Jvke | Golden Hour": 1640157165, "Tyler, the Creator | Sticky": 1789446432, "Aitch & AJ Tracey | Rain": 1507922990, "KSI | Really Love": 1576165566, "Elton John & Britney Spears | Hold Me Closer": 1641082205, "Skye Newman | Family Matters": 1843696618, "Lil Baby | Woah": 1534811680, "Moneybagg Yo | Wockesha": 1563976333, "Bailey Zimmerman | Religiously": 1676694379, "21 Savage | Redrum": 1725240530, "Lil Baby | In a Minute": 1649121023, "Drake and 21 Savage | Spin Bout U": 1653012573, "Ed Sheeran | The Joker and the Queen": 1581087536, "Lizzy McAlpine | Ceilings": 1604657975, "GloRilla | Yeah Glo!": 1739255444, "Eminem | Lose Yourself": 1440903439, "T.I. | Live Your Life": 1258981727, "Soulja Boy Tell 'Em | Crank That (Soulja Boy)": 1443917919, "Kings of Leon | Use Somebody": 290303018, "Jay Sean | Down": 1445002842, "R. Kelly | Ignition (Remix)": 283567745, "Jay-Z | Empire State of Mind": 1440777015, "Jennifer Lopez | Ain't It Funny (Murder Remix)": 193031426, "Jason Derulo | Whatcha Say": 353554372, "Evanescence | Bring Me to Life": 1440666111, "Madonna | 4 Minutes": 1874757117, "Mary J. Blige | Family Affair": 1440817530, "Mario Winans | I Don't Wanna Know": 1131822399, "Timbaland | Give It to Me": 1443720822, "Iyaz | Replay": 326644034, "Mario | Let Me Love You": 257524515, "Nickelback | Rockstar": 214403648, "Taio Cruz | Break Your Heart": 1443147099, "Enrique Iglesias | Hero": 1440914005, "P. Diddy | I Need a Girl (Part One)": 80969167, "Jennifer Lopez | All I Have": 190849527, "Chamillionaire | Ridin'": 1443906056, "Gym Class Heroes | Cupid's Chokehold": 205499990, "Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade": 1440845801, "Snoop Dogg | I Wanna Love You": 1443117363, "Sophie Ellis-Bextor | Murder on the Dancefloor": 1445119897, "Beyoncé | Check on It": 296334744, "Estelle | American Boy": 1712041678, "Madonna | Music": 80815173, "The Calling | Wherever You Will Go": 407593225, "Kevin Lyttle | Turn Me On": 6337732, "Santana | Smooth": 265816505, "50 Cent | Candy Shop": 1444007299, "T.I. | Dead and Gone": 1260878669, "Gorillaz & De La Soul | Feel Good Inc.": 850571371, "Akon | Don't Matter": 1453088780, "Jay-Z & Kanye West | Run This Town": 1440776346, "Ashanti | Foolish": 1444119831, "Kevin Rudolf | Let It Rock": 1445131753, "Beyoncé | If I Were a Boy": 296016892, "Eve | Let Me Blow Ya Mind": 1553998006, "Busta Rhymes and Mariah Carey | I Know What You Want": 304737691, "Black Eyed Peas | Don't Phunk with My Heart": 1817288727, "Sonique | It Feels So Good": 1823912862, "City High | What Would You Do?": 1443858029, "Dido | Thank You": 254579170, "Christina Milian | Dip It Low": 1443904180, "Nelly | Ride wit Me": 1445122892, "Fat Joe | What's Luv?": 298829909, "Will Smith | Switch": 1478457165, "Rihanna | Unfaithful": 1440866698, "Shakira & Beyoncé | Beautiful Liar": 261707058, "T.I. | Whatever You Like": 1260878659, "Kid Cudi | Day 'n' Nite": 1440745246, "La Roux | Bulletproof": 1440747711, "Black Eyed Peas | Meet Me Halfway": 1440769131, "Mýa | Case of the Ex (Whatcha Gonna Do)": 1443750352, "Jennifer Lopez | I'm Real (Murder Remix)": 193030580, "Uncle Kracker | Follow Me": 262071200, "DJ Sammy & Yanou | Heaven": 17769882, "Missy Elliott | Work It": 1264527, "Pitbull | I Know You Want Me (Calle Ocho)": 327261557, "Twista, Kanye West & Jamie Foxx | Slow Jamz": 1437467892, "The Pussycat Dolls | Stickwitu": 1440762527, "Craig David | Fill Me In": 1207938117, "Red Hot Chili Peppers | Dani California": 945568998, "3 Doors Down | Kryptonite": 1440664900, "Dido | White Flag": 292025812, "Fall Out Boy | This Ain't a Scene, It's an Arms Race": 1445734014, "Eminem | The Real Slim Shady": 1815859197, "Kelis | Milkshake": 275018555, "Daniel Bedingfield | If You're Not the One": 1444134379, "Wayne Wonder | No Letting Go": 921538446, "Destiny's Child | Lose My Breath": 207341067, "Toni Braxton | He Wasn't Man Enough": 273798259, "Christina Aguilera | What a Girl Wants": 1308542774, "NSYNC | Girlfriend": 899265856, "Nelly | Over and Over": 1443742079, "Cassidy | Hotel": 854966958, "NSYNC | Bye Bye Bye": 303171368, "Elvis Presley & JXL | A Little Less Conversation": 388128642, "Ja Rule | Always on Time": 1371597594, "JoJo | Leave (Get Out)": 1816085262, "Faith Hill | The Way You Love Me": 321981543, "Chad Kroeger | Hero": 219080797, "Lumidee | Never Leave You (Uh Oooh, Uh Oooh)": 1451649261, "OneRepublic | Stop and Stare": 1882090715, "Aaliyah | Try Again": 1816084755, "LeAnn Rimes | Can't Fight the Moonlight": 79583285, "Santana | Maria Maria": 354579342, "Destiny's Child | Jumpin', Jumpin'": 296334748, "Crazy Town | Butterfly": 203304621, "Usher | U Got It Bad": 268532564, "Jennifer Lopez | I'm Gonna Be Alright": 193031658, "Daniel Bedingfield | Gotta Get thru This": 1444134333, "Jay-Z | '03 Bonnie & Clyde": 6815858477, "Ciara | Oh": 302992650, "Cassie | Me & U": 171980163, "OutKast | The Way You Move": 1774798905, "Soulja Boy Tell 'Em | Kiss Me thru the Phone": 1443711628, "Creed | With Arms Wide Open": 1440718229, "Blink-182 | All the Small Things": 1440840510, "The Game | Hate It or Love It": 1443202892, "Backstreet Boys | Show Me the Meaning of Being Lonely": 283567165, "The Game | How We Do": 1443202897, "Hinder | Lips of an Angel": 1440763711, "3 Doors Down | Here Without You": 1440831121, "Destiny's Child | Soldier": 207341076, "S Club | Never Had a Dream Come True": 1469524539, "Alicia Keys & Usher | My Boo": 386153729, "Nickelback | Someday": 719617253, "My Chemical Romance | Welcome To The Black Parade": 209388682, "Lil Jon & The East Side Boyz | Get Low": 1802047386, "50 Cent | 21 Questions": 1440907566, "Nina Sky | Move Ya Body": 1444178490, "Meghan Trainor | All About That Bass": 1791794659, "Justin Bieber | What Do You Mean?": 1440829606, "Psy | Gangnam Style": 1445144527, "Post Malone | Better Now": 1373506180, "John Legend | All of Me": 1441844542, "James Arthur | Say You Won't Let Go": 1147252591, "Eminem | Love the Way You Lie": 1637717485, "Sia | Cheap Thrills": 1055074640, "French Montana | Unforgettable": 1254531914, "Drake | God's Plan": 1406109863, "Benny Blanco, Halsey and Khalid | Eastside": 1445073665, "LMFAO | Sexy and I Know It": 1440636628, "5 Seconds of Summer | Youngblood": 1369109665, "Eminem | The Monster": 1440858784, "Nicki Minaj | Starships": 1442868833, "Flo Rida | Good Feeling": 613867349, "David Guetta | Titanium": 693226464, "Drake | In My Feelings": 1406109901, "Chris Brown | No Guidance": 1466874531, "Drake | Nice for What": 1406109896, "DJ Khaled | I'm the One": 1244229849, "Major Lazer | Cold Water": 1694794945, "Drake | Hold On, We're Going Home": 1440829630, "Post Malone | Psycho": 1373506178, "Flo Rida | Wild Ones": 613867347, "Drake | Too Good": 1440843716, "The Wanted | Glad You Came": 1443293784, "DJ Khaled | Wild Thoughts": 1244229848, "Maroon 5 | One More Night": 1440808310, "Post Malone | Wow": 1477887497, "Will.i.am | Scream & Shout": 1442823431, "Cardi B, Bad Bunny and J Balvin | I Like It": 1368105802, "Zayn | Pillowtalk": 1087165979, "Ed Sheeran | Castle on the Hill": 1193701328, "Billie Eilish | Everything I Wanted": 1487502476, "Rihanna | Stay": 1417177313, "Jason Derulo | Want to Want Me": 982388023, "Jason Derulo | In My Head": 353554374, "Nico & Vinz | Am I Wrong": 1180381817, "Travis Scott | Sicko Mode": 1421658123, "Fun | Some Nights": 601186061, "Bruno Mars | The Lazy Song": 576670462, "Sam Smith | I'm Not the Only One": 1440814433, "The Weeknd | Earned It": 1440845641, "Baauer | Harlem Shake": 601136935, "Rachel Platten | Fight Song": 1061182684, "Maroon 5 | Memories": 1571176664, "Rae Sremmurd | Black Beatles": 1440842851, "Black Eyed Peas | Just Can't Get Enough": 1440772193, "Swedish House Mafia | Don't You Worry Child": 6798736833, "Jack Ü, Skrillex & Diplo | Where Are Ü Now": 971262282, "Ariana Grande | Break Up with Your Girlfriend, I'm Bored": 1450334170, "Black Eyed Peas | The Time (Dirty Bit)": 1440771526, "Miguel | Sure Thing": 439618071, "Kendrick Lamar, SZA | All the Stars": 1440903307, "Flo Rida | Club Can't Handle Me": 378650466, "DNCE | Cake by the Ocean": 1440867865, "Shawn Mendes | There's Nothing Holdin' Me Back": 1440892573, "Juice Wrld | Lucid Dreams": 1447177630, "Jessie J | Domino": 1440809113, "Rihanna and Kanye West and Paul McCartney | FourFiveSeconds": 1445170918, "Travie McCoy | Billionaire": 374385942, "Liam Payne | Strip That Down": 1445039161, "Enrique Iglesias | I Like It": 1440722205, "Usher | DJ Got Us Fallin' in Love": 923691611, "Bruno Mars | Finesse": 1161504065, "Ed Sheeran | Beautiful People": 1464549657, "Jason Derulo | Ridin' Solo": 353554373, "Meghan Trainor | Lips Are Movin": 929825624, "The Weeknd | The Hills": 1440858495, "The Lumineers | Ho Hey": 1754031516, "Kesha | We R Who We R": 529843559, "Katy Perry | Part of Me": 716085475, "Taylor Swift | Look What You Made Me Do": 1440934255, "Nelly | Just a Dream": 1445283464, "Alex Clare | Too Close": 1443129077, "Tyga | Taste": 1384304707, "Mike Posner | Cooler Than Me": 345373429, "A Great Big World | Say Something": 735301552, "Eminem | Not Afraid": 1836036167, "Iggy Azalea | Black Widow": 1443725207, "Ed Sheeran | Sing": 1050204619, "Zedd, Maren Morris and Grey | The Middle": 1444896450, "Train | Drive By": 1438078577, "Justin Bieber | Boyfriend": 1440650857, "R. City | Locked Away": 1031371163, "Kendrick Lamar | Humble": 1440882165, "Maroon 5 | Maps": 1440842752, "Fifth Harmony | Worth It": 909767585, "Justin Timberlake | Suit & Tie": 1422654146, "Nick Jonas | Jealous": 1440813456, "Rihanna | Where Have You Been": 1443105353, "Enrique Iglesias | Tonight (I'm Lovin' You)": 1443752176, "Calvin Harris | Feel So Close": 450132719, "Calvin Harris | Sweet Nothing": 1713469232, "Imagine Dragons | Thunder": 1411629089, "Kelly Clarkson | Stronger (What Doesn't Kill You)": 464446141, "Fetty Wap | Trap Queen": 1039540875, "Fetty Wap | 679": 1039447863, "Desiigner | Panda": 1445306492, "Wiz Khalifa | Black and Yellow": 426754283, "Ed Sheeran | The A Team": 448213995, "David Guetta | Without You": 693226002, "Aloe Blacc | The Man": 1758438884, "Flo Rida | G.D.F.R.": 971238815, "Cardi B | Bodak Yellow": 1368105797, "Chris Brown | Don't Wake Me Up": 1456144036, "Naughty Boy | La La La": 1443257774, "Zayn and Taylor Swift | I Don't Wanna Live Forever": 1440880860, "The Chainsmokers | Paris": 1207120538, "Natalie La Rose | Somebody": 1445017004, "Travis Scott | Highest in the Room": 1482217453, "Diddy – Dirty Money & Skylar Grey | Coming Home": 1443212045, "Lil Tecca | Ransom": 1468508848, "Lady Gaga | Applause": 1451768063, "George Ezra | Shotgun": 1331589486, "Adele | Send My Love (To Your New Lover)": 1544494394, "HUNTR/X | How It's Done": 1837843443, "Drake | Knife Talk": 1584449220, "KSI | Patience": 1557283209, "Tom Grennan | Little Bit of Love": 1579081490, "Drake | Fair Trade": 1584449209, "Rudimental, Charlotte Plank & Vibe Chemistry | Dancing Is Healing": 1680232062, "YG Marley | Praise Jah in the Moonlight": 1723309988, "Cole Swindell | She Had Me at Heads Carolina": 1607280028, "Jordan Davis | Next Thing You Know": 1638197202, "Drake | Way 2 Sexy": 1584449211, "Gunna and Future | Pushin P": 1604376332, "GloRilla and Sexyy Red | Whatchu Kno About Me": 1772946959, "Jordan Davis | Buy Dirt": 1563946213, "Grupo Frontera and Bad Bunny | Un x100to": 1682500319, "Flo Milli | Never Lose Me": 1719159985, "Taylor Swift | Down Bad": 1742074195, "Sam Barber | Indigo": 1772722911, "SwitchOTR | Coming for You": 1600076530, "Stormzy | Firebabe": 1649221428, "Taylor Swift | The Tortured Poets Department": 1736268219, "Alex Warren | Eternity": 1817735147, "Lewis Capaldi | Something in the Heavens": 1828487105, "Black Eyed Peas and J Balvin | Ritmo (Bad Boys for Life)": 1495128542, "SZA | I Hate U": 1658650801, "Stephen Sanchez | Until I Found You": 1581702085, "Morgan Wallen | Lies Lies Lies": 1754189283, "SZA | Shirt": 1658650799, "The Weeknd | Cry for Me": 1793702597, "Adele | I Drink Wine": 1590036250, "Taylor Swift | Snow on the Beach": 1645937258, "Calvin Harris & Sam Smith | Desire": 1696083506, "KSI | Thick of It": 1769091226, "Myles Smith | Nice to Meet You": 1775728457, "Blake Shelton | Nobody but You": 1489235177, "SZA | Good Days": 1658650802, "Jessie Murph | Blue Strips": 1806736801, "Chris Stapleton | Starting Over": 1528423148, "Jelly Roll | I Am Not Okay": 1750427181, "Kendrick Lamar | Peekaboo": 1781316956, "Sombr | 12 to 12": 1828036635, "Megan Thee Stallion | Body": 1541244059, "Bailey Zimmerman | Fall in Love": 1644401713, "Hardy & Lainey Wilson | Wait in the Truck": 1752584209, "Sexyy Red | Get It Sexyy": 1749058812, "DJ Khaled | Greece": 1523924099, "Jesy Nelson | Boyz": 1589051220, "Mimi Webb | House on Fire": 1609153365, "Nickelback | Photograph": 214403497, "Missy Elliott | Get Ur Freak On": 83134409, "50 Cent | P.I.M.P.": 1440907563, "Missy Elliott | Lose Control": 73240545, "Snoop Dogg | Drop It Like It's Hot": 1443396469, "Joe | Stutter": 303183620, "Linkin Park | In the End": 590431785, "Eve | Gangsta Lovin'": 1443619002, "Kid Rock | All Summer Long": 586705159, "Metro Station | Shake It": 263685000, "Beyoncé | Sweet Dreams": 296016902, "Michael Bublé | Haven't Met You Yet": 668403662, "Madonna | Don't Tell Me": 80815189, "Puddle of Mudd | Blurry": 1450664888, "D12 | My Band": 1444193152, "Las Ketchup | The Ketchup Song (Aserejé)": 1362217175, "Aaliyah | More Than A Woman": 1816083551, "Sean Paul | We Be Burnin'": 1228295897, "O-Town | All or Nothing": 308179754, "Evanescence | My Immortal": 1440666126, "Madonna | Hung Up": 91989806, "Kanye West | Love Lockdown": 1441410404, "DJ Ötzi | Hey Baby (Uhh, Ahh)": 369159073, "BBMak | Back Here": 1443621605, "Eminem, Dr. Dre and 50 Cent | Crack a Bottle": 1443265746, "Tweet | Oops (Oh My)": 1308758267, "Donell Jones | U Know What's Up": 283566848, "Ludacris | Stand Up": 1442839681, "Britney Spears | Everytime": 251948405, "Coldplay | Speed of Sound": 1123076830, "Mark Ronson | Valerie": 259214627, "Faith Hill | There You'll Be": 264603369, "Akon | Locked Up": 1443624549, "Eminem | Cleanin' Out My Closet": 1440821625, "Enrique Iglesias | Escape": 1440913995, "Ashanti | Rock wit U (Awww Baby)": 1440661039, "Atomic Kitten | Whole Again": 724585818, "Take That | Patience": 1445121982, "Baha Men | Who Let the Dogs Out": 723351644, "Take That | Rule the World": 1445312839, "Sam Sparro | Black and Gold": 1445294965, "Kelly Clarkson | Breakaway": 275765378, "Lifehouse | Hanging by a Moment": 1440768181, "50 Cent | Ayo Technology": 1440877970, "Lupe Fiasco | Superstar": 269746765, "Kaiser Chiefs | Ruby": 1443919262, "Dizzee Rascal | Dance wiv Me": 1766337998, "The Pussycat Dolls | Beep": 1440762334, "Janet Jackson | All for You": 724885384, "Murphy Lee | Shake Ya Tailfeather": 1443880794, "Ne-Yo | Sexy Love": 1440783519, "Beyoncé | Déjà Vu": 261707248, "Ne-Yo | Because of You": 1440757476, "Zara Larsson and MNEK | Never Forget You": 1201058123, "Maroon 5 | Don't Wanna Know": 1396141925, "Camila Cabello | Never Be the Same": 1321217021, "Lady Gaga | The Edge of Glory": 1440858186, "Tinie Tempah | Written in the Stars": 693246151, "Ne-Yo | Let Me Love You (Until You Learn to Love Yourself)": 1445309387, "NF | Let You Down": 1440849363, "Taylor Swift | Me!": 1468058706, "Pitbull | Feel This Moment": 737053272, "Imagine Dragons | Demons": 1440873339, "J Balvin and Willy William | Mi Gente": 1368816792, "Owl City and Carly Rae Jepsen | Good Time": 1440807030, "Jeremih | Don't Tell 'Em": 1442990486, "Post Malone | Goodbyes": 1477887483, "Katy Perry | Wide Awake": 716085504, "Jason Derulo | Trumpets": 840381892, "Martin Garrix | Animals": 1670593167, "Zedd and Alessia Cara | Stay": 1445043157, "Calum Scott | Dancing On My Own": 1428795504, "Khalid | Talk": 1455151648, "Ella Henderson | Ghost": 942753720, "Drake | Passionfruit": 1440892167, "Jay-Z | Holy Grail": 1443063132, "Olly Murs | Troublemaker": 720777920, "Charlie Puth | Marvin Gaye": 1031416183, "Mr Probz | Waves (Robin Schulz Remix)": 1532427385, "Lizzo | Good as Hell": 1150159755, "Calvin Harris, Rag'n'Bone Man | Giant": 1447498494, "Timbaland | Carry Out": 1443162415, "Flo Rida | I Cry": 613867353, "Lady Gaga | Alejandro": 1476727671, "Clean Bandit | Symphony": 1436738923, "Calvin Harris, Sam Smith | Promises": 1424362622, "Phillip Phillips | Home": 1440862440, "Demi Lovato | Heart Attack": 1440620921, "Gnash | I Hate U, I Love U": 1099849073, "Logic | 1-800-273-8255": 1440896726, "Twenty One Pilots | Heathens": 1125281487, "Silentó | Watch Me": 1445036897, "Taylor Swift | You Need to Calm Down": 1468058704, "Rag'n'Bone Man | Human": 1202354334, "Edward Maya & Vika Jigulina | Stereo Love": 351996346, "Usher | Scream": 1448420463, "Jason Derulo | The Other Side": 840381897, "Young Money | BedRock": 1443647273, "Macklemore & Ryan Lewis | Same Love": 560097759, "One Direction | Drag Me Down": 1040195238, "George Ezra | Budapest": 947999963, "Rudimental | Feel the Love": 666989908, "Rudimental | These Days": 1389004031, "Calvin Harris | I Need Your Love": 1647424714, "Calvin Harris, Disciples | How Deep Is Your Love": 1001677305, "David Guetta | Hey Mama": 924568962, "Lewis Capaldi | Hold Me While You Wait": 1452619052, "Fall Out Boy | My Songs Know What You Did in the Dark (Light Em Up)": 1440862694, "Niall Horan | Slow Hands": 1444891331, "Ariana Grande | God Is a Woman": 1399203750, "David Guetta | Turn Me On": 1440900899, "Alicia Keys | Girl on Fire": 1635638720, "The Script | Hall of Fame": 563641976, "Ariana Grande | One Last Time": 1440852679};

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
