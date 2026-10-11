// Song pool, rebuilt from data (Oct 2026):
//  • Popularity  = worldwide Spotify plays (kworb.net per-release-year lists), so a song must be known globally.
//  • Western     = must also have charted in the US (Billboard year-end Hot 100) or UK (top 10), so regional-only hits are out.
//  • Pop focus   = Apple's genre must be pop / dance / R&B / indie-pop; rap, country, Latin, K-pop and rock only stay as
//                  top-tier crossovers (charted in BOTH the US and UK, and over ~1.3–2 billion plays).
//  • Floors      = at least ~330M plays (2000s), ~830M (2010s), ~500M (2020s). Christmas songs are excluded.
// One song per line: Artist | Title | optional extra accepted artist names (separated by ;)
// Multiple main artists are joined with " & " — naming any one of them counts as correct.

const SONG_DATA = {
"00s": `
Coldplay | Yellow
Coldplay | Viva la Vida
The Killers | Mr. Brightside | Killers
Eminem | Without Me
Eminem | Lose Yourself
Coldplay | The Scientist
Keane | Somewhere Only We Know
Shakira | Hips Don't Lie
Eminem | Mockingbird
Gorillaz & De La Soul | Feel Good Inc. | Gorillaz
Eminem | The Real Slim Shady
Jason Mraz | I'm Yours
Rihanna | Umbrella
Miley Cyrus | Party in the U.S.A.
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
Coldplay | Clocks
David Guetta | Sexy Bitch
Timbaland | The Way I Are
The Script | The Man Who Can't Be Moved
Kanye West | Gold Digger | Ye
Iyaz | Replay
Katy Perry | Hot n Cold
Mario | Let Me Love You
Justin Timberlake | SexyBack
LINKIN PARK | What I've Done
Black Eyed Peas | Where Is the Love? | The Black Eyed Peas
Sean Paul | Temperature
The Script | Breakeven
Taio Cruz | Dynamite
Avril Lavigne | Complicated
Shaggy | It Wasn't Me
Gnarls Barkley | Crazy
Plain White T's | Hey There Delilah
Adele | Make You Feel My Love
50 Cent | Candy Shop
Train | Drops of Jupiter (Tell Me)
Katy Perry | I Kissed a Girl
NSYNC | Bye Bye Bye
Britney Spears | Gimme More
Nelly Furtado | Maneater
Britney Spears | Oops!... I Did It Again
Alicia Keys | No One
Ne-Yo | So Sick
Black Eyed Peas | Meet Me Halfway | The Black Eyed Peas
Gorillaz | Clint Eastwood
Lady Gaga | Telephone
Sean Kingston | Beautiful Girls
Owl City | Fireflies
Leona Lewis | Bleeding Love
Taylor Swift | Love Story
James Blunt | You're Beautiful
Alicia Keys & Usher | My Boo | Usher and Alicia Keys
Rihanna | Disturbia
Kelly Clarkson | Since U Been Gone
Panic! At the Disco | I Write Sins Not Tragedies
Estelle | American Boy
Nelly Furtado | Say It Right
Akon | Lonely
Rihanna | Pon de Replay
Justin Timberlake | Rock Your Body
Gwen Stefani | The Sweet Escape
Ne-Yo | Miss Independent
Jay Sean | Down
Kylie Minogue | Can't Get You Out of My Head
OneRepublic | Apologize | Timbaland
Rihanna | Take a Bow
t.A.T.u. | All The Things She Said
Mike Posner | Cooler Than Me
Modjo | Lady (Hear Me Tonight)
Daft Punk | One More Time
Mariah Carey | We Belong Together
The Temper Trap | Sweet Disposition
Cascada | Everytime We Touch
Mariah Carey | Obsessed
Mary J. Blige | Family Affair
Adele | Chasing Pavements
Britney Spears | Womanizer
Mark Ronson | Valerie
Alexandra Stan | Mr. Saxobeat
Sophie Ellis-Bextor | Murder on the Dancefloor
Jason Derulo | Whatcha Say
Miley Cyrus | The Climb
Rihanna | Rude Boy
Beyoncé | Irreplaceable
Kelly Clarkson | Because of You
Beyoncé | Single Ladies (Put a Ring on It)
Taylor Swift | You Belong with Me
Gwen Stefani | Hollaback Girl
Florence + the Machine | You've Got The Love
The Pussycat Dolls | Don't Cha | Pussycat Dolls
P!nk | So What | Pink
OneRepublic | Secrets
Akon | Right Now (Na Na Na)
Carrie Underwood | Before He Cheats
Taio Cruz | Break Your Heart
Justin Timberlake | My Love
Justin Timberlake | Cry Me a River
Sean Paul | Get Busy
Cassie | Me & U
Gorillaz | DARE
Beyoncé | If I Were a Boy
Keane | Everybody's Changing
Shaggy | Angel
Colbie Caillat | Bubbly
Lady Gaga | Alejandro
Alicia Keys | Fallin'
Mario Winans | I Don't Wanna Know
Ne-Yo | Because of You
Vanessa Carlton | A Thousand Miles
Ciara | 1, 2 Step
Chris Brown | With You
Madonna | Hung Up
The Fray | You Found Me
Natasha Bedingfield | Pocketful of Sunshine
Norah Jones | Don't Know Why
Amy Winehouse | Rehab
Lady Gaga | LoveGame
David Guetta | When Love Takes Over
Avril Lavigne | Girlfriend
Eve | Let Me Blow Ya Mind
Rihanna | SOS
Britney Spears | Circus
R. Kelly | Ignition (Remix)
John Mayer | Your Body Is a Wonderland
The Pussycat Dolls | Buttons | Pussycat Dolls
Edward Maya & Vika Jigulina | Stereo Love | Edward Maya
Justin Timberlake | What Goes Around... Comes Around
Akon | Don't Matter
José González | Heartbeats
Backstreet Boys | Shape of My Heart
Black Eyed Peas | Rock That Body
Robbie Williams | Feel
Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade
Lily Allen | Smile
Sara Bareilles | Love Song
John Mayer | Waiting On the World to Change
Alexander Rybak | Fairytale
Alex Gaudino | Destination Calabria
Black Eyed Peas | Boom Boom Pow | The Black Eyed Peas
OneRepublic | Good Life
Chris Brown | Run It!
Madonna | 4 Minutes
Mika | Grace Kelly
Justin Bieber | One Time
Rihanna | Hate That I Love You
Rihanna | Shut Up And Drive
Alicia Keys | Empire State of Mind (Part II) Broken Down
Ashanti | Foolish
Gwen Stefani | Rich Girl
Nelly Furtado | I'm Like a Bird
Coldplay | In My Place
Bob Sinclar | World Hold On (Children of the Sky)
Avril Lavigne | I'm with You
The Pussycat Dolls | Stickwitu | Pussycat Dolls
P!nk | Who Knew | Pink
Coldplay | Trouble
Usher | U Remind Me
Jennifer Lopez | Jenny from the Block | J.Lo;JLo
Shakira & Beyoncé | Beautiful Liar | Beyoncé and Shakira
Beyoncé | Baby Boy
Chris Brown | Yo (Excuse Me Miss)
Usher | Love in This Club
Black Eyed Peas | Let's Get It Started
Ne-Yo | Closer
Sean Kingston | Fire Burning
Taylor Swift | Our Song
Chris Brown | Kiss Kiss
La Roux | Bulletproof
Rihanna | Unfaithful
Kevin Lyttle | Turn Me On
Uncle Kracker | Follow Me
Enya | Only Time
Ne-Yo | Mad
Craig David | 7 Days
Beyoncé | Diva
Nelly Furtado & James Morrison | Broken Strings | James Morrison
*NSYNC | It's Gonna Be Me
Beyoncé | Sweet Dreams
Enrique Iglesias | Hero
Akon | Beautiful
Duffy | Mercy
Usher | U Got It Bad
3OH!3 | DONTTRUSTME
O-Zone | Dragostea Din Tei
James Blunt | Goodbye My Lover
The Pussycat Dolls | When I Grow Up | Pussycat Dolls
Michael Bublé | Haven't Met You Yet
Coldplay | Speed of Sound
Usher | Burn
Gorillaz | Dirty Harry
D12 | My Band
Metro Station | Shake It
Blu Cantrell | Breathe
JoJo | Too Little Too Late
Christina Aguilera | Beautiful
Mariah Carey | Touch My Body
Robbie Williams | Rock DJ
Justin Timberlake | Summer Love
Akon | Locked Up
Kelly Clarkson | Breakaway
Leona Lewis | Better in Time
Junior Senior | Move Your Feet
Black Eyed Peas | Imma Be
Beyoncé | Naughty Girl
Avril Lavigne | My Happy Ending
Westlife | My Love
Britney Spears | I'm a Slave 4 U
Jonas Brothers | Burnin' Up
Ciara | Goodies
James Blunt | 1973
Avril Lavigne | When You're Gone
*NSYNC | This I Promise You
Britney Spears | If U Seek Amy
Blu Cantrell | Hit 'Em Up Style (Oops!)
P!nk | Get the Party Started | Pink
Las Ketchup | The Ketchup Song (Aserejé)
Usher | Confessions Part II
`,

"10s": `
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
Harry Styles | Sign of the Times
Adele | Set Fire to the Rain
David Guetta | Titanium
Maroon 5 | Sugar
LAUV | I Like Me Better
Calvin Harris | This Is What You Came For | Rihanna
Drake | Passionfruit
Christina Perri | A Thousand Years
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
Sia | Cheap Thrills
SAINt JHN | Roses | Saint Jhn;Imanbek
Ava Max | Sweet but Psycho
Carly Rae Jepsen | Call Me Maybe
Benny Blanco, Halsey and Khalid | Eastside
Ariana Grande | Into You
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
Rihanna | Needed Me
Marshmello | Silence
Coldplay | Paradise
Clean Bandit | Rather Be
Major Lazer | Cold Water
Gym Class Heroes | Stereo Hearts | Adam Levine
Chris Brown | Under the Influence
Trevor Daniel | Falling
Anne-Marie | 2002
Taylor Swift | Style
Dua Lipa | IDGAF
Sean Paul | No Lie
Maroon 5 | Girls Like You
Avicii | Waiting For Love
Ellie Goulding | Love Me like You Do
Adele | Hello
Alessia Cara | Scars To Your Beautiful
Khalid | Better
Pharrell Williams | Happy | Pharrell
Zedd, Maren Morris and Grey | The Middle
Martin Garrix & Bebe Rexha | In the Name of Love | Martin Garrix
Portugal. The Man | Feel It Still | Portugal The Man
Zayn | Pillowtalk
Justin Bieber | Baby
Kygo & Selena Gomez | It Ain't Me
Fifth Harmony | Work from Home
Rihanna | Work
MKTO | Classic
Shawn Mendes | Mercy
Imagine Dragons | Whatever It Takes
Dynoro & Gigi D'Agostino | In My Mind | Dynoro
Jessie J & Ariana Grande & Nicki Minaj | Bang Bang
Bruno Mars | It Will Rain
Sam Smith & Normani | Dancing with a Stranger
Lil Nas X | Old Town Road
Coldplay | Adventure of a Lifetime
fun. | We Are Young | Fun
Ariana Grande | Dangerous Woman
Calvin Harris | Feel So Close
Adele | When We Were Young
Jonas Brothers | Sucker
Justin Timberlake | Mirrors
Khalid | Location
Ed Sheeran | Castle on the Hill
George Ezra | Budapest
Ed Sheeran | Galway Girl
Disclosure | Latch | Sam Smith
Katy Perry | Firework
Regard | Ride It
Ariana Grande | No Tears Left to Cry
Katy Perry | Roar
Major Lazer | Light It Up
Imagine Dragons | Natural
Duncan Laurence | Arcade
Bebe Rexha | Meant to Be | Florida Georgia Line
Gnash | I Hate U, I Love U
Ed Sheeran | Beautiful People
Selena Gomez & Marshmello | Wolves | Selena Gomez
Swedish House Mafia | Don't You Worry Child
Calum Scott | Dancing On My Own
Ariana Grande & The Weeknd | Love Me Harder | Ariana Grande
Lorde | Royals
The Chainsmokers | Paris
Usher | DJ Got Us Fallin' in Love
Bruno Mars | The Lazy Song
Ed Sheeran | Happier
Selena Gomez | Lose You to Love Me
Lilly Wood & The Prick | Prayer In C
Lana Del Rey | Video Games
Lost Frequencies | Are You With Me
The Chainsmokers | Roses
Bruno Mars | Treasure
Icona Pop | I Love It | Charli XCX
Calvin Harris | My Way
Taylor Swift | Look What You Made Me Do
Maroon 5 | What Lovers Do
Blackbear | Hot Girl Bummer
Loud Luxury | Body
Zedd and Alessia Cara | Stay
R. City | Locked Away
Tove Lo | Habits (Stay High)
Maroon 5 | One More Night
One Direction | Drag Me Down
Of Monsters and Men | Little Talks
Kungs & Cookin' On 3 Burners | This Girl (Kungs Vs. Cookin' On 3 Burners) | Kungs
Katy Perry | California Gurls
James Bay | Let It Go
Lewis Capaldi | Bruises
JP Saxe | If the World Was Ending
Selena Gomez & The Scene | Love You Like A Love Song
Kygo | Firestone
Rag'n'Bone Man | Human
American Authors | Best Day Of My Life
Rihanna and Kanye West and Paul McCartney | FourFiveSeconds | Rihanna, Kanye West and Paul McCartney
Taylor Swift | Delicate
Jonas Blue | Fast Car
Adele | Send My Love (To Your New Lover)
Meghan Trainor | Like I'm Gonna Lose You
Miley Cyrus | We Can't Stop
James Arthur & Anne-Marie | Rewrite The Stars | James Arthur
Avicii | Levels
Chris Brown | No Guidance
Mr Probz | Waves (Robin Schulz Remix)
Dominic Fike | 3 Nights
Jack Ü, Skrillex & Diplo | Where Are Ü Now | Jack Ü
Avicii | Hey Brother
DJ Snake | Middle
Miley Cyrus | Wrecking Ball
Ariana Grande | God Is a Woman
One Direction | Steal My Girl
Sia | Elastic Heart
Hailee Steinfeld & Grey | Starving | Hailee Steinfeld
Ariana Grande | Break Free
Rihanna | Where Have You Been
Jonas Blue | Perfect Strangers
Mark Ronson | Nothing Breaks Like a Heart
Jason Derulo | Swalla
Nico & Vinz | Am I Wrong
Clean Bandit | Solo
One Direction | Perfect
Jason Derulo | Want to Want Me
Jennifer Lopez | On the Floor | J.Lo;JLo
Taylor Swift | All Too Well
Demi Lovato | Sorry Not Sorry
Lady Gaga | Judas
Julia Michaels | Issues
Demi Lovato | Heart Attack
Katy Perry | Teenage Dream
Taylor Swift | Wildest Dreams
Calvin Harris, Sam Smith | Promises | Calvin Harris & Sam Smith
Sean Kingston & Justin Bieber | Eenie Meenie | Sean Kingston
Niall Horan | This Town
Selena Gomez | Back To You
A Great Big World | Say Something | A Great Big World and Christina Aguilera
Camila Cabello | Never Be the Same
James Arthur | Impossible
Kygo & Whitney Houston | Higher Love | Kygo
Zara Larsson and MNEK | Never Forget You
Shawn Mendes | If I Can't Have You
Demi Lovato | Cool for the Summer
Ed Sheeran | The A Team
Taylor Swift | I Knew You Were Trouble.
Ariana Grande | Problem
Galantis | Runaway (U & I)
George Ezra | Shotgun
Billie Eilish | bury a friend
Neon Trees | Everybody Talks
Pitbull | Feel This Moment
P!nk | Try
Ariana Grande | Break Up with Your Girlfriend, I'm Bored
Lorde | Team
Charlie Puth | One Call Away
Lana Del Rey | Born To Die
Taylor Swift | You Need to Calm Down
Mabel | Don't Call Me Up
Becky G | Shower
Liam Payne | Strip That Down
Maroon 5 | Don't Wanna Know
Meduza & Goodboys | Piece Of Your Heart | Meduza
Ariana Grande & Social House | boyfriend | Ariana Grande
Robin Thicke | Blurred Lines
Will.i.am | Scream & Shout
John Newman | Love Me Again
Flume | Never Be Like You
Black Eyed Peas and J Balvin | Ritmo (Bad Boys for Life)
Paloma Faith | Only Love Can Hurt Like This
Naughty Boy | La La La
Surfaces | Sunday Best
Jonas Blue | Mama
Lizzo | Truth Hurts
Kesha | Die Young | Ke$ha
Fifth Harmony | Worth It
Sam Smith | How Do You Sleep?
Niall Horan | Slow Hands
The Wanted | Glad You Came
Ellie Goulding | Burn
LMFAO | Party Rock Anthem
SZA | Love Galore
Train | Drive By
Rachel Platten | Fight Song
Jason Mraz | I Won't Give Up
Taylor Swift | ...Ready For It?
Halsey | Bad At Love
Starley | Call on Me
David Guetta | Hey Mama
P!nk | What About Us
Galantis | No Money
Rihanna | Bitch Better Have My Money
Lewis Capaldi | Hold Me While You Wait
Shawn Mendes | In My Blood
Bruno Mars | Finesse
Keala Settle & The Greatest Showman Ensemble | This Is Me | Keala Settle
Travie McCoy | Billionaire
X Ambassadors | Renegades
Jonas Blue | Rise
Far East Movement | Like a G6
Sam Smith | Like I Can
Taylor Swift | Me!
Meghan Trainor | All About That Bass
Black Eyed Peas | Just Can't Get Enough | The Black Eyed Peas
Deorro & Chris Brown | Five More Hours | Deorro
Selena Gomez | Good for You
Ruth B. | Lost Boy
AWOLNATION | Sail
Tiësto & Dzeko | Jackie Chan | Tiësto
Pitbull | International Love
LAUV & Troye Sivan | i'm so tired... | Lauv
Jason Derulo | Talk Dirty
Imagine Dragons | It's Time
Maroon 5 | Cold
David Guetta | Where Them Girls At
CNCO & Little Mix | Reggaetón Lento (Bailemos) | CNCO
Years & Years | King | Olly Alexander (Years & Years)
5 Seconds of Summer | She Looks So Perfect
P!nk | Raise Your Glass
Mumford & Sons | I Will Wait
David Guetta | 2U
Rixton | Me And My Broken Heart
Alessia Cara | Here
Miley Cyrus | Malibu
Felix Jaehn | Ain't Nobody (Loves Me Better)
Bazzi | Beautiful
David Guetta | Play Hard
James Bay | Hold Back The River
Charlie Puth | How Long
Charlie Puth | Marvin Gaye
Kelly Clarkson | Stronger (What Doesn't Kill You)
Alicia Keys | Girl on Fire
Ed Sheeran | Dive
Zedd | Clarity
Ed Sheeran | South of the Border
Katy Perry | Wide Awake
Tove Lo | Talking Body
Alesso | Heroes (we could be)
Ed Sheeran | Don't
Dua Lipa | Be the One
Jessie J | Price Tag
Meghan Trainor | NO
Little Mix | Secret Love Song
Avicii | SOS
Ed Sheeran | Supermarket Flowers
Fun | Some Nights
Jessie J | Domino
Lady Gaga | Born This Way
Little Mix | Shout Out to My Ex
Owl City and Carly Rae Jepsen | Good Time
Little Mix | Black Magic
Martin Jensen | Solo Dance
Adele | Water Under the Bridge
Lady Gaga | Bloody Mary
Lady Gaga | Applause
Justin Bieber | Boyfriend
Taylor Swift | We Are Never Ever Getting Back Together
One Direction | Best Song Ever
Katy Perry | Part of Me
Carly Rae Jepsen | I Really Like You
`,

"20s": `
HUNTR/X | Golden | Huntrix;KPop Demon Hunters
HUNTR/X | How It's Done | Huntrix;KPop Demon Hunters
The Weeknd | Blinding Lights | Weeknd
Harry Styles | As It Was
The Kid LAROI & Justin Bieber | STAY | Kid Laroi
Lady Gaga & Bruno Mars | Die With A Smile
Billie Eilish | BIRDS OF A FEATHER
Glass Animals | Heat Waves
Harry Styles | Watermelon Sugar
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
Lewis Capaldi | Before You Go
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
Harry Styles | Adore You
Billie Eilish | Everything I Wanted
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
Doja Cat | Streets
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
Ariana Grande & Justin Bieber | Stuck with U
Tyla | Water
Justin Bieber | Intentions
Olivia Dean | Man I Need
Doja Cat | Say So
Tiësto | The Business | Tiesto
The Weeknd & Madonna | Popular | The Weeknd
Nicky Youre & dazy | Sunroof
Joel Corry | Head & Heart | MNEK
Ava Max | Kings & Queens
Drake | Jimmy Cooks
Dua Lipa | Dance the Night
RAYE | Escapism. | Raye;070 Shake
SZA | Nobody Gets Me
Chappell Roan | Pink Pony Club
Lola Young | Messy
Billie Eilish | CHIHIRO
Dua Lipa | Physical
Lady Gaga & Ariana Grande | Rain On Me
The Marías | No One Noticed
The Weeknd | Heartless
Myles Smith | Stargazing
Topic & A7S | Breaking Me
Riton & Nightcrawlers | Friday
Taylor Swift | Fortnight | Post Malone
Lil Nas X | THAT'S WHAT I WANT
SZA | Saturn
Ariana Grande | 34+35
Lana Del Rey | Say Yes To Heaven
Harry Styles | Late Night Talking
Marshmello & Jonas Brothers | Leave Before You Love Me | Marshmello
Gracie Abrams | I Love You, I'm Sorry
Doja Cat and the Weeknd | You Right
Sabrina Carpenter | Manchild
Kenya Grace | Strangers
Taylor Swift | exile
Camila Cabello | Bam Bam
Taylor Swift | willow
Cassö & Raye | Prada | Cassö, Raye & D-Block Europe
Dua Lipa | Houdini
Benson Boone | Slow It Down
Olivia Dean | So Easy (To Fall in Love)
Surf Mesa | ily (i love you baby) | Emilee
The Kid Laroi | Without You
Raye | Where Is My Husband!
Teddy Swims | The Door
Taylor Swift | Karma
Dua Lipa | Training Season
Billie Eilish | LUNCH
Justin Bieber | DAISIES
Justin Bieber & benny blanco | Lonely | Justin Bieber
Billie Eilish | Therefore I Am
Lizzo | About Damn Time
Beyoncé | CUFF IT
Meghan Trainor | Made You Look
Adam Port, Stryv & Malachiii | Move | Adam Port
Chappell Roan | HOT TO GO!
Tate McRae | Sports car
Acraze | Do It To It
Lizzy McAlpine | Ceilings
Maroon 5 & Megan Thee Stallion | Beautiful Mistakes | Maroon 5
Teddy Swims | Bad Dreams
Justin Bieber | Yummy
Justin Bieber | Hold On
Justin Bieber | Holy
Taylor Swift | Lavender Haze
Taylor Swift | Opalite
Chris Brown and Young Thug | Go Crazy
ATB, Topic & A7S | Your Love (9PM) | ATB
Sabrina Carpenter | Bed Chem
Jason Derulo | Take You Dancing
James Hype & Miggy Dela Rosa | Ferrari
Camila Cabello | My Oh My
Lady Gaga | Abracadabra
Taylor Swift | I Can Do It with a Broken Heart
Tate McRae | exes
Justin Bieber | Anyone
Tiësto & Tate McRae | 10:35 | Tiësto
Meduza | Paradise
Alex Warren | Carry You Home
Michael Marcagi | Scared To Start
Dove Cameron | Boyfriend
Taylor Swift | the 1
Billie Eilish | No Time To Die
Ariana Grande | yes, and?
Tate McRae | Just Keep Watching
Olivia Rodrigo | bad idea right?
THE ANXIETY, WILLOW & Tyler Cole | Meet Me At Our Spot | THE ANXIETY
Addison Rae | Diet Pepsi
Tate McRae | she's all i wanna be
Ariana Grande | pov
Peggy Gou | (It Goes Like) Nanana
Chrystal | The Days
Shawn Mendes & Justin Bieber | Monster (Shawn Mendes & Justin Bieber) | Shawn Mendes
Post Malone | Chemical
Doja Cat | Get Into It (Yuh)
WizTheMc & Bees & Honey | Show Me Love
Adele | Oh My God
Drake | Nokia
Ritt Momney | Put Your Records On
LF System | Afraid to Feel
Sienna Spiro | Die On This Hill
SZA | Shirt
Bruno Mars, Anderson .Paak & Silk Sonic | Smokin out the Window | Silk Sonic
Joel Corry & Jax Jones | Out Out
Halsey | You should be sad
Benson Boone | Mystical Magical
Billie Eilish | my future
Taylor Swift | Is It Over Now?
Kehlani | Folded
NEIKED, Mae Muller & Polo G | Better Days (NEIKED x Mae Muller x Polo G) | NEIKED
Olivia Dean | Nice to Each Other
Noah Kahan & Post Malone | Dial Drunk | Noah Kahan
Dua Lipa | We're Good
Calvin Harris & Ellie Goulding | Miracle
Becky Hill & David Guetta | Remember
SZA | I Hate U
Nicki Minaj and Ice Spice | Barbie World
Nathan Evans, 220 Kid & Billen Ted | Wellerman
Tate McRae | Revolving door
Billie Eilish | Your Power
AJR | Bang!
Galantis, David Guetta & Little Mix | Heartbreak Anthem
Lauren Spencer-Smith | Fingers Crossed
Bl3ss & CamrinWatsin | Kisses
Olivia Rodrigo | get him back!
Joel Corry, Raye & David Guetta | Bed
Taylor Swift | Down Bad
Sabrina Carpenter | Tears
YG Marley | Praise Jah in the Moonlight
Taylor Swift | Snow on the Beach
Ed Sheeran | Afterglow
Beyoncé | BREAK MY SOUL
Em Beihold | Numb Little Bug
Ed Sheeran | Eyes Closed
The Weeknd | Take My Breath | Weeknd
Harry Styles | Music for a Sushi Restaurant
Bruno Major | Nothing
Paul Russell | Lil Boo Thang
David Guetta, Becky Hill & Ella Henderson | Crazy What Love Can Do
Sam Fender | Rein Me In | Sam Fender & Olivia Dean
Jax Jones & MNEK | Where Did You Go?
Charli xcx | Apple | Charli XCX
`
};

// Exact Apple track for each song, so every clip is the original recording.
const TRACK_IDS = {"HUNTR/X | Golden": 1820264150, "HUNTR/X | How It's Done": 1837843443, "Coldplay | Yellow": 1122782283, "Coldplay | Viva la Vida": 1122773680, "The Killers | Mr. Brightside": 1440891171, "Eminem | Without Me": 1440821643, "Eminem | Lose Yourself": 1440903439, "Coldplay | The Scientist": 1122776155, "Keane | Somewhere Only We Know": 1445287036, "Shakira | Hips Don't Lie": 211761919, "Eminem | Mockingbird": 1425131554, "Gorillaz & De La Soul | Feel Good Inc.": 850571371, "Eminem | The Real Slim Shady": 1815859197, "Jason Mraz | I'm Yours": 277635828, "Rihanna | Umbrella": 1441154437, "Miley Cyrus | Party in the U.S.A.": 1445007713, "Black Eyed Peas | I Gotta Feeling": 1440769310, "50 Cent | In da Club": 1440877090, "Coldplay | Fix You": 1123076826, "Evanescence | Bring Me to Life": 1440666111, "Maroon 5 | She Will Be Loved": 1440851722, "Usher | Yeah!": 1692261346, "Train | Hey, Soul Sister": 1438174456, "Nelly Furtado | Promiscuous": 1471716722, "Kanye West | Heartless": 1441410309, "Beyoncé | Halo": 296016893, "Britney Spears | Toxic": 251948354, "Lady Gaga | Bad Romance": 1444893703, "OutKast | Hey Ya!": 1774799818, "Beyoncé | Crazy in Love": 201274644, "Natasha Bedingfield | Unwritten": 430514893, "Kesha | TiK ToK": 1852627148, "Lady Gaga | Just Dance": 1440818653, "Rihanna | Don't Stop the Music": 1441154439, "Kanye West | Stronger": 1442846328, "Snow Patrol | Chasing Cars": 1442491770, "Nickelback | How You Remind Me": 214475478, "Maroon 5 | This Love": 1445283228, "The Fray | How to Save a Life": 821031488, "Akon | Smack That": 1445288974, "Jay-Z | Empire State of Mind": 1440777015, "Amy Winehouse | Back to Black": 1440856228, "Flo Rida | Low": 275496141, "OutKast | Ms. Jackson": 1536684150, "Alicia Keys | If I Ain't Got You": 255343130, "Coldplay | Clocks": 1122776156, "David Guetta | Sexy Bitch": 693247224, "Timbaland | The Way I Are": 1440748894, "The Script | The Man Who Can't Be Moved": 289076746, "Kanye West | Gold Digger": 1440763833, "Iyaz | Replay": 326644034, "Katy Perry | Hot n Cold": 715891658, "Mario | Let Me Love You": 257524515, "Justin Timberlake | SexyBack": 400946435, "LINKIN PARK | What I've Done": 590427450, "Black Eyed Peas | Where Is the Love?": 1615142635, "Sean Paul | Temperature": 316742052, "The Script | Breakeven": 1055488629, "Taio Cruz | Dynamite": 1442897002, "Avril Lavigne | Complicated": 315025823, "Shaggy | It Wasn't Me": 1440745627, "Gnarls Barkley | Crazy": 1741403966, "Plain White T's | Hey There Delilah": 1443175247, "Adele | Make You Feel My Love": 1545382976, "50 Cent | Candy Shop": 1444007299, "Train | Drops of Jupiter (Tell Me)": 311629509, "Katy Perry | I Kissed a Girl": 715891620, "NSYNC | Bye Bye Bye": 303171368, "Britney Spears | Gimme More": 686780571, "Nelly Furtado | Maneater": 1442463828, "Britney Spears | Oops!... I Did It Again": 267954487, "Alicia Keys | No One": 273048082, "Ne-Yo | So Sick": 1440783502, "Black Eyed Peas | Meet Me Halfway": 1440769131, "Gorillaz | Clint Eastwood": 884147521, "Lady Gaga | Telephone": 1440814438, "Sean Kingston | Beautiful Girls": 275820157, "Owl City | Fireflies": 1440783289, "Leona Lewis | Bleeding Love": 345289046, "Taylor Swift | Love Story": 1552791427, "James Blunt | You're Beautiful": 714601673, "Alicia Keys & Usher | My Boo": 386153729, "Rihanna | Disturbia": 1441154571, "Kelly Clarkson | Since U Been Gone": 275765380, "Panic! At the Disco | I Write Sins Not Tragedies": 150052680, "Estelle | American Boy": 1712041678, "Nelly Furtado | Say It Right": 1442464133, "Akon | Lonely": 1446019275, "Rihanna | Pon de Replay": 1440867324, "Justin Timberlake | Rock Your Body": 252606598, "Gwen Stefani | The Sweet Escape": 1455390118, "Ne-Yo | Miss Independent": 1445834188, "Jay Sean | Down": 1445002842, "Kylie Minogue | Can't Get You Out of My Head": 699920365, "OneRepublic | Apologize": 1440749959, "Rihanna | Take a Bow": 1441154580, "t.A.T.u. | All The Things She Said": 1440812361, "Mike Posner | Cooler Than Me": 345373429, "Modjo | Lady (Hear Me Tonight)": 692624266, "Daft Punk | One More Time": 703078823, "Mariah Carey | We Belong Together": 1476731889, "The Temper Trap | Sweet Disposition": 1771693670, "Cascada | Everytime We Touch": 1836432106, "Mariah Carey | Obsessed": 1440493525, "Mary J. Blige | Family Affair": 1440817530, "Adele | Chasing Pavements": 1545376345, "Britney Spears | Womanizer": 686780576, "Mark Ronson | Valerie": 259214627, "Sophie Ellis-Bextor | Murder on the Dancefloor": 1445119897, "Jason Derulo | Whatcha Say": 353554372, "Miley Cyrus | The Climb": 1440632860, "Rihanna | Rude Boy": 1440775739, "Beyoncé | Irreplaceable": 296790943, "Kelly Clarkson | Because of You": 275765399, "Beyoncé | Single Ladies (Put a Ring on It)": 296016899, "Taylor Swift | You Belong with Me": 1440925035, "Gwen Stefani | Hollaback Girl": 1491226770, "Florence + the Machine | You've Got The Love": 1470594155, "The Pussycat Dolls | Don't Cha": 1455130399, "P!nk | So What": 293000132, "OneRepublic | Secrets": 1440734639, "Akon | Right Now (Na Na Na)": 1440742169, "Carrie Underwood | Before He Cheats": 214696369, "Taio Cruz | Break Your Heart": 1443147099, "Justin Timberlake | My Love": 303099934, "Justin Timberlake | Cry Me a River": 252606592, "Sean Paul | Get Busy": 1652782418, "Cassie | Me & U": 171980163, "Gorillaz | DARE": 850571388, "Beyoncé | If I Were a Boy": 296016892, "Keane | Everybody's Changing": 1729803660, "Shaggy | Angel": 1440745528, "Colbie Caillat | Bubbly": 1440745635, "Lady Gaga | Alejandro": 1476727671, "Alicia Keys | Fallin'": 256937038, "Mario Winans | I Don't Wanna Know": 1131822399, "Ne-Yo | Because of You": 1440757476, "Vanessa Carlton | A Thousand Miles": 1440865959, "Ciara | 1, 2 Step": 1769555440, "Chris Brown | With You": 275904556, "Madonna | Hung Up": 91989806, "The Fray | You Found Me": 301537185, "Natasha Bedingfield | Pocketful of Sunshine": 1429194116, "Norah Jones | Don't Know Why": 1625058461, "Amy Winehouse | Rehab": 1422677781, "Lady Gaga | LoveGame": 1440818656, "David Guetta | When Love Takes Over": 693255018, "Avril Lavigne | Girlfriend": 881915809, "Eve | Let Me Blow Ya Mind": 1553998006, "Rihanna | SOS": 1472000531, "Britney Spears | Circus": 686780578, "R. Kelly | Ignition (Remix)": 283567745, "John Mayer | Your Body Is a Wonderland": 283699774, "The Pussycat Dolls | Buttons": 1440762733, "Edward Maya & Vika Jigulina | Stereo Love": 351996346, "Justin Timberlake | What Goes Around... Comes Around": 1441492959, "Akon | Don't Matter": 1453088780, "José González | Heartbeats": 828118037, "Backstreet Boys | Shape of My Heart": 303171282, "Black Eyed Peas | Rock That Body": 1440769123, "Robbie Williams | Feel": 727506071, "Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade": 1440845801, "Lily Allen | Smile": 726141811, "Sara Bareilles | Love Song": 258604737, "John Mayer | Waiting On the World to Change": 184335560, "Alexander Rybak | Fairytale": 1438988564, "Alex Gaudino | Destination Calabria": 1512944769, "Black Eyed Peas | Boom Boom Pow": 1443060256, "OneRepublic | Good Life": 1461280616, "Chris Brown | Run It!": 202883800, "Madonna | 4 Minutes": 1874757117, "Mika | Grace Kelly": 1440763492, "Justin Bieber | One Time": 1440616468, "Rihanna | Hate That I Love You": 1441154563, "Rihanna | Shut Up And Drive": 1441154562, "Alicia Keys | Empire State of Mind (Part II) Broken Down": 1635638288, "Ashanti | Foolish": 1444119831, "Gwen Stefani | Rich Girl": 1452917847, "Nelly Furtado | I'm Like a Bird": 1440781293, "Coldplay | In My Place": 1122776153, "Bob Sinclar | World Hold On (Children of the Sky)": 1733047520, "Avril Lavigne | I'm with You": 315025828, "The Pussycat Dolls | Stickwitu": 1440762527, "P!nk | Who Knew": 298582189, "Coldplay | Trouble": 1122782284, "Usher | U Remind Me": 268532453, "Jennifer Lopez | Jenny from the Block": 190849540, "Shakira & Beyoncé | Beautiful Liar": 261707058, "Beyoncé | Baby Boy": 201274944, "Chris Brown | Yo (Excuse Me Miss)": 323098607, "Usher | Love in This Club": 281698335, "Black Eyed Peas | Let's Get It Started": 1445664971, "Ne-Yo | Closer": 1445834051, "Sean Kingston | Fire Burning": 312051360, "Taylor Swift | Our Song": 1440914010, "Chris Brown | Kiss Kiss": 267264869, "La Roux | Bulletproof": 1440747711, "Rihanna | Unfaithful": 1440866698, "Kevin Lyttle | Turn Me On": 6337732, "Uncle Kracker | Follow Me": 262071200, "Enya | Only Time": 96216872, "Ne-Yo | Mad": 1445834180, "Craig David | 7 Days": 1207938311, "Beyoncé | Diva": 296016901, "Nelly Furtado & James Morrison | Broken Strings": 1442913134, "*NSYNC | It's Gonna Be Me": 303171383, "Beyoncé | Sweet Dreams": 296016902, "Enrique Iglesias | Hero": 1440914005, "Akon | Beautiful": 1440742395, "Duffy | Mercy": 1440746199, "Usher | U Got It Bad": 268532564, "3OH!3 | DONTTRUSTME": 287413483, "O-Zone | Dragostea Din Tei": 1719518261, "James Blunt | Goodbye My Lover": 714601676, "The Pussycat Dolls | When I Grow Up": 1443787006, "Michael Bublé | Haven't Met You Yet": 668403662, "Coldplay | Speed of Sound": 1123076830, "Usher | Burn": 1765605482, "Gorillaz | Dirty Harry": 850571369, "D12 | My Band": 1444193152, "Metro Station | Shake It": 263685000, "Blu Cantrell | Breathe": 1727847455, "JoJo | Too Little Too Late": 1816084448, "Christina Aguilera | Beautiful": 279647290, "Mariah Carey | Touch My Body": 989380808, "Robbie Williams | Rock DJ": 724201567, "Justin Timberlake | Summer Love": 187666991, "Akon | Locked Up": 1443624549, "Kelly Clarkson | Breakaway": 275765378, "Leona Lewis | Better in Time": 1071014624, "Junior Senior | Move Your Feet": 1445169178, "Black Eyed Peas | Imma Be": 1445154093, "Beyoncé | Naughty Girl": 201274830, "Avril Lavigne | My Happy Ending": 306669121, "Westlife | My Love": 255641254, "Britney Spears | I'm a Slave 4 U": 273143828, "Jonas Brothers | Burnin' Up": 1672144743, "Ciara | Goodies": 302992638, "James Blunt | 1973": 714586430, "Avril Lavigne | When You're Gone": 268993517, "*NSYNC | This I Promise You": 303171501, "Britney Spears | If U Seek Amy": 990422395, "Blu Cantrell | Hit 'Em Up Style (Oops!)": 255286939, "P!nk | Get the Party Started": 400673114, "Las Ketchup | The Ketchup Song (Aserejé)": 1362217175, "Usher | Confessions Part II": 1765605477, "Ed Sheeran | Shape of You": 1193700767, "The Neighbourhood | Sweater Weather": 635016640, "The Weeknd | Starboy": 1440870375, "Drake | One Dance": 1440841384, "Post Malone & Swae Lee | Sunflower": 1445949267, "Lewis Capaldi | Someone You Loved": 1452619054, "Ed Sheeran | Perfect": 1193700769, "Imagine Dragons | Believer": 1411628233, "Vance Joy | Riptide": 1022164261, "The Chainsmokers | Closer": 1170699703, "The Chainsmokers & Coldplay | Something Just Like This": 1207120448, "Tom Odell | Another Love": 719002824, "James Arthur | Say You Won't Let Go": 1147252591, "OneRepublic | Counting Stars": 1440854619, "Hozier | Take Me to Church": 923529775, "Ed Sheeran | Photograph": 1766261269, "Macklemore & Ryan Lewis | Can't Hold Us": 560148920, "Bruno Mars | Locked Out of Heaven": 573962551, "Tones and I | Dance Monkey": 1475930045, "Bruno Mars | Just the Way You Are": 576655095, "Taylor Swift | Cruel Summer": 1468058171, "Post Malone | rockstar": 1373506170, "The Weeknd & Ariana Grande | Die For You": 1440872304, "Shawn Mendes & Camila Cabello | Señorita": 1468910018, "Bruno Mars | That's What I Like": 1161504043, "Justin Bieber | Love Yourself": 1440826328, "Dua Lipa | Don't Start Now": 1484636829, "Bruno Mars | When I Was Your Man": 573962555, "Post Malone | Circles": 1477880561, "Avicii | Wake Me Up": 1440872929, "DJ Snake | Let Me Love You": 1440867817, "Travis Scott | goosebumps": 1151481750, "Ed Sheeran | Thinking Out Loud": 858518134, "Juice Wrld | Lucid Dreams": 1447177630, "John Legend | All of Me": 1441844542, "Kendrick Lamar, SZA | All the Stars": 1440903307, "Drake | God's Plan": 1406109863, "twenty one pilots | Stressed Out": 974485474, "Lady Gaga & Bradley Cooper | Shallow": 1434371887, "The Weeknd | The Hills": 1440858495, "Shawn Mendes | Treat You Better": 1440904109, "Imagine Dragons | Demons": 1440873339, "Imagine Dragons | Thunder": 1411629089, "Justin Bieber | Sorry": 1440826320, "French Montana | Unforgettable": 1254531914, "Shawn Mendes | There's Nothing Holdin' Me Back": 1440892573, "Kendrick Lamar | Humble": 1440882165, "Billie Eilish | bad guy": 1450695739, "Ariana Grande | 7 rings": 1450334168, "Passenger | Let Her Go": 1623014090, "Maroon 5 | Payphone": 1422675690, "Major Lazer & DJ Snake | Lean On": 1696639397, "Mark Ronson | Uptown Funk": 943946671, "Calvin Harris & Dua Lipa | One Kiss": 1364709436, "Charlie Puth | We Don't Talk Anymore": 1031416185, "One Direction | Night Changes": 1692243270, "Adele | Someone Like You": 1544491998, "Marshmello & Bastille | Happier": 1711849667, "Rihanna | We Found Love": 1440758945, "Travis Scott | Sicko Mode": 1421658123, "Charlie Puth | Attention": 1293229677, "Shawn Mendes | Stitches": 1440843848, "Dua Lipa | New Rules": 6772180432, "Zara Larsson | Lush Life": 1201058113, "Lukas Graham | 7 Years": 1081573445, "Taylor Swift | Blank Space": 1708308993, "Foster the People | Pumped Up Kicks": 435761212, "Gotye | Somebody That I Used to Know": 1440754487, "Sam Smith | I'm Not the Only One": 1440814433, "Halsey | Without Me": 1481418646, "Sam Smith | Stay with Me": 1440814425, "Sam Smith | Too Good at Goodbyes": 1440900165, "Billie Eilish | when the party's over": 1450695872, "Camila Cabello | Havana": 1321217032, "Maroon 5 | Memories": 1571176664, "Wiz Khalifa | See You Again": 966411602, "Maroon 5 | Maps": 1440842752, "Mike Posner | I Took a Pill in Ibiza": 1442858354, "Avicii | The Nights": 1440829549, "The Weeknd | Call Out My Name": 1363308560, "The Chainsmokers | Don't Let Me Down": 1170699706, "Adele | Rolling in the Deep": 1544491233, "Coldplay | A Sky Full of Stars": 829910927, "Alan Walker | Faded": 1196294581, "Lana Del Rey | Summertime Sadness": 1440812085, "Walk the Moon | Shut Up and Dance": 1473891823, "Harry Styles | Sign of the Times": 1226034393, "Adele | Set Fire to the Rain": 1544491988, "David Guetta | Titanium": 693226464, "Maroon 5 | Sugar": 1440829431, "LAUV | I Like Me Better": 1771702162, "Calvin Harris | This Is What You Came For": 1108212668, "Drake | Passionfruit": 1440892167, "Christina Perri | A Thousand Years": 467967170, "twenty one pilots | Ride": 974485805, "Imagine Dragons | Radioactive": 1440873126, "Eminem | Love the Way You Lie": 1637717485, "Sia | Chandelier": 882945383, "Travis Scott | Highest in the Room": 1482217453, "Justin Bieber | Beauty And A Beat": 1440650961, "Måneskin | Beggin'": 1320781379, "Ariana Grande | thank u, next": 1450334169, "Twenty One Pilots | Heathens": 1125281487, "Rihanna | Love On The Brain": 1443231420, "Post Malone | Better Now": 1373506180, "The Weeknd | I Feel It Coming": 1440872309, "OMI | Cheerleader": 1141509249, "Pitbull | Give Me Everything": 1712042664, "Zayn | Dusk Till Dawn": 1531016360, "Maroon 5 | Moves like Jagger": 1440855997, "Miguel | Sure Thing": 439618071, "Pitbull & Kesha | Timber": 1307027311, "MAGIC! | Rude": 881629103, "The Weeknd | Can't Feel My Face": 1440858500, "Ed Sheeran & Justin Bieber | I Don't Care": 1464549844, "The Weeknd | Earned It": 1440845641, "Justin Bieber | What Do You Mean?": 1440829606, "Ariana Grande | One Last Time": 1440852679, "Luis Fonsi & Daddy Yankee | Despacito": 1447401620, "5 Seconds of Summer | Youngblood": 1369109665, "Zayn and Taylor Swift | I Don't Wanna Live Forever": 1440880860, "Sia | Cheap Thrills": 1055074640, "SAINt JHN | Roses": 1711846986, "Ava Max | Sweet but Psycho": 1538214889, "Carly Rae Jepsen | Call Me Maybe": 1442997912, "Benny Blanco, Halsey and Khalid | Eastside": 1445073665, "Ariana Grande | Into You": 1440843926, "Bastille | Pompeii": 715531601, "DNCE | Cake by the Ocean": 1440867865, "Justin Timberlake | Can't Stop the Feeling!": 1154239184, "P!nk | Just Give Me a Reason": 633431899, "Khalid | Young Dumb & Broke": 1200868874, "Katy Perry | Dark Horse": 1440871474, "The Script | Hall of Fame": 563641976, "Maroon 5 | Animals": 1440855552, "Katy Perry | Last Friday Night (T.G.I.F.)": 716192614, "Bruno Mars | Grenade": 576655094, "Rihanna | Stay": 1417177313, "Pitbull & Ne-Yo | Time of Our Lives": 938014004, "Rihanna | Diamonds": 1444321282, "Rihanna | Only Girl (In the World)": 1472173443, "Coldplay | Hymn for the Weekend": 1053934844, "Bruno Mars | 24K Magic": 1161504024, "Clean Bandit | Rockabye": 1418704737, "Lil Tecca | Ransom": 1468508848, "One Direction | Story of My Life": 695312371, "One Direction | What Makes You Beautiful": 481400053, "Clean Bandit | Symphony": 1436738923, "Panic! At the Disco | High Hopes": 1361152303, "Calvin Harris | Outside": 922876187, "Taylor Swift | Shake It Off": 1708309002, "Katy Perry | The One That Got Away": 716192666, "Ariana Grande | Side to Side": 1440835649, "Capital Cities | Safe and Sound": 1766005715, "Rihanna | Needed Me": 1440925067, "Marshmello | Silence": 1268152499, "Coldplay | Paradise": 726373148, "Clean Bandit | Rather Be": 1027563268, "Major Lazer | Cold Water": 1694794945, "Gym Class Heroes | Stereo Hearts": 477341015, "Chris Brown | Under the Influence": 1481598829, "Trevor Daniel | Falling": 1574967276, "Anne-Marie | 2002": 1351247438, "Taylor Swift | Style": 1440933520, "Dua Lipa | IDGAF": 1228742329, "Sean Paul | No Lie": 1444609119, "Maroon 5 | Girls Like You": 1381582728, "Avicii | Waiting For Love": 1440834312, "Ellie Goulding | Love Me like You Do": 1440900325, "Adele | Hello": 1544494392, "Alessia Cara | Scars To Your Beautiful": 1440827194, "Khalid | Better": 1438904353, "Pharrell Williams | Happy": 652255046, "Zedd, Maren Morris and Grey | The Middle": 1444896450, "Martin Garrix & Bebe Rexha | In the Name of Love": 1137641426, "Portugal. The Man | Feel It Still": 1229315050, "Zayn | Pillowtalk": 1087165979, "Justin Bieber | Baby": 1472491703, "Kygo & Selena Gomez | It Ain't Me": 1444631771, "Fifth Harmony | Work from Home": 1087454868, "Rihanna | Work": 1443231169, "MKTO | Classic": 853842868, "Shawn Mendes | Mercy": 1440892706, "Imagine Dragons | Whatever It Takes": 1411628148, "Dynoro & Gigi D'Agostino | In My Mind": 1390113209, "Jessie J & Ariana Grande & Nicki Minaj | Bang Bang": 1444896442, "Bruno Mars | It Will Rain": 467967161, "Sam Smith & Normani | Dancing with a Stranger": 1447334978, "Lil Nas X | Old Town Road": 1468166468, "Coldplay | Adventure of a Lifetime": 1053934846, "fun. | We Are Young": 486040195, "Ariana Grande | Dangerous Woman": 1440843916, "Calvin Harris | Feel So Close": 450132719, "Adele | When We Were Young": 1544494407, "Jonas Brothers | Sucker": 1461478389, "Justin Timberlake | Mirrors": 618261614, "Khalid | Location": 1200868875, "Ed Sheeran | Castle on the Hill": 1193701328, "George Ezra | Budapest": 947999963, "Ed Sheeran | Galway Girl": 1193701436, "Disclosure | Latch": 1471695442, "Katy Perry | Firework": 716192625, "Regard | Ride It": 1472026722, "Ariana Grande | No Tears Left to Cry": 1399204228, "Katy Perry | Roar": 1440871461, "Major Lazer | Light It Up": 1694819217, "Imagine Dragons | Natural": 1437948973, "Duncan Laurence | Arcade": 1541621470, "Bebe Rexha | Meant to Be": 1251713725, "Gnash | I Hate U, I Love U": 1099849073, "Ed Sheeran | Beautiful People": 1464549657, "Selena Gomez & Marshmello | Wolves": 1445055017, "Swedish House Mafia | Don't You Worry Child": 6798736833, "Calum Scott | Dancing On My Own": 1428795504, "Ariana Grande & The Weeknd | Love Me Harder": 1440825283, "Lorde | Royals": 1594982922, "The Chainsmokers | Paris": 1207120538, "Usher | DJ Got Us Fallin' in Love": 923691611, "Bruno Mars | The Lazy Song": 576670462, "Ed Sheeran | Happier": 1193701439, "Selena Gomez | Lose You to Love Me": 1488413376, "Lilly Wood & The Prick | Prayer In C": 931886796, "Lana Del Rey | Video Games": 1779781782, "Lost Frequencies | Are You With Me": 1155693691, "The Chainsmokers | Roses": 1050203620, "Bruno Mars | Treasure": 581806439, "Icona Pop | I Love It": 821412562, "Calvin Harris | My Way": 1153704956, "Taylor Swift | Look What You Made Me Do": 1440934255, "Maroon 5 | What Lovers Do": 1396141904, "Blackbear | Hot Girl Bummer": 1576025375, "Loud Luxury | Body": 1296233048, "Zedd and Alessia Cara | Stay": 1445043157, "R. City | Locked Away": 1031371163, "Tove Lo | Habits (Stay High)": 1443337632, "Maroon 5 | One More Night": 1440808310, "One Direction | Drag Me Down": 1040195238, "Of Monsters and Men | Little Talks": 1440809330, "Kungs & Cookin' On 3 Burners | This Girl (Kungs Vs. Cookin' On 3 Burners)": 1440894921, "Katy Perry | California Gurls": 716084621, "James Bay | Let It Go": 1440840292, "Lewis Capaldi | Bruises": 1452618894, "JP Saxe | If the World Was Ending": 1482468337, "Selena Gomez & The Scene | Love You Like A Love Song": 1440619218, "Kygo | Firestone": 1713785280, "Rag'n'Bone Man | Human": 1202354334, "American Authors | Best Day Of My Life": 1440851075, "Rihanna and Kanye West and Paul McCartney | FourFiveSeconds": 1445170918, "Taylor Swift | Delicate": 1440934254, "Jonas Blue | Fast Car": 1437812225, "Adele | Send My Love (To Your New Lover)": 1544494394, "Meghan Trainor | Like I'm Gonna Lose You": 929825619, "Miley Cyrus | We Can't Stop": 1692243715, "James Arthur & Anne-Marie | Rewrite The Stars": 1439343414, "Avicii | Levels": 1440787349, "Chris Brown | No Guidance": 1466874531, "Mr Probz | Waves (Robin Schulz Remix)": 1532427385, "Dominic Fike | 3 Nights": 1438243871, "Jack Ü, Skrillex & Diplo | Where Are Ü Now": 971262282, "Avicii | Hey Brother": 1440873108, "DJ Snake | Middle": 1440867457, "Miley Cyrus | Wrecking Ball": 1635638289, "Ariana Grande | God Is a Woman": 1399203750, "One Direction | Steal My Girl": 914556572, "Sia | Elastic Heart": 882945393, "Hailee Steinfeld & Grey | Starving": 1444891951, "Ariana Grande | Break Free": 1440852687, "Rihanna | Where Have You Been": 1443105353, "Jonas Blue | Perfect Strangers": 1437811945, "Mark Ronson | Nothing Breaks Like a Heart": 1459276883, "Jason Derulo | Swalla": 1205573619, "Nico & Vinz | Am I Wrong": 1180381817, "Clean Bandit | Solo": 1436738925, "One Direction | Perfect": 1040171617, "Jason Derulo | Want to Want Me": 982388023, "Jennifer Lopez | On the Floor": 1440622264, "Demi Lovato | Sorry Not Sorry": 1405206203, "Lady Gaga | Judas": 1440857433, "Julia Michaels | Issues": 1440909761, "Demi Lovato | Heart Attack": 1440620921, "Katy Perry | Teenage Dream": 716192601, "Taylor Swift | Wildest Dreams": 1440936036, "Calvin Harris, Sam Smith | Promises": 1424362622, "Sean Kingston & Justin Bieber | Eenie Meenie": 359966562, "Niall Horan | This Town": 1445036388, "Selena Gomez | Back To You": 1381915969, "A Great Big World | Say Something": 735301552, "Camila Cabello | Never Be the Same": 1321217021, "James Arthur | Impossible": 932559132, "Kygo & Whitney Houston | Higher Love": 1469941840, "Zara Larsson and MNEK | Never Forget You": 1201058123, "Shawn Mendes | If I Can't Have You": 1474313954, "Demi Lovato | Cool for the Summer": 1440647805, "Ed Sheeran | The A Team": 448213995, "Taylor Swift | I Knew You Were Trouble.": 1590368455, "Ariana Grande | Problem": 1440825196, "Galantis | Runaway (U & I)": 984746629, "George Ezra | Shotgun": 1331589486, "Billie Eilish | bury a friend": 1450695881, "Neon Trees | Everybody Talks": 1597386444, "Pitbull | Feel This Moment": 737053272, "P!nk | Try": 545398138, "Ariana Grande | Break Up with Your Girlfriend, I'm Bored": 1450334170, "Lorde | Team": 1440818672, "Charlie Puth | One Call Away": 1031416179, "Lana Del Rey | Born To Die": 1440811598, "Taylor Swift | You Need to Calm Down": 1468058704, "Mabel | Don't Call Me Up": 1447869530, "Becky G | Shower": 868199261, "Liam Payne | Strip That Down": 1445039161, "Maroon 5 | Don't Wanna Know": 1396141925, "Meduza & Goodboys | Piece Of Your Heart": 1449911564, "Ariana Grande & Social House | boyfriend": 1474641583, "Robin Thicke | Blurred Lines": 1443274106, "Will.i.am | Scream & Shout": 1442823431, "John Newman | Love Me Again": 1444895206, "Flume | Never Be Like You": 1881366664, "Black Eyed Peas and J Balvin | Ritmo (Bad Boys for Life)": 1495128542, "Paloma Faith | Only Love Can Hurt Like This": 907280894, "Naughty Boy | La La La": 1443257774, "Surfaces | Sunday Best": 1711402500, "Jonas Blue | Mama": 1437811943, "Lizzo | Truth Hurts": 1498195354, "Kesha | Die Young": 582983250, "Fifth Harmony | Worth It": 909767585, "Sam Smith | How Do You Sleep?": 1471596298, "Niall Horan | Slow Hands": 1444891331, "The Wanted | Glad You Came": 1443293784, "Ellie Goulding | Burn": 1440819532, "LMFAO | Party Rock Anthem": 1443158235, "SZA | Love Galore": 1239977713, "Train | Drive By": 1438078577, "Rachel Platten | Fight Song": 1061182684, "Jason Mraz | I Won't Give Up": 509536631, "Taylor Swift | ...Ready For It?": 1440934248, "Halsey | Bad At Love": 1440880507, "Starley | Call on Me": 1134770095, "David Guetta | Hey Mama": 924568962, "P!nk | What About Us": 1269268841, "Galantis | No Money": 1257259293, "Rihanna | Bitch Better Have My Money": 985890936, "Lewis Capaldi | Hold Me While You Wait": 1452619052, "Shawn Mendes | In My Blood": 1376115725, "Bruno Mars | Finesse": 1161504065, "Keala Settle & The Greatest Showman Ensemble | This Is Me": 1436091877, "Travie McCoy | Billionaire": 374385942, "X Ambassadors | Renegades": 1440816490, "Jonas Blue | Rise": 1383852262, "Far East Movement | Like a G6": 1442933060, "Sam Smith | Like I Can": 1440814661, "Taylor Swift | Me!": 1468058706, "Meghan Trainor | All About That Bass": 1791794659, "Black Eyed Peas | Just Can't Get Enough": 1440772193, "Deorro & Chris Brown | Five More Hours": 1214121047, "Selena Gomez | Good for You": 1440836811, "Ruth B. | Lost Boy": 1219506533, "AWOLNATION | Sail": 422478211, "Tiësto & Dzeko | Jackie Chan": 1382339701, "Pitbull | International Love": 440733046, "LAUV & Troye Sivan | i'm so tired...": 1480846933, "Jason Derulo | Talk Dirty": 840493983, "Imagine Dragons | It's Time": 1440873335, "Maroon 5 | Cold": 1396142232, "David Guetta | Where Them Girls At": 693224810, "CNCO & Little Mix | Reggaetón Lento (Bailemos)": 1353933557, "Alexandra Stan | Mr. Saxobeat": 1712539392, "Years & Years | King": 1440842654, "5 Seconds of Summer | She Looks So Perfect": 1440857725, "P!nk | Raise Your Glass": 881915788, "Mumford & Sons | I Will Wait": 1771725015, "David Guetta | 2U": 1445023444, "Rixton | Me And My Broken Heart": 1443257264, "Alessia Cara | Here": 1440845747, "Miley Cyrus | Malibu": 1462327577, "Felix Jaehn | Ain't Nobody (Loves Me Better)": 1445288514, "Bazzi | Beautiful": 1419758422, "David Guetta | Play Hard": 693290786, "James Bay | Hold Back The River": 1440840120, "Charlie Puth | How Long": 1293230534, "Charlie Puth | Marvin Gaye": 1031416183, "Kelly Clarkson | Stronger (What Doesn't Kill You)": 464446141, "Alicia Keys | Girl on Fire": 1635638720, "Ed Sheeran | Dive": 1193701329, "Zedd | Clarity": 1440861976, "Ed Sheeran | South of the Border": 1464549675, "Katy Perry | Wide Awake": 716085504, "Tove Lo | Talking Body": 1443219393, "Alesso | Heroes (we could be)": 1440859014, "Ed Sheeran | Don't": 1050204624, "Dua Lipa | Be the One": 1228739603, "Jessie J | Price Tag": 1442259252, "Meghan Trainor | NO": 1089260138, "Little Mix | Secret Love Song": 1016217552, "Avicii | SOS": 1462628897, "Ed Sheeran | Supermarket Flowers": 1193701511, "Fun | Some Nights": 601186061, "Jessie J | Domino": 1440809113, "Lady Gaga | Born This Way": 1440824264, "Little Mix | Shout Out to My Ex": 1594440592, "Owl City and Carly Rae Jepsen | Good Time": 1440807030, "Little Mix | Black Magic": 1016217388, "Martin Jensen | Solo Dance": 1712926057, "Adele | Water Under the Bridge": 1544494722, "Lady Gaga | Bloody Mary": 1440857734, "Lady Gaga | Applause": 1451768063, "Justin Bieber | Boyfriend": 1440650857, "Taylor Swift | We Are Never Ever Getting Back Together": 1440935564, "One Direction | Best Song Ever": 695318301, "Katy Perry | Part of Me": 716085475, "The Weeknd | Blinding Lights": 1499378607, "Harry Styles | As It Was": 1615585008, "The Kid LAROI & Justin Bieber | STAY": 1574968888, "Lady Gaga & Bruno Mars | Die With A Smile": 1762656732, "Billie Eilish | BIRDS OF A FEATHER": 1739659142, "Glass Animals | Heat Waves": 1508562516, "Harry Styles | Watermelon Sugar": 1485802967, "Sabrina Carpenter | Espresso": 1752214923, "Benson Boone | Beautiful Things": 1724488124, "Jung Kook | Seven": 1709555102, "Miley Cyrus | Flowers": 1674691586, "Djo | End of Beginning": 1632448108, "Olivia Rodrigo | drivers license": 1560735480, "SZA | Kill Bill": 1657869393, "The Weeknd | Save Your Tears": 1499386369, "Elton John & Dua Lipa | Cold Heart": 1652668531, "Olivia Rodrigo | good 4 u": 1582277652, "Dua Lipa | Levitating": 1538003843, "Teddy Swims | Lose Control": 1691699836, "ROSÉ & Bruno Mars | APT.": 1773452221, "Adele | Easy On Me": 1590036021, "Jimin | Who": 1751773093, "David Guetta & Bebe Rexha | I'm Good (Blue)": 1678878113, "Doja Cat | Kiss Me More": 1573475847, "Lewis Capaldi | Before You Go": 1485384412, "Olivia Rodrigo | traitor": 1560735421, "Olivia Rodrigo | deja vu": 1560735847, "OneRepublic | I Ain't Worried": 1621817894, "Justin Bieber | Ghost": 1556170100, "Lil Nas X & Jack Harlow | INDUSTRY BABY": 1577414972, "Tate McRae | greedy": 1719661252, "BTS | Dynamite": 1596532400, "Billie Eilish | WILDFLOWER": 1739659144, "Chappell Roan | Good Luck, Babe!": 1737497080, "sombr | back to friends": 1786481197, "Doja Cat | Woman": 1573475829, "Gigi Perez | Sailor Song": 1770187510, "Ed Sheeran | Bad Habits": 1571330212, "Alex Warren | Ordinary": 1793663645, "24kGoldn | Mood": 1559066401, "Lil Nas X | MONTERO (Call Me By Your Name)": 1559318719, "Harry Styles | Adore You": 1485802970, "Billie Eilish | Everything I Wanted": 1487502476, "Ariana Grande | we can't be friends (wait for your love)": 1725913689, "Ed Sheeran | Shivers": 1581087034, "Hozier | Too Sweet": 1735414394, "Powfu | death bed (coffee for your head)": 1498128769, "Taylor Swift | cardigan": 1524801580, "SZA | Snooze": 1658650499, "Mitski | My Love Mine All Mine": 1697335814, "Imagine Dragons | Enemy": 1591640885, "Taylor Swift | Anti-Hero": 1649434293, "Justin Bieber | Peaches": 1556170101, "Sabrina Carpenter | Please Please Please": 1752214912, "Sam Smith & Kim Petras | Unholy": 1643168566, "Rema & Selena Gomez | Calm Down": 1640501238, "Eminem | Godzilla": 1495269629, "Noah Kahan | Stick Season": 1689825330, "Billie Eilish | Happier Than Ever": 1584262469, "Gracie Abrams | That's So True": 1775581103, "Joji | Glimpse of Us": 1776748883, "Steve Lacy | Bad Habit": 6788150545, "Silk Sonic | Leave the Door Open": 1612867242, "Metro Boomin, the Weeknd and 21 Savage | Creepin'": 1657584259, "DaBaby | Rockstar": 1508028869, "Shaboozey | A Bar Song (Tipsy)": 1749591722, "Ariana Grande | positions": 1537486846, "Lost Frequencies & Calum Scott | Where Are You Now": 1576395046, "Olivia Rodrigo | vampire": 1736995100, "SZA | Good Days": 1658650802, "Taylor Swift | The Fate of Ophelia": 6814997402, "The Weeknd and Playboi Carti | Timeless": 1793702853, "Billie Eilish | What Was I Made For?": 1689239800, "Jvke | Golden Hour": 1640157165, "Doja Cat | Streets": 1486465107, "Kendrick Lamar & SZA | luther": 1781270323, "Coldplay & BTS | My Universe": 1576350174, "Stephen Sanchez | Until I Found You": 1581702085, "Artemas | I Like the Way You Kiss Me": 1736426869, "Doja Cat | Paint The Town Red": 1699832214, "Post Malone | I Had Some Help": 1744452425, "Giveon | Heartbreak Anniversary": 1499127838, "Sabrina Carpenter | Taste": 1750307079, "Cardi B | WAP": 1822585609, "Internet Money, Gunna & Don Toliver | Lemonade": 1711563495, "Dua Lipa | Break My Heart": 1538004012, "Lil Mosey | Blueberry Faygo": 1497581631, "Future | Life Is Good": 1513389478, "Ravyn Lenae | Love Me Not": 1743852427, "Doja Cat | Need to Know": 1573475837, "BTS | Butter": 1627575769, "Ariana Grande & Justin Bieber | Stuck with U": 1511562950, "Tyla | Water": 1699082734, "Justin Bieber | Intentions": 1496639586, "Olivia Dean | Man I Need": 1817609509, "Doja Cat | Say So": 1486465101, "Tiësto | The Business": 1532019310, "The Weeknd & Madonna | Popular": 1727173441, "Nicky Youre & dazy | Sunroof": 1689433299, "Joel Corry | Head & Heart": 1518804165, "Ava Max | Kings & Queens": 1538214605, "Drake | Jimmy Cooks": 1630221907, "Dua Lipa | Dance the Night": 1689238922, "RAYE | Escapism.": 1668176885, "SZA | Nobody Gets Me": 1658650791, "Chappell Roan | Pink Pony Club": 1675173768, "Lola Young | Messy": 1746042186, "Billie Eilish | CHIHIRO": 1739659141, "Dua Lipa | Physical": 1538003644, "Taylor Swift | All Too Well": 1440935561, "Lady Gaga & Ariana Grande | Rain On Me": 1500952424, "The Marías | No One Noticed": 1733731157, "The Weeknd | Heartless": 1499386253, "Myles Smith | Stargazing": 1742275653, "Topic & A7S | Breaking Me": 1490348552, "Riton & Nightcrawlers | Friday": 1544962737, "Taylor Swift | Fortnight": 1736268216, "Lil Nas X | THAT'S WHAT I WANT": 1586182264, "SZA | Saturn": 1732348414, "Ariana Grande | 34+35": 1537486672, "Lana Del Rey | Say Yes To Heaven": 1688315813, "Harry Styles | Late Night Talking": 1615585006, "Marshmello & Jonas Brothers | Leave Before You Love Me": 1568213204, "Gracie Abrams | I Love You, I'm Sorry": 1770861177, "Doja Cat and the Weeknd | You Right": 1577637135, "Sabrina Carpenter | Manchild": 1819377511, "Kenya Grace | Strangers": 1704393613, "Taylor Swift | exile": 1524793900, "Camila Cabello | Bam Bam": 1610834871, "Taylor Swift | willow": 1544276228, "Cassö & Raye | Prada": 1705910871, "Dua Lipa | Houdini": 1714502827, "Benson Boone | Slow It Down": 1736051616, "Olivia Dean | So Easy (To Fall in Love)": 1817609507, "Surf Mesa | ily (i love you baby)": 1500359571, "The Kid Laroi | Without You": 1579787427, "Raye | Where Is My Husband!": 1838737598, "Teddy Swims | The Door": 1691699849, "Taylor Swift | Karma": 1649435543, "Dua Lipa | Training Season": 1727526894, "Billie Eilish | LUNCH": 1739659140, "Justin Bieber | DAISIES": 1825994649, "Justin Bieber & benny blanco | Lonely": 1556170113, "Billie Eilish | Therefore I Am": 1564531181, "Lizzo | About Damn Time": 1634655870, "Beyoncé | CUFF IT": 1636790292, "Meghan Trainor | Made You Look": 1630437329, "Adam Port, Stryv & Malachiii | Move": 1749043132, "Chappell Roan | HOT TO GO!": 1707413105, "Tate McRae | Sports car": 1779319634, "Acraze | Do It To It": 1830183458, "Lizzy McAlpine | Ceilings": 1604657975, "Maroon 5 & Megan Thee Stallion | Beautiful Mistakes": 1570531973, "Teddy Swims | Bad Dreams": 1771020950, "Justin Bieber | Yummy": 1492502431, "Justin Bieber | Hold On": 1556175852, "Justin Bieber | Holy": 1531508507, "Taylor Swift | Lavender Haze": 1649435004, "Taylor Swift | Opalite": 6814997409, "Chris Brown and Young Thug | Go Crazy": 1512304640, "ATB, Topic & A7S | Your Love (9PM)": 1535123295, "Sabrina Carpenter | Bed Chem": 1750307088, "Jason Derulo | Take You Dancing": 1523536240, "James Hype & Miggy Dela Rosa | Ferrari": 1617280597, "Camila Cabello | My Oh My": 1487577497, "Lady Gaga | Abracadabra": 1837310871, "Taylor Swift | I Can Do It with a Broken Heart": 1742074914, "Tate McRae | exes": 1716470299, "Justin Bieber | Anyone": 1544839502, "Tiësto & Tate McRae | 10:35": 1690274412, "Meduza | Paradise": 1536062139, "Alex Warren | Carry You Home": 1745673617, "Michael Marcagi | Scared To Start": 1724272788, "Dove Cameron | Boyfriend": 1718578287, "Taylor Swift | the 1": 1528111837, "Billie Eilish | No Time To Die": 1498647654, "Ariana Grande | yes, and?": 1724584103, "Tate McRae | Just Keep Watching": 1810796703, "Olivia Rodrigo | bad idea right?": 1736995097, "THE ANXIETY, WILLOW & Tyler Cole | Meet Me At Our Spot": 1500096087, "Addison Rae | Diet Pepsi": 1760428041, "Tate McRae | she's all i wanna be": 1606052735, "Ariana Grande | pov": 1537486848, "Peggy Gou | (It Goes Like) Nanana": 1689088958, "Chrystal | The Days": 1771477810, "Shawn Mendes & Justin Bieber | Monster (Shawn Mendes & Justin Bieber)": 1533345332, "Post Malone | Chemical": 1681605996, "Doja Cat | Get Into It (Yuh)": 1577636701, "WizTheMc & Bees & Honey | Show Me Love": 6766874208, "Adele | Oh My God": 1590036031, "Drake | Nokia": 6814098030, "Ritt Momney | Put Your Records On": 1532090161, "LF System | Afraid to Feel": 1616903944, "Sienna Spiro | Die On This Hill": 1841769602, "SZA | Shirt": 1658650799, "Bruno Mars, Anderson .Paak & Silk Sonic | Smokin out the Window": 1611638138, "Joel Corry & Jax Jones | Out Out": 1579553005, "Halsey | You should be sad": 1481418641, "Benson Boone | Mystical Magical": 1807490820, "Billie Eilish | my future": 1564530943, "Carly Rae Jepsen | I Really Like You": 1833371784, "Taylor Swift | Is It Over Now?": 1708309430, "Kehlani | Folded": 1885055409, "NEIKED, Mae Muller & Polo G | Better Days (NEIKED x Mae Muller x Polo G)": 1585274082, "Olivia Dean | Nice to Each Other": 1814620247, "Noah Kahan & Post Malone | Dial Drunk": 1696597425, "Dua Lipa | We're Good": 1551179678, "Calvin Harris & Ellie Goulding | Miracle": 1673798699, "Becky Hill & David Guetta | Remember": 1570736952, "SZA | I Hate U": 1658650801, "Nicki Minaj and Ice Spice | Barbie World": 1689239206, "Nathan Evans, 220 Kid & Billen Ted | Wellerman": 1644665577, "Tate McRae | Revolving door": 1801831569, "Billie Eilish | Your Power": 1564531176, "AJR | Bang!": 1713833576, "Galantis, David Guetta & Little Mix | Heartbreak Anthem": 1740520900, "Lauren Spencer-Smith | Fingers Crossed": 1710436008, "Bl3ss & CamrinWatsin | Kisses": 1735803279, "Olivia Rodrigo | get him back!": 1694768053, "Joel Corry, Raye & David Guetta | Bed": 1552434656, "Taylor Swift | Down Bad": 1742074195, "Sabrina Carpenter | Tears": 1819861157, "YG Marley | Praise Jah in the Moonlight": 1723309988, "Taylor Swift | Snow on the Beach": 1645937258, "Ed Sheeran | Afterglow": 1545341251, "Beyoncé | BREAK MY SOUL": 1630005854, "Em Beihold | Numb Little Bug": 1633558383, "Ed Sheeran | Eyes Closed": 1766261548, "The Weeknd | Take My Breath": 1603164239, "Harry Styles | Music for a Sushi Restaurant": 1615585001, "Bruno Major | Nothing": 1500454362, "Paul Russell | Lil Boo Thang": 1702576701, "David Guetta, Becky Hill & Ella Henderson | Crazy What Love Can Do": 1614270485, "Sam Fender | Rein Me In": 1846589938, "Jax Jones & MNEK | Where Did You Go?": 1606770075, "Charli xcx | Apple": 1739080645};

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
