// Song pool, rebuilt from data (Oct 2026):
//  • A real hit = US Billboard year-end top 50, or UK top 5 (UK-only hits must have stayed 2+ weeks in the top 10,
//                  which filters out one-week "album bomb" entries) — or an undeniable classic by worldwide plays
//                  (≈1B+ Spotify plays for the 2000s, 2B+ for the 2010s, 1.5B+ for the 2020s).
//  • Known worldwide = at least ~150M Spotify plays (2000s), ~300M (2010s), ~200M (2020s) (kworb.net per-year lists).
//  • Pop focus = Apple's genre is pop / dance / R&B / indie-pop; rap, country, Latin, K-pop and rock only stay as
//                top-tier crossovers (charted in BOTH the US and UK, and over ~1.3–2 billion plays). No Christmas songs.
//  • Ranked by half chart strength, half worldwide plays.
// One song per line: Artist | Title | optional extra accepted artist names (separated by ;)
// Multiple main artists are joined with " & " — naming any one of them counts as correct.

const SONG_DATA = {
"00s": `
Coldplay | Yellow
Coldplay | Viva la Vida
The Killers | Mr. Brightside | Killers
Linkin Park | In the End
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
Avril Lavigne | Complicated
Shaggy | It Wasn't Me
Gnarls Barkley | Crazy
Plain White T's | Hey There Delilah
Adele | Make You Feel My Love
50 Cent | Candy Shop
Kings of Leon | Use Somebody
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
Taylor Swift | You Belong with Me
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
Gwen Stefani | Hollaback Girl
Florence + the Machine | You've Got The Love
The Pussycat Dolls | Don't Cha | Pussycat Dolls
P!nk | So What | Pink
Carrie Underwood | Before He Cheats
Taio Cruz | Break Your Heart
Justin Timberlake | My Love
Justin Timberlake | Cry Me a River
Sean Paul | Get Busy
Cassie | Me & U
Gorillaz | DARE
Beyoncé | If I Were a Boy
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
Lady Gaga | LoveGame
David Guetta | When Love Takes Over
Avril Lavigne | Girlfriend
Eve | Let Me Blow Ya Mind
Rihanna | SOS
Britney Spears | Circus
R. Kelly | Ignition (Remix)
John Mayer | Your Body Is a Wonderland
The Pussycat Dolls | Buttons | Pussycat Dolls
Justin Timberlake | What Goes Around... Comes Around
Edward Maya & Vika Jigulina | Stereo Love | Edward Maya
Akon | Don't Matter
Backstreet Boys | Shape of My Heart
Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade
Robbie Williams | Feel
Lily Allen | Smile
Sara Bareilles | Love Song
John Mayer | Waiting On the World to Change
Alex Gaudino | Destination Calabria
Black Eyed Peas | Boom Boom Pow | The Black Eyed Peas
OneRepublic | Good Life
Chris Brown | Run It!
Madonna | 4 Minutes
Mika | Grace Kelly
Rihanna | Shut Up And Drive
Alicia Keys | Empire State of Mind (Part II) Broken Down
Ashanti | Foolish
Gwen Stefani | Rich Girl
Nelly Furtado | I'm Like a Bird
Avril Lavigne | I'm with You
The Pussycat Dolls | Stickwitu | Pussycat Dolls
P!nk | Who Knew | Pink
Usher | U Remind Me
Jennifer Lopez | Jenny from the Block | J.Lo;JLo
Shakira & Beyoncé | Beautiful Liar | Beyoncé and Shakira
Beyoncé | Baby Boy
Chris Brown | Yo (Excuse Me Miss)
Usher | Love in This Club
Ne-Yo | Closer
Sean Kingston | Fire Burning
Taylor Swift | Our Song
Chris Brown | Kiss Kiss
La Roux | Bulletproof
Kevin Lyttle | Turn Me On
Rihanna | Unfaithful
Uncle Kracker | Follow Me
Ne-Yo | Mad
Craig David | 7 Days
Nelly Furtado & James Morrison | Broken Strings | James Morrison
The Fray | Over My Head (Cable Car) | Fray
*NSYNC | It's Gonna Be Me
Beyoncé | Sweet Dreams
Enrique Iglesias | Hero
Duffy | Mercy
Usher | U Got It Bad
3OH!3 | DONTTRUSTME
O-Zone | Dragostea Din Tei
The Pussycat Dolls | When I Grow Up | Pussycat Dolls
Michael Bublé | Haven't Met You Yet
Coldplay | Speed of Sound
Usher | Burn
Bingo Players | Get Up (Rattle)
D12 | My Band
Ne-Yo | Sexy Love
Blu Cantrell | Breathe
Metro Station | Shake It
JoJo | Too Little Too Late
Christina Aguilera | Beautiful
Mariah Carey | Touch My Body
Robbie Williams | Rock DJ
Justin Timberlake | Summer Love
Akon | Locked Up
Kelly Clarkson | Breakaway
Junior Senior | Move Your Feet
Beyoncé | Naughty Girl
Black Eyed Peas | Imma Be
Avril Lavigne | My Happy Ending
Westlife | My Love
Britney Spears | I'm a Slave 4 U
Ciara | Goodies
James Blunt | 1973
Avril Lavigne | When You're Gone
P!nk | Get the Party Started | Pink
Blu Cantrell | Hit 'Em Up Style (Oops!)
Las Ketchup | The Ketchup Song (Aserejé)
Usher | Confessions Part II
P!nk | Just Like a Pill | Pink
Ginuwine | Differences
Nina Sky | Move Ya Body
Destiny's Child | Bootylicious
Cascada | Evacuate The Dancefloor
Mary J. Blige | Be Without You
Christina Aguilera | Dirrty
Bob Sinclar & Cutee B. | Rock This Party (Everybody Dance Now) | Bob Sinclar
Jamelia | Superstar
Timbaland | Carry Out
David Guetta & Chris Willis | Gettin' Over You | David Guetta
Uncle Kracker | Drift Away
Gabrielle | Out Of Reach
Atomic Kitten | The Tide Is High
Christina Aguilera | Fighter
Britney Spears | Lucky
Howie Day | Collide
Timbaland | If We Ever Meet Again (Featuring Katy Perry)
Taylor Swift | Teardrops on My Guitar
DJ Sammy & Yanou | Heaven | DJ Sammy
Benny Benassi & The Biz | Satisfaction | Benny Benassi
Take That | Patience
Kelly Clarkson | My Life Would Suck Without You
OneRepublic | Stop and Stare
Jennifer Lopez | Get Right | J.Lo;JLo
Gwen Stefani | What You Waiting For?
September | Cry for You
Dizzee Rascal | Dance wiv Me
Westlife | Uptown Girl
Céline Dion | That's the Way It Is
Lily Allen | Not Fair
Ashanti | Rock wit U (Awww Baby)
Jagged Edge | Where the Party At
No Doubt | It's My Life
Jennifer Lopez | I'm Real (Murder Remix)
Destiny's Child | Lose My Breath
Toni Braxton | He Wasn't Man Enough
Ida Corr | Let Me Think About It
Duffy | Warwick Avenue
Natasha Bedingfield | These Words
All Saints | Pure Shores
Rihanna | Russian Roulette
P!nk | Sober
Amerie | 1 Thing
Aaliyah | Try Again
JoJo | Leave (Get Out)
Snow Patrol | Run
Britney Spears | Everytime
Sugababes | Push the Button
Jennifer Lopez | Love Don't Cost a Thing | J.Lo;JLo
Baha Men | Who Let the Dogs Out
Beyoncé | Me, Myself and I
Adam Lambert | Whataya Want from Me
Cobra Starship | Good Girls Go Bad
Eric Prydz | Pjanoo
Black Eyed Peas | Don't Phunk with My Heart | The Black Eyed Peas
P!nk | U + Ur Hand
Matchbox Twenty | Unwell
Beyoncé | Déjà Vu
3OH!3 | STARSTRUKK
Nelly Furtado | All Good Things (Come To An End)
Lasgo | Something
Robbie Williams | Somethin' Stupid
Atomic Kitten | Whole Again
Sean Kingston | Take You There
Sugababes | About You Now
A.R. Rahman & The Pussycat Dolls | Jai Ho! (You Are My Destiny) | A.R. Rahman
Destiny's Child | Soldier
Britney Spears | Piece of Me
Scissor Sisters | I Don't Feel Like Dancin'
Alicia Keys | You Don't Know My Name
The Pussycat Dolls | I Hate This Part
Jordin Sparks | Tattoo
Cheryl | Fight For This Love
Agnes | Release Me
Jamiroquai | Little L
Mariah Carey | Shake It Off
Matchbox Twenty | If You're Gone
Ronan Keating | If Tomorrow Never Comes
Sean Paul | We Be Burnin'
Kelly Clarkson | Behind These Hazel Eyes
Ciara | Oh
Usher | Caught Up
Michael Jackson | You Rock My World
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
Dua Lipa | New Rules
Shawn Mendes | Stitches
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
Lewis Capaldi | Before You Go
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
Sia | Cheap Thrills
Zayn and Taylor Swift | I Don't Wanna Live Forever
SAINt JHN | Roses | Saint Jhn;Imanbek
Harry Styles | Adore You
Billie Eilish | Everything I Wanted
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
Rihanna | Diamonds
Pitbull & Ne-Yo | Time of Our Lives | Pitbull
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
Maroon 5 | Girls Like You
Ellie Goulding | Love Me like You Do
Adele | Hello
Alessia Cara | Scars To Your Beautiful
Pharrell Williams | Happy | Pharrell
Khalid | Better
Zedd, Maren Morris and Grey | The Middle
Zayn | Pillowtalk
Portugal. The Man | Feel It Still | Portugal The Man
Justin Bieber | Baby
Kygo & Selena Gomez | It Ain't Me
Fifth Harmony | Work from Home
Rihanna | Work
MKTO | Classic
Imagine Dragons | Whatever It Takes
Dynoro & Gigi D'Agostino | In My Mind | Dynoro
Jessie J & Ariana Grande & Nicki Minaj | Bang Bang
Bruno Mars | It Will Rain
Sam Smith & Normani | Dancing with a Stranger
Lil Nas X | Old Town Road
fun. | We Are Young | Fun
Ariana Grande | Dangerous Woman
Calvin Harris | Feel So Close
Jonas Brothers | Sucker
Justin Timberlake | Mirrors
Khalid | Location
Ed Sheeran | Castle on the Hill
George Ezra | Budapest
Ed Sheeran | Galway Girl
Disclosure | Latch | Sam Smith
Katy Perry | Firework
Regard | Ride It
Katy Perry | Roar
Ariana Grande | No Tears Left to Cry
Bebe Rexha | Meant to Be | Florida Georgia Line
Gnash | I Hate U, I Love U
Ed Sheeran | Beautiful People
Swedish House Mafia | Don't You Worry Child
Calum Scott | Dancing On My Own
Lorde | Royals
The Chainsmokers | Paris
Usher | DJ Got Us Fallin' in Love
Bruno Mars | The Lazy Song
Selena Gomez | Lose You to Love Me
Lilly Wood & The Prick | Prayer In C
Taio Cruz | Dynamite
Lost Frequencies | Are You With Me
The Chainsmokers | Roses
Bruno Mars | Treasure
Icona Pop | I Love It | Charli XCX
Calvin Harris | My Way
Taylor Swift | Look What You Made Me Do
Blackbear | Hot Girl Bummer
Loud Luxury | Body
Zedd and Alessia Cara | Stay
Doja Cat | Say So
R. City | Locked Away
Tove Lo | Habits (Stay High)
Maroon 5 | One More Night
One Direction | Drag Me Down
Kungs & Cookin' On 3 Burners | This Girl (Kungs Vs. Cookin' On 3 Burners) | Kungs
Katy Perry | California Gurls
James Bay | Let It Go
Rag'n'Bone Man | Human
American Authors | Best Day Of My Life
Rihanna and Kanye West and Paul McCartney | FourFiveSeconds | Rihanna, Kanye West and Paul McCartney
Jonas Blue | Fast Car
Taylor Swift | Delicate
Adele | Send My Love (To Your New Lover)
Meghan Trainor | Like I'm Gonna Lose You
Miley Cyrus | We Can't Stop
Avicii | Levels
Mr Probz | Waves (Robin Schulz Remix)
Chris Brown | No Guidance
Dominic Fike | 3 Nights
Jack Ü, Skrillex & Diplo | Where Are Ü Now | Jack Ü
Avicii | Hey Brother
Miley Cyrus | Wrecking Ball
Ariana Grande | God Is a Woman
One Direction | Steal My Girl
Hailee Steinfeld & Grey | Starving | Hailee Steinfeld
Ariana Grande | Break Free
Rihanna | Where Have You Been
Jonas Blue | Perfect Strangers
Mark Ronson | Nothing Breaks Like a Heart
Nico & Vinz | Am I Wrong
Clean Bandit | Solo
One Direction | Perfect
Jason Derulo | Want to Want Me
Jennifer Lopez | On the Floor | J.Lo;JLo
Taylor Swift | All Too Well
Demi Lovato | Sorry Not Sorry
Julia Michaels | Issues
Demi Lovato | Heart Attack
The Weeknd | Heartless
Katy Perry | Teenage Dream
Topic & A7S | Breaking Me
Calvin Harris, Sam Smith | Promises | Calvin Harris & Sam Smith
Selena Gomez | Back To You
A Great Big World | Say Something | A Great Big World and Christina Aguilera
Camila Cabello | Never Be the Same
James Arthur | Impossible
Kygo & Whitney Houston | Higher Love | Kygo
Zara Larsson and MNEK | Never Forget You
Shawn Mendes | If I Can't Have You
Taylor Swift | I Knew You Were Trouble.
Ed Sheeran | The A Team
Ariana Grande | Problem
Galantis | Runaway (U & I)
George Ezra | Shotgun
Neon Trees | Everybody Talks
Pitbull | Feel This Moment
Ariana Grande | Break Up with Your Girlfriend, I'm Bored
Lorde | Team
Charlie Puth | One Call Away
Taylor Swift | You Need to Calm Down
Mabel | Don't Call Me Up
Liam Payne | Strip That Down
Maroon 5 | Don't Wanna Know
Meduza & Goodboys | Piece Of Your Heart | Meduza
Ariana Grande & Social House | boyfriend | Ariana Grande
Robin Thicke | Blurred Lines
Will.i.am | Scream & Shout
John Newman | Love Me Again
Black Eyed Peas and J Balvin | Ritmo (Bad Boys for Life)
Naughty Boy | La La La
Lizzo | Truth Hurts
Jonas Blue | Mama
Fifth Harmony | Worth It
Niall Horan | Slow Hands
The Wanted | Glad You Came
Ellie Goulding | Burn
LMFAO | Party Rock Anthem
Train | Drive By
Rachel Platten | Fight Song
Jason Mraz | I Won't Give Up
Halsey | Bad At Love
David Guetta | Hey Mama
P!nk | What About Us
Galantis | No Money
Rihanna | Bitch Better Have My Money
Lewis Capaldi | Hold Me While You Wait
Shawn Mendes | In My Blood
Bruno Mars | Finesse
Keala Settle & The Greatest Showman Ensemble | This Is Me | Keala Settle
Travie McCoy | Billionaire
Jonas Blue | Rise
Far East Movement | Like a G6
Taylor Swift | Me!
Meghan Trainor | All About That Bass
Black Eyed Peas | Just Can't Get Enough | The Black Eyed Peas
Deorro & Chris Brown | Five More Hours | Deorro
Selena Gomez | Good for You
AWOLNATION | Sail
Tiësto & Dzeko | Jackie Chan | Tiësto
Pitbull | International Love
Jason Derulo | Talk Dirty
Imagine Dragons | It's Time
David Guetta | Where Them Girls At
CNCO & Little Mix | Reggaetón Lento (Bailemos) | CNCO
5 Seconds of Summer | She Looks So Perfect
Years & Years | King | Olly Alexander (Years & Years)
P!nk | Raise Your Glass
David Guetta | 2U
Rixton | Me And My Broken Heart
Alessia Cara | Here
Felix Jaehn | Ain't Nobody (Loves Me Better)
James Bay | Hold Back The River
Charlie Puth | Marvin Gaye
Kelly Clarkson | Stronger (What Doesn't Kill You)
Alicia Keys | Girl on Fire
Zedd | Clarity
Ed Sheeran | South of the Border
Katy Perry | Wide Awake
Tove Lo | Talking Body
Jessie J | Price Tag
Meghan Trainor | NO
Camila Cabello | My Oh My
Fun | Some Nights
Jessie J | Domino
Lady Gaga | Born This Way
Little Mix | Shout Out to My Ex
Owl City and Carly Rae Jepsen | Good Time
Little Mix | Black Magic
Lady Gaga | Applause
Justin Bieber | Boyfriend
One Direction | Best Song Ever
Taylor Swift | We Are Never Ever Getting Back Together
Katy Perry | Part of Me
Selena Gomez | Same Old Love
Lil Nas X | Panini
The Script | Superheroes
Avicii | Lonely Together
Jason Derulo | Trumpets
Nick Jonas | Jealous
Taylor Swift | Bad Blood
David Guetta | Without You
Beyoncé | Drunk in Love
Justin Bieber & BloodPop® | Friends | Justin Bieber
Jax Jones | You Don't Know Me
Calvin Harris, Rag'n'Bone Man | Giant | Calvin Harris & Rag'n'Bone Man
One Direction | Little Things
Daft Punk | Get Lucky | Pharrell Williams
Lizzo | Good as Hell
Route 94 | My Love
Sia | The Greatest
Christina Perri | Jar of Hearts
Psy | Gangnam Style
Clean Bandit | I Miss You
Snakehips | All My Friends
Silk City, Dua Lipa | Electricity | Silk City
Ed Sheeran | Lego House
Pitbull | Hey Baby (Drop It to the Floor)
Olly Murs | Troublemaker
Sam Smith | Lay Me Down
DJ Snake | Turn Down for What
Ed Sheeran | Sing
LMFAO | Sexy and I Know It
Ariana Grande | The Way
Avicii | I Could Be The One (Avicii Vs. Nicky Romero)
Charli XCX | Boom Clap | Charli xcx
Carly Rae Jepsen | I Really Like You
Rita Ora | Let You Love Me
Usher | OMG
Andy Grammer | Honey, I'm Good
Katy Perry | E.T.
Rita Ora | Anywhere
Ellie Goulding | On My Mind
Jess Glynne | I'll Be There
Elton John & Britney Spears | Hold Me Closer
Justin Bieber | As Long As You Love Me
Jess Glynne | Hold My Hand
Little Mix | Woman Like Me
David Guetta | Dangerous
David Guetta | Lovers on the Sun
Ellie Goulding | How Long Will I Love You
Meghan Trainor | Lips Are Movin
Jason Derulo | Wiggle
Jason Derulo | In My Head
Selena Gomez | Come & Get It
One Direction | Live While We're Young
Kesha | We R Who We R
Martin Garrix | Animals
Maroon 5 | Daylight
Jason Derulo | Ridin' Solo
Duke Dumont | I Got U
Ellie Goulding | Lights
Ella Henderson | Ghost
Jason Derulo | It Girl
Kesha | Your Love Is My Drug | Ke$ha
Beyoncé | Best Thing I Never Had
Cobra Starship | You Make Me Feel...
Tiësto | Wasted
Emeli Sandé | Read All About It, Pt. III
NEIKED | Sexual
Black Eyed Peas | The Time (Dirty Bit) | The Black Eyed Peas
Demi Lovato | Give Your Heart a Break
Little Mix | Touch
Kesha | Blow
The Script | For the First Time
Zedd | Stay The Night
Sam Smith | Money On My Mind
Hot Chelle Rae | Tonight Tonight
Ella Mai | Boo'd Up
Martin Solveig & Good Times Ahead | Intoxicated | Martin Solveig
Ed Sheeran | Cross Me
David Guetta | Turn Me On
Lady Gaga | The Edge of Glory
Sigala | Easy Love
P!nk | Just Like Fire
Phillip Phillips | Home
Lily Allen | Somewhere Only We Know
Florence + The Machine | Spectrum (Say My Name)
Jason Derulo | Tip Toe
OneRepublic | Love Runs Out
ZHU | Faded
Oliver Heldens & Becky Hill | Gecko (Overdrive) | Oliver Heldens
Klangkarussell | Sonnentanz
George Ezra | Paradise
Avicii | You Make Me
Labrinth | Beneath Your Beautiful
Coldplay & Rihanna | Princess of China | Coldplay
will.i.am | #thatPOWER
Jess Glynne | Don't Be so Hard on Yourself
Tom Walker | Just You and I
Aloe Blacc | The Man
Ed Sheeran | Bloodstream
Olly Murs | Up
Ne-Yo | Let Me Love You (Until You Learn to Love Yourself)
Aloe Blacc | I Need A Dollar
Naughty Boy | Runnin' (Lose It All)
Justin Timberlake | Suit & Tie
Anna Kendrick | Cups (Pitch Perfect’s “When I’m Gone”)
Symphony of Unity, Sebastian Ingrosso, Tommy Trash & John Martin | Reload | Sebastian Ingrosso
Kiesza | Hideaway
Jason Derulo | The Other Side
Sigala & Bryn Christopher | Sweet Lovin' | Sigala
James Blunt | Bonfire Heart
DVBBS & Borgeous | Tsunami | DVBBS
Sam Smith | Writing's On The Wall
Rudimental | Waiting All Night
Zara Larsson | I Would Like
David Guetta | Shot Me Down
`,

"20s": `
HUNTR/X | Golden | Huntrix;KPop Demon Hunters
HUNTR/X | How It's Done | Huntrix;KPop Demon Hunters
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
Tiësto | The Business | Tiesto
Nicky Youre & dazy | Sunroof
Joel Corry | Head & Heart | MNEK
Drake | Jimmy Cooks
Dua Lipa | Dance the Night
RAYE | Escapism. | Raye;070 Shake
Chappell Roan | Pink Pony Club
Lola Young | Messy
Dua Lipa | Physical
Lady Gaga & Ariana Grande | Rain On Me
The Marías | No One Noticed
Myles Smith | Stargazing
Riton & Nightcrawlers | Friday
Taylor Swift | Fortnight | Post Malone
Lil Nas X | THAT'S WHAT I WANT
SZA | Saturn
Ariana Grande | 34+35
Harry Styles | Late Night Talking
Gracie Abrams | I Love You, I'm Sorry
Doja Cat and the Weeknd | You Right
Sabrina Carpenter | Manchild
Kenya Grace | Strangers
Cassö & Raye | Prada | Cassö, Raye & D-Block Europe
Dua Lipa | Houdini
Benson Boone | Slow It Down
Olivia Dean | So Easy (To Fall in Love)
The Kid Laroi | Without You
Raye | Where Is My Husband!
Teddy Swims | The Door
Taylor Swift | Karma
Dua Lipa | Training Season
Billie Eilish | LUNCH
Justin Bieber | DAISIES
Billie Eilish | Therefore I Am
Lizzo | About Damn Time
Beyoncé | CUFF IT
Meghan Trainor | Made You Look
Chappell Roan | HOT TO GO!
Tate McRae | Sports car
Maroon 5 & Megan Thee Stallion | Beautiful Mistakes | Maroon 5
Justin Bieber | Yummy
Justin Bieber | Holy
Taylor Swift | Lavender Haze
Taylor Swift | Opalite
Chris Brown and Young Thug | Go Crazy
Sabrina Carpenter | Bed Chem
Lady Gaga | Abracadabra
Taylor Swift | I Can Do It with a Broken Heart
Justin Bieber | Anyone
Meduza | Paradise
Billie Eilish | No Time To Die
Ariana Grande | yes, and?
Olivia Rodrigo | bad idea right?
Peggy Gou | (It Goes Like) Nanana
Chrystal | The Days
WizTheMc & Bees & Honey | Show Me Love
Adele | Oh My God
Drake | Nokia
LF System | Afraid to Feel
Bruno Mars, Anderson .Paak & Silk Sonic | Smokin out the Window | Silk Sonic
Benson Boone | Mystical Magical
Taylor Swift | Is It Over Now?
Olivia Dean | Nice to Each Other
Calvin Harris & Ellie Goulding | Miracle
Becky Hill & David Guetta | Remember
SZA | I Hate U
Nicki Minaj and Ice Spice | Barbie World
Nathan Evans, 220 Kid & Billen Ted | Wellerman
Galantis, David Guetta & Little Mix | Heartbreak Anthem
Lauren Spencer-Smith | Fingers Crossed
Bl3ss & CamrinWatsin | Kisses
Joel Corry, Raye & David Guetta | Bed
Taylor Swift | Down Bad
Sabrina Carpenter | Tears
YG Marley | Praise Jah in the Moonlight
Taylor Swift | Snow on the Beach
Ed Sheeran | Afterglow
Beyoncé | BREAK MY SOUL
Em Beihold | Numb Little Bug
Ed Sheeran | Eyes Closed
Harry Styles | Music for a Sushi Restaurant
David Guetta, Becky Hill & Ella Henderson | Crazy What Love Can Do
Sam Fender | Rein Me In | Sam Fender & Olivia Dean
Leon Thomas | Mutt
Ed Sheeran | Azizam
Lewis Capaldi | Forget Me
Benson Boone | Sorry I'm Here for Someone Else
Eliza Rose & Interplanetary Criminal | B.O.T.A. (Baddest of Them All)
Taylor Swift | Now That We Don't Talk (Taylor's Version)
Luude | Down Under
Calvin Harris & Clementine Douglas | Blessings | Calvin Harris
Lewis Capaldi | Wish You the Best
Ed Sheeran | Sapphire
Taylor Swift | Elizabeth Taylor
George Ezra | Green Green Grass
Adele | I Drink Wine
Jessie Murph and Jelly Roll | Wild Ones
Ed Sheeran | Overpass Graffiti
Sam Fender | Seventeen Going Under
Chappell Roan | The Subway
SZA | 30 for 30 | SZA and Kendrick Lamar
Fred Again & Obongjayar | Adore U | Fred Again
Sonny Fodera, Jazzy & D.O.D. | Somedays
Noah Kahan | Homesick
Jazzy | Giving Me
Little Mix | Sweet Melody
PinkPantheress | Boy's a Liar
Chase & Status & Bou | Baddadan
Joel Corry | Lonely
Paul Woolford, Diplo & Kareen Lomax | Looking for Me | Paul Woolford & Diplo
Switch Disco & Ella Henderson | React
Cat Burns | Go
`
};

// Exact Apple track for each song, so every clip is the original recording.
const TRACK_IDS = {"HUNTR/X | Golden": 1820264150, "HUNTR/X | How It's Done": 1837843443, "Coldplay | Viva la Vida": 1122773680, "Eminem | Without Me": 1440821643, "Eminem | Lose Yourself": 1440903439, "Shakira | Hips Don't Lie": 211761919, "Eminem | The Real Slim Shady": 1815859197, "Rihanna | Umbrella": 1441154437, "Black Eyed Peas | I Gotta Feeling": 1440769310, "50 Cent | In da Club": 1440877090, "Evanescence | Bring Me to Life": 1440666111, "Usher | Yeah!": 1692261346, "Linkin Park | In the End": 590431785, "Britney Spears | Toxic": 251948354, "Lady Gaga | Bad Romance": 1444893703, "Train | Hey, Soul Sister": 1438174456, "Beyoncé | Crazy in Love": 201274644, "Nelly Furtado | Promiscuous": 1471716722, "Kesha | TiK ToK": 1852627148, "Jason Mraz | I'm Yours": 277635828, "Lady Gaga | Just Dance": 1440818653, "Kanye West | Stronger": 1442846328, "Nickelback | How You Remind Me": 214475478, "Akon | Smack That": 1445288974, "Flo Rida | Low": 275496141, "Gorillaz & De La Soul | Feel Good Inc.": 850571371, "Natasha Bedingfield | Unwritten": 430514893, "Maroon 5 | This Love": 1445283228, "Timbaland | The Way I Are": 1440748894, "Iyaz | Replay": 326644034, "Kanye West | Heartless": 1441410309, "Alicia Keys | If I Ain't Got You": 255343130, "OutKast | Hey Ya!": 1774799818, "The Killers | Mr. Brightside": 1440891171, "Justin Timberlake | SexyBack": 400946435, "Black Eyed Peas | Where Is the Love?": 1615142635, "Mario | Let Me Love You": 257524515, "Shaggy | It Wasn't Me": 1440745627, "Sean Paul | Temperature": 316742052, "Gnarls Barkley | Crazy": 1741403966, "Kanye West | Gold Digger": 1440763833, "Katy Perry | I Kissed a Girl": 715891620, "Nelly Furtado | Maneater": 1442463828, "Britney Spears | Oops!... I Did It Again": 267954487, "Keane | Somewhere Only We Know": 1445287036, "Jay-Z | Empire State of Mind": 1440777015, "Ne-Yo | So Sick": 1440783502, "Black Eyed Peas | Meet Me Halfway": 1440769131, "OutKast | Ms. Jackson": 1536684150, "Train | Drops of Jupiter (Tell Me)": 311629509, "Lady Gaga | Telephone": 1440814438, "Sean Kingston | Beautiful Girls": 275820157, "Owl City | Fireflies": 1440783289, "Alicia Keys | No One": 273048082, "Leona Lewis | Bleeding Love": 345289046, "Plain White T's | Hey There Delilah": 1443175247, "The Script | The Man Who Can't Be Moved": 289076746, "James Blunt | You're Beautiful": 714601673, "50 Cent | Candy Shop": 1444007299, "Estelle | American Boy": 1712041678, "Avril Lavigne | Complicated": 315025823, "Akon | Lonely": 1446019275, "Taylor Swift | Love Story": 1552791427, "Kelly Clarkson | Since U Been Gone": 275765380, "Kylie Minogue | Can't Get You Out of My Head": 699920365, "Kings of Leon | Use Somebody": 290303018, "Coldplay | Yellow": 1122782283, "Rihanna | Take a Bow": 1441154580, "t.A.T.u. | All The Things She Said": 1440812361, "Beyoncé | Halo": 296016893, "Gwen Stefani | The Sweet Escape": 1455390118, "Modjo | Lady (Hear Me Tonight)": 692624266, "Mariah Carey | We Belong Together": 1476731889, "Miley Cyrus | Party in the U.S.A.": 1445007713, "Eminem | Mockingbird": 1425131554, "OneRepublic | Apologize": 1440749959, "The Fray | How to Save a Life": 821031488, "Coldplay | Fix You": 1123076826, "Nelly Furtado | Say It Right": 1442464133, "Beyoncé | Irreplaceable": 296790943, "Maroon 5 | She Will Be Loved": 1440851722, "Taylor Swift | You Belong with Me": 1440925035, "The Pussycat Dolls | Don't Cha": 1455130399, "Rihanna | Pon de Replay": 1440867324, "P!nk | So What": 293000132, "Gwen Stefani | Hollaback Girl": 1491226770, "Justin Timberlake | Rock Your Body": 252606598, "Taio Cruz | Break Your Heart": 1443147099, "Snow Patrol | Chasing Cars": 1442491770, "David Guetta | Sexy Bitch": 693247224, "Katy Perry | Hot n Cold": 715891658, "Gorillaz | DARE": 850571388, "Rihanna | Don't Stop the Music": 1441154439, "Beyoncé | If I Were a Boy": 296016892, "Rihanna | Disturbia": 1441154571, "Shaggy | Angel": 1440745528, "NSYNC | Bye Bye Bye": 303171368, "Britney Spears | Gimme More": 686780571, "Sean Paul | Get Busy": 1652782418, "Daft Punk | One More Time": 703078823, "Mario Winans | I Don't Wanna Know": 1131822399, "Cascada | Everytime We Touch": 1836432106, "Alicia Keys | Fallin'": 256937038, "Carrie Underwood | Before He Cheats": 214696369, "Adele | Chasing Pavements": 1545376345, "Beyoncé | Single Ladies (Put a Ring on It)": 296016899, "The Script | Breakeven": 1055488629, "Madonna | Hung Up": 91989806, "Mark Ronson | Valerie": 259214627, "Sophie Ellis-Bextor | Murder on the Dancefloor": 1445119897, "David Guetta | When Love Takes Over": 693255018, "Rihanna | Rude Boy": 1440775739, "Panic! At the Disco | I Write Sins Not Tragedies": 150052680, "R. Kelly | Ignition (Remix)": 283567745, "Ciara | 1, 2 Step": 1769555440, "Vanessa Carlton | A Thousand Miles": 1440865959, "Alicia Keys & Usher | My Boo": 386153729, "Jay Sean | Down": 1445002842, "Christina Aguilera, Lil' Kim, Mýa & P!nk | Lady Marmalade": 1440845801, "Justin Timberlake | My Love": 303099934, "Mike Posner | Cooler Than Me": 345373429, "Adele | Make You Feel My Love": 1545382976, "Mary J. Blige | Family Affair": 1440817530, "Justin Timberlake | Cry Me a River": 252606592, "Lily Allen | Smile": 726141811, "Black Eyed Peas | Boom Boom Pow": 1443060256, "Chris Brown | With You": 275904556, "Eve | Let Me Blow Ya Mind": 1553998006, "Madonna | 4 Minutes": 1874757117, "Mika | Grace Kelly": 1440763492, "Cassie | Me & U": 171980163, "Gorillaz | Clint Eastwood": 884147521, "LINKIN PARK | What I've Done": 590427450, "Ashanti | Foolish": 1444119831, "Britney Spears | Womanizer": 686780576, "The Pussycat Dolls | Stickwitu": 1440762527, "Alexandra Stan | Mr. Saxobeat": 1712539392, "Jason Derulo | Whatcha Say": 353554372, "Avril Lavigne | Girlfriend": 881915809, "Shakira & Beyoncé | Beautiful Liar": 261707058, "Miley Cyrus | The Climb": 1440632860, "The Fray | You Found Me": 301537185, "Sara Bareilles | Love Song": 258604737, "Rihanna | SOS": 1472000531, "Ne-Yo | Closer": 1445834051, "La Roux | Bulletproof": 1440747711, "Akon | Don't Matter": 1453088780, "Craig David | 7 Days": 1207938311, "Enrique Iglesias | Hero": 1440914005, "Colbie Caillat | Bubbly": 1440745635, "Natasha Bedingfield | Pocketful of Sunshine": 1429194116, "Chris Brown | Run It!": 202883800, "The Pussycat Dolls | Buttons": 1440762733, "Duffy | Mercy": 1440746199, "Usher | Love in This Club": 281698335, "Usher | Burn": 1765605482, "Blu Cantrell | Breathe": 1727847455, "Christina Aguilera | Beautiful": 279647290, "Beyoncé | Baby Boy": 201274944, "Robbie Williams | Rock DJ": 724201567, "Kevin Lyttle | Turn Me On": 6337732, "Westlife | My Love": 255641254, "Justin Timberlake | What Goes Around... Comes Around": 1441492959, "Rihanna | Unfaithful": 1440866698, "Usher | U Remind Me": 268532453, "Ciara | Goodies": 302992638, "Usher | U Got It Bad": 268532564, "Nelly Furtado & James Morrison | Broken Strings": 1442913134, "Las Ketchup | The Ketchup Song (Aserejé)": 1362217175, "Avril Lavigne | I'm with You": 315025828, "P!nk | Just Like a Pill": 314017601, "The Fray | Over My Head (Cable Car)": 385629699, "Britney Spears | Circus": 686780578, "Ne-Yo | Because of You": 1440757476, "Mariah Carey | Obsessed": 1440493525, "Cascada | Evacuate The Dancefloor": 413632188, "Coldplay | Speed of Sound": 1123076830, "Lady Gaga | Alejandro": 1476727671, "D12 | My Band": 1444193152, "Christina Aguilera | Dirrty": 279647295, "Kelly Clarkson | Because of You": 275765399, "Jennifer Lopez | Jenny from the Block": 190849540, "OneRepublic | Good Life": 1461280616, "David Guetta & Chris Willis | Gettin' Over You": 693246514, "Chris Brown | Kiss Kiss": 267264869, "Atomic Kitten | The Tide Is High": 716687790, "Uncle Kracker | Follow Me": 262071200, "Florence + the Machine | You've Got The Love": 1470594155, "DJ Sammy & Yanou | Heaven": 17769882, "Edward Maya & Vika Jigulina | Stereo Love": 351996346, "Backstreet Boys | Shape of My Heart": 303171282, "Lady Gaga | LoveGame": 1440818656, "Take That | Patience": 1445121982, "Kelly Clarkson | My Life Would Suck Without You": 301664592, "Robbie Williams | Feel": 727506071, "Ne-Yo | Miss Independent": 1445834188, "Jennifer Lopez | Get Right": 1448327920, "P!nk | Get the Party Started": 400673114, "Blu Cantrell | Hit 'Em Up Style (Oops!)": 255286939, "Alex Gaudino | Destination Calabria": 1512944769, "Dizzee Rascal | Dance wiv Me": 1766337998, "Westlife | Uptown Girl": 255643820, "Usher | Confessions Part II": 1765605477, "O-Zone | Dragostea Din Tei": 1719518261, "Alicia Keys | Empire State of Mind (Part II) Broken Down": 1635638288, "Destiny's Child | Bootylicious": 193157568, "Amy Winehouse | Back to Black": 1440856228, "The Pussycat Dolls | When I Grow Up": 1443787006, "Mary J. Blige | Be Without You": 1488527718, "Gwen Stefani | Rich Girl": 1452917847, "Beyoncé | Naughty Girl": 201274830, "Natasha Bedingfield | These Words": 430514889, "All Saints | Pure Shores": 1818790009, "*NSYNC | It's Gonna Be Me": 303171383, "Mariah Carey | Touch My Body": 989380808, "Black Eyed Peas | Imma Be": 1445154093, "Junior Senior | Move Your Feet": 1445169178, "Britney Spears | Everytime": 251948405, "Jennifer Lopez | I'm Real (Murder Remix)": 193030580, "Sugababes | Push the Button": 1440861646, "Jennifer Lopez | Love Don't Cost a Thing": 193030496, "Benny Benassi & The Biz | Satisfaction": 1712041112, "Sean Kingston | Fire Burning": 312051360, "Avril Lavigne | When You're Gone": 268993517, "3OH!3 | DONTTRUSTME": 287413483, "Beyoncé | Déjà Vu": 261707248, "Coldplay | The Scientist": 1122776155, "Rihanna | Shut Up And Drive": 1441154562, "Robbie Williams | Somethin' Stupid": 724495061, "Atomic Kitten | Whole Again": 724585818, "Kelly Clarkson | Breakaway": 275765378, "Toni Braxton | He Wasn't Man Enough": 273798259, "Nelly Furtado | I'm Like a Bird": 1440781293, "Uncle Kracker | Drift Away": 184607854, "Nina Sky | Move Ya Body": 1444178490, "Sugababes | About You Now": 1442394535, "Destiny's Child | Lose My Breath": 207341067, "Coldplay | Clocks": 1122776156, "John Mayer | Your Body Is a Wonderland": 283699774, "P!nk | Who Knew": 298582189, "Bob Sinclar & Cutee B. | Rock This Party (Everybody Dance Now)": 1727360629, "Jamelia | Superstar": 1349761137, "Ida Corr | Let Me Think About It": 1214997748, "JoJo | Too Little Too Late": 1816084448, "Scissor Sisters | I Don't Feel Like Dancin'": 1443836265, "Matchbox Twenty | Unwell": 580698089, "Metro Station | Shake It": 263685000, "Rihanna | Russian Roulette": 1440775735, "Christina Aguilera | Fighter": 279647282, "John Mayer | Waiting On the World to Change": 184335560, "Cheryl | Fight For This Love": 1443909088, "JoJo | Leave (Get Out)": 1816085262, "Jagged Edge | Where the Party At": 192962986, "Timbaland | If We Ever Meet Again (Featuring Katy Perry)": 1443189003, "Taylor Swift | Our Song": 1440914010, "Aaliyah | Try Again": 1816084755, "Ronan Keating | If Tomorrow Never Comes": 1468865938, "Baha Men | Who Let the Dogs Out": 723351644, "Chris Brown | Yo (Excuse Me Miss)": 323098607, "Britney Spears | I'm a Slave 4 U": 273143828, "James Blunt | 1973": 714586430, "Eric Prydz | Pjanoo": 1216951600, "Ne-Yo | Mad": 1445834180, "Michael Bublé | Haven't Met You Yet": 668403662, "Beyoncé | Sweet Dreams": 296016902, "Black Eyed Peas | Don't Phunk with My Heart": 1817288727, "Matchbox Twenty | If You're Gone": 579997971, "Ne-Yo | Sexy Love": 1440783519, "Justin Timberlake | Summer Love": 187666991, "Duffy | Warwick Avenue": 1440746183, "Britney Spears | Piece of Me": 521738943, "Gabrielle | Out Of Reach": 1437440225, "Akon | Locked Up": 1443624549, "Kelly Clarkson | Behind These Hazel Eyes": 275765392, "Avril Lavigne | My Happy Ending": 306669121, "Céline Dion | That's the Way It Is": 1450016069, "Sean Paul | We Be Burnin'": 1228295897, "OneRepublic | Stop and Stare": 1882090715, "Ashanti | Rock wit U (Awww Baby)": 1440661039, "Michael Jackson | You Rock My World": 159295942, "Gwen Stefani | What You Waiting For?": 1488136748, "Mariah Carey | Shake It Off": 1476731894, "3OH!3 | STARSTRUKK": 281750098, "Timbaland | Carry Out": 1443162415, "A.R. Rahman & The Pussycat Dolls | Jai Ho! (You Are My Destiny)": 1445277970, "Beyoncé | Me, Myself and I": 532975232, "Amerie | 1 Thing": 153437689, "Agnes | Release Me": 850400855, "Britney Spears | Lucky": 267954592, "P!nk | U + Ur Hand": 258894371, "Destiny's Child | Soldier": 207341076, "Ciara | Oh": 302992650, "No Doubt | It's My Life": 1440718649, "September | Cry for You": 1882052803, "Howie Day | Collide": 187475823, "Ginuwine | Differences": 204952431, "Lily Allen | Not Fair": 732024601, "Nelly Furtado | All Good Things (Come To An End)": 1568363866, "Lasgo | Something": 567721793, "P!nk | Sober": 399891707, "Alicia Keys | You Don't Know My Name": 255343000, "Taylor Swift | Teardrops on My Guitar": 1860454450, "Jordin Sparks | Tattoo": 263988099, "Sean Kingston | Take You There": 275820153, "Snow Patrol | Run": 1673626838, "Cobra Starship | Good Girls Go Bad": 322348722, "Usher | Caught Up": 386153687, "Adam Lambert | Whataya Want from Me": 338840912, "Jamiroquai | Little L": 203132999, "The Pussycat Dolls | I Hate This Part": 1450065730, "The Weeknd | Blinding Lights": 1499378607, "Ed Sheeran | Shape of You": 1193700767, "Drake | One Dance": 1440841384, "Lewis Capaldi | Someone You Loved": 1452619054, "Ed Sheeran | Perfect": 1193700769, "Post Malone & Swae Lee | Sunflower": 1445949267, "The Chainsmokers | Closer": 1170699703, "James Arthur | Say You Won't Let Go": 1147252591, "OneRepublic | Counting Stars": 1440854619, "Tones and I | Dance Monkey": 1475930045, "Bruno Mars | Just the Way You Are": 576655095, "Post Malone | rockstar": 1373506170, "Shawn Mendes & Camila Cabello | Señorita": 1468910018, "Justin Bieber | Love Yourself": 1440826328, "The Chainsmokers & Coldplay | Something Just Like This": 1207120448, "Avicii | Wake Me Up": 1440872929, "Ed Sheeran | Thinking Out Loud": 858518134, "Bruno Mars | That's What I Like": 1161504043, "Post Malone | Circles": 1477880561, "Macklemore & Ryan Lewis | Can't Hold Us": 560148920, "Drake | God's Plan": 1406109863, "Lady Gaga & Bradley Cooper | Shallow": 1434371887, "Dua Lipa | Don't Start Now": 1484636829, "Justin Bieber | Sorry": 1440826320, "John Legend | All of Me": 1441844542, "Imagine Dragons | Believer": 1411628233, "Ariana Grande | 7 rings": 1450334168, "The Weeknd | Starboy": 1440870375, "Maroon 5 | Payphone": 1422675690, "The Weeknd & Ariana Grande | Die For You": 1440872304, "Mark Ronson | Uptown Funk": 943946671, "Calvin Harris & Dua Lipa | One Kiss": 1364709436, "Adele | Someone Like You": 1544491998, "twenty one pilots | Stressed Out": 974485474, "Rihanna | We Found Love": 1440758945, "Kendrick Lamar | Humble": 1440882165, "Bruno Mars | When I Was Your Man": 573962555, "Dua Lipa | New Rules": 6772180432, "Hozier | Take Me to Church": 923529775, "Billie Eilish | bad guy": 1450695739, "Shawn Mendes | Stitches": 1440843848, "Bruno Mars | Locked Out of Heaven": 573962551, "Lukas Graham | 7 Years": 1081573445, "Gotye | Somebody That I Used to Know": 1440754487, "Taylor Swift | Cruel Summer": 1468058171, "Sam Smith | Stay with Me": 1440814425, "Sam Smith | Too Good at Goodbyes": 1440900165, "Camila Cabello | Havana": 1321217032, "Wiz Khalifa | See You Again": 966411602, "Mike Posner | I Took a Pill in Ibiza": 1442858354, "DJ Snake | Let Me Love You": 1440867817, "Halsey | Without Me": 1481418646, "Adele | Rolling in the Deep": 1544491233, "Marshmello & Bastille | Happier": 1711849667, "Lewis Capaldi | Before You Go": 1485384412, "Juice Wrld | Lucid Dreams": 1447177630, "Harry Styles | Sign of the Times": 1226034393, "David Guetta | Titanium": 693226464, "French Montana | Unforgettable": 1254531914, "Taylor Swift | Blank Space": 1708308993, "Passenger | Let Her Go": 1623014090, "Travis Scott | Sicko Mode": 1421658123, "Major Lazer & DJ Snake | Lean On": 1696639397, "Ariana Grande | thank u, next": 1450334169, "Imagine Dragons | Radioactive": 1440873126, "OMI | Cheerleader": 1141509249, "Maroon 5 | Memories": 1571176664, "Pitbull | Give Me Everything": 1712042664, "Walk the Moon | Shut Up and Dance": 1473891823, "Maroon 5 | Sugar": 1440829431, "Pitbull & Kesha | Timber": 1307027311, "MAGIC! | Rude": 881629103, "The Chainsmokers | Don't Let Me Down": 1170699706, "Ed Sheeran & Justin Bieber | I Don't Care": 1464549844, "Harry Styles | Watermelon Sugar": 1485802967, "Justin Bieber | What Do You Mean?": 1440829606, "Luis Fonsi & Daddy Yankee | Despacito": 1447401620, "SAINt JHN | Roses": 1711846986, "Foster the People | Pumped Up Kicks": 435761212, "Maroon 5 | Maps": 1440842752, "Eminem | Love the Way You Lie": 1637717485, "Ava Max | Sweet but Psycho": 1538214889, "Carly Rae Jepsen | Call Me Maybe": 1442997912, "Benny Blanco, Halsey and Khalid | Eastside": 1445073665, "The Weeknd | The Hills": 1440858495, "The Script | Hall of Fame": 563641976, "Calvin Harris | This Is What You Came For": 1108212668, "Katy Perry | Dark Horse": 1440871474, "Bruno Mars | Grenade": 576655094, "Adele | Set Fire to the Rain": 1544491988, "Rihanna | Diamonds": 1444321282, "Imagine Dragons | Thunder": 1411629089, "Rihanna | Only Girl (In the World)": 1472173443, "Travis Scott | Highest in the Room": 1482217453, "Imagine Dragons | Demons": 1440873339, "Clean Bandit | Rockabye": 1418704737, "Maroon 5 | Moves like Jagger": 1440855997, "Harry Styles | Adore You": 1485802970, "One Direction | What Makes You Beautiful": 481400053, "Shawn Mendes | There's Nothing Holdin' Me Back": 1440892573, "Clean Bandit | Symphony": 1436738923, "The Weeknd | Earned It": 1440845641, "Zara Larsson | Lush Life": 1201058113, "Coldplay | Paradise": 726373148, "Charlie Puth | Attention": 1293229677, "Clean Bandit | Rather Be": 1027563268, "Major Lazer | Cold Water": 1694794945, "P!nk | Just Give Me a Reason": 633431899, "Post Malone | Better Now": 1373506180, "Sam Smith | I'm Not the Only One": 1440814433, "Ariana Grande | One Last Time": 1440852679, "The Weeknd | Can't Feel My Face": 1440858500, "Sia | Cheap Thrills": 1055074640, "Shawn Mendes | Treat You Better": 1440904109, "Ellie Goulding | Love Me like You Do": 1440900325, "Justin Timberlake | Can't Stop the Feeling!": 1154239184, "Adele | Hello": 1544494392, "Ed Sheeran | Photograph": 1766261269, "Pharrell Williams | Happy": 652255046, "Zayn | Pillowtalk": 1087165979, "Bastille | Pompeii": 715531601, "Jessie J & Ariana Grande & Nicki Minaj | Bang Bang": 1444896442, "twenty one pilots | Ride": 974485805, "Drake | Passionfruit": 1440892167, "Lil Nas X | Old Town Road": 1468166468, "fun. | We Are Young": 486040195, "Justin Timberlake | Mirrors": 618261614, "Rihanna | Work": 1443231169, "One Direction | Story of My Life": 695312371, "Rihanna | Stay": 1417177313, "Panic! At the Disco | High Hopes": 1361152303, "Katy Perry | Roar": 1440871461, "Katy Perry | Last Friday Night (T.G.I.F.)": 716192614, "Taylor Swift | Shake It Off": 1708309002, "Ed Sheeran | Beautiful People": 1464549657, "Swedish House Mafia | Don't You Worry Child": 6798736833, "Billie Eilish | Everything I Wanted": 1487502476, "Lorde | Royals": 1594982922, "Katy Perry | Firework": 716192625, "Zedd, Maren Morris and Grey | The Middle": 1444896450, "Bruno Mars | The Lazy Song": 576670462, "Maroon 5 | Girls Like You": 1381582728, "Sia | Chandelier": 882945383, "DNCE | Cake by the Ocean": 1440867865, "Bebe Rexha | Meant to Be": 1251713725, "Lilly Wood & The Prick | Prayer In C": 931886796, "Taio Cruz | Dynamite": 1442897002, "Lost Frequencies | Are You With Me": 1155693691, "Rihanna | Needed Me": 1440925067, "Bruno Mars | 24K Magic": 1161504024, "Icona Pop | I Love It": 821412562, "Taylor Swift | Look What You Made Me Do": 1440934255, "Miguel | Sure Thing": 439618071, "Kendrick Lamar, SZA | All the Stars": 1440903307, "Lana Del Rey | Summertime Sadness": 1440812085, "Fifth Harmony | Work from Home": 1087454868, "One Direction | Drag Me Down": 1040195238, "Katy Perry | California Gurls": 716084621, "Jonas Brothers | Sucker": 1461478389, "Calvin Harris | Feel So Close": 450132719, "Miley Cyrus | We Can't Stop": 1692243715, "Chris Brown | Under the Influence": 1481598829, "Mr Probz | Waves (Robin Schulz Remix)": 1532427385, "Zayn and Taylor Swift | I Don't Wanna Live Forever": 1440880860, "Ed Sheeran | Castle on the Hill": 1193701328, "Ed Sheeran | Galway Girl": 1193701436, "Miley Cyrus | Wrecking Ball": 1635638289, "Regard | Ride It": 1472026722, "Sam Smith & Normani | Dancing with a Stranger": 1447334978, "Ariana Grande | No Tears Left to Cry": 1399204228, "LAUV | I Like Me Better": 1771702162, "Marshmello | Silence": 1268152499, "Nico & Vinz | Am I Wrong": 1180381817, "Calum Scott | Dancing On My Own": 1428795504, "Clean Bandit | Solo": 1436738925, "Rihanna | Love On The Brain": 1443231420, "Jason Derulo | Want to Want Me": 982388023, "Gym Class Heroes | Stereo Hearts": 477341015, "Jennifer Lopez | On the Floor": 1440622264, "Anne-Marie | 2002": 1351247438, "5 Seconds of Summer | Youngblood": 1369109665, "Dua Lipa | IDGAF": 1228742329, "The Weeknd | I Feel It Coming": 1440872309, "Trevor Daniel | Falling": 1574967276, "Khalid | Better": 1438904353, "Calvin Harris, Sam Smith | Promises": 1424362622, "James Arthur | Impossible": 932559132, "Doja Cat | Say So": 1486465101, "Portugal. The Man | Feel It Still": 1229315050, "R. City | Locked Away": 1031371163, "Justin Bieber | Baby": 1472491703, "Ariana Grande | Problem": 1440825196, "Lil Tecca | Ransom": 1468508848, "Kungs & Cookin' On 3 Burners | This Girl (Kungs Vs. Cookin' On 3 Burners)": 1440894921, "George Ezra | Shotgun": 1331589486, "Rag'n'Bone Man | Human": 1202354334, "Ariana Grande | Break Up with Your Girlfriend, I'm Bored": 1450334170, "Jonas Blue | Fast Car": 1437812225, "Charlie Puth | We Don't Talk Anymore": 1031416185, "Khalid | Location": 1200868875, "Capital Cities | Safe and Sound": 1766005715, "George Ezra | Budapest": 947999963, "Robin Thicke | Blurred Lines": 1443274106, "Will.i.am | Scream & Shout": 1442823431, "John Newman | Love Me Again": 1444895206, "Avicii | Hey Brother": 1440873108, "Twenty One Pilots | Heathens": 1125281487, "One Direction | Night Changes": 1692243270, "Naughty Boy | La La La": 1443257774, "Justin Bieber | Beauty And A Beat": 1440650961, "Ariana Grande | Side to Side": 1440835649, "Zedd and Alessia Cara | Stay": 1445043157, "Taylor Swift | Style": 1440933520, "Zayn | Dusk Till Dawn": 1531016360, "Jonas Blue | Perfect Strangers": 1437811945, "The Wanted | Glad You Came": 1443293784, "Mark Ronson | Nothing Breaks Like a Heart": 1459276883, "Ellie Goulding | Burn": 1440819532, "LMFAO | Party Rock Anthem": 1443158235, "Kygo & Selena Gomez | It Ain't Me": 1444631771, "One Direction | Perfect": 1040171617, "Rachel Platten | Fight Song": 1061182684, "Bruno Mars | It Will Rain": 467967161, "Selena Gomez | Lose You to Love Me": 1488413376, "Maroon 5 | One More Night": 1440808310, "Usher | DJ Got Us Fallin' in Love": 923691611, "Alessia Cara | Scars To Your Beautiful": 1440827194, "Katy Perry | Teenage Dream": 716192601, "Avicii | The Nights": 1440829549, "Kygo & Whitney Houston | Higher Love": 1469941840, "Meghan Trainor | All About That Bass": 1791794659, "Coldplay | A Sky Full of Stars": 829910927, "Taylor Swift | I Knew You Were Trouble.": 1590368455, "Pitbull & Ne-Yo | Time of Our Lives": 938014004, "Jason Derulo | Talk Dirty": 840493983, "Disclosure | Latch": 1471695442, "Rihanna and Kanye West and Paul McCartney | FourFiveSeconds": 1445170918, "5 Seconds of Summer | She Looks So Perfect": 1440857725, "Jack Ü, Skrillex & Diplo | Where Are Ü Now": 971262282, "Years & Years | King": 1440842654, "Rixton | Me And My Broken Heart": 1443257264, "Meduza & Goodboys | Piece Of Your Heart": 1449911564, "Chris Brown | No Guidance": 1466874531, "Charlie Puth | Marvin Gaye": 1031416183, "Dominic Fike | 3 Nights": 1438243871, "Måneskin | Beggin'": 1320781379, "The Chainsmokers | Roses": 1050203620, "Blackbear | Hot Girl Bummer": 1576025375, "Vance Joy | Riptide": 1022164261, "One Direction | Steal My Girl": 914556572, "A Great Big World | Say Something": 735301552, "Jessie J | Price Tag": 1442259252, "Katy Perry | The One That Got Away": 716192666, "Taylor Swift | Delicate": 1440934254, "Rihanna | Where Have You Been": 1443105353, "Jessie J | Domino": 1440809113, "Camila Cabello | Never Be the Same": 1321217021, "Little Mix | Shout Out to My Ex": 1594440592, "Travis Scott | goosebumps": 1151481750, "Maroon 5 | Animals": 1440855552, "Little Mix | Black Magic": 1016217388, "Lizzo | Truth Hurts": 1498195354, "The Neighbourhood | Sweater Weather": 635016640, "Taylor Swift | All Too Well": 1440935561, "Imagine Dragons | Whatever It Takes": 1411628148, "Bruno Mars | Treasure": 581806439, "Adele | Send My Love (To Your New Lover)": 1544494394, "Ariana Grande | Dangerous Woman": 1440843916, "Demi Lovato | Heart Attack": 1440620921, "Katy Perry | Part of Me": 716085475, "Topic & A7S | Breaking Me": 1490348552, "Calvin Harris | My Way": 1153704956, "Lorde | Team": 1440818672, "Black Eyed Peas | Just Can't Get Enough": 1440772193, "Loud Luxury | Body": 1296233048, "The Weeknd | Call Out My Name": 1363308560, "Ariana Grande | Into You": 1440843926, "Kelly Clarkson | Stronger (What Doesn't Kill You)": 464446141, "Alan Walker | Faded": 1196294581, "Ed Sheeran | The A Team": 448213995, "One Direction | Little Things": 574406659, "Daft Punk | Get Lucky": 617154366, "Tove Lo | Habits (Stay High)": 1443337632, "Dynoro & Gigi D'Agostino | In My Mind": 1390113209, "Route 94 | My Love": 1684266975, "Bruno Mars | Finesse": 1161504065, "American Authors | Best Day Of My Life": 1440851075, "Psy | Gangnam Style": 1445144527, "Gnash | I Hate U, I Love U": 1099849073, "Neon Trees | Everybody Talks": 1597386444, "Mabel | Don't Call Me Up": 1447869530, "Liam Payne | Strip That Down": 1445039161, "Coldplay | Hymn for the Weekend": 1053934844, "Avicii | Levels": 1440787349, "Felix Jaehn | Ain't Nobody (Loves Me Better)": 1445288514, "James Bay | Hold Back The River": 1440840120, "Olly Murs | Troublemaker": 720777920, "Sam Smith | Lay Me Down": 1440814843, "Billie Eilish | when the party's over": 1450695872, "Ed Sheeran | Sing": 1050204619, "Train | Drive By": 1438078577, "Ariana Grande | God Is a Woman": 1399203750, "Avicii | I Could Be The One (Avicii Vs. Nicky Romero)": 1807714128, "Calvin Harris | Outside": 922876187, "The Weeknd | Heartless": 1499386253, "Fifth Harmony | Worth It": 909767585, "Julia Michaels | Issues": 1440909761, "Usher | OMG": 923691591, "The Chainsmokers | Paris": 1207120538, "Jess Glynne | I'll Be There": 1463404719, "Jess Glynne | Hold My Hand": 1027563253, "P!nk | What About Us": 1269268841, "Justin Bieber | Boyfriend": 1440650857, "One Direction | Best Song Ever": 695318301, "David Guetta | Lovers on the Sun": 924568905, "Shawn Mendes | If I Can't Have You": 1474313954, "P!nk | Raise Your Glass": 881915788, "Katy Perry | Wide Awake": 716085504, "Keala Settle & The Greatest Showman Ensemble | This Is Me": 1436091877, "Jason Derulo | In My Head": 353554374, "Fun | Some Nights": 601186061, "Travie McCoy | Billionaire": 374385942, "Jonas Blue | Rise": 1383852262, "Katy Perry | E.T.": 716192673, "Kesha | We R Who We R": 529843559, "Taylor Swift | Me!": 1468058706, "Martin Garrix | Animals": 1670593167, "Nick Jonas | Jealous": 1440813456, "MKTO | Classic": 853842868, "Justin Bieber & BloodPop® | Friends": 1444849161, "Duke Dumont | I Got U": 1445284072, "Calvin Harris, Rag'n'Bone Man | Giant": 1447498494, "Ella Henderson | Ghost": 942753720, "Jason Mraz | I Won't Give Up": 509536631, "Galantis | Runaway (U & I)": 984746629, "Ariana Grande | Break Free": 1440852687, "David Guetta | Where Them Girls At": 693224810, "Black Eyed Peas | The Time (Dirty Bit)": 1440771526, "Lady Gaga | Born This Way": 1440824264, "Halsey | Bad At Love": 1440880507, "Taylor Swift | Bad Blood": 1440936028, "Ariana Grande & Social House | boyfriend": 1474641583, "Meghan Trainor | Like I'm Gonna Lose You": 929825619, "Sam Smith | Money On My Mind": 1759498137, "James Bay | Let It Go": 1440840292, "AWOLNATION | Sail": 422478211, "Ellie Goulding | Lights": 1446018500, "Jonas Blue | Mama": 1437811943, "Hailee Steinfeld & Grey | Starving": 1444891951, "Tom Odell | Another Love": 719002824, "Bingo Players | Get Up (Rattle)": 439942411, "Sigala | Easy Love": 1031962631, "Lily Allen | Somewhere Only We Know": 736799871, "Florence + The Machine | Spectrum (Say My Name)": 1440717175, "Selena Gomez | Good for You": 1440836811, "LMFAO | Sexy and I Know It": 1440636628, "Rita Ora | Anywhere": 1436290336, "Pitbull | Feel This Moment": 737053272, "Niall Horan | Slow Hands": 1444891331, "Khalid | Young Dumb & Broke": 1200868874, "Oliver Heldens & Becky Hill | Gecko (Overdrive)": 873131250, "David Guetta | Hey Mama": 924568962, "Zedd | Clarity": 1440861976, "Little Mix | Woman Like Me": 1453839527, "Galantis | No Money": 1257259293, "DJ Snake | Turn Down for What": 786489670, "Labrinth | Beneath Your Beautiful": 687554548, "Meghan Trainor | Lips Are Movin": 929825624, "Lewis Capaldi | Hold Me While You Wait": 1452619052, "Jess Glynne | Don't Be so Hard on Yourself": 1027563258, "The Script | Superheroes": 903055962, "Selena Gomez | Back To You": 1381915969, "Aloe Blacc | The Man": 1758438884, "Ne-Yo | Let Me Love You (Until You Learn to Love Yourself)": 1445309387, "Zara Larsson and MNEK | Never Forget You": 1201058123, "Maroon 5 | Don't Wanna Know": 1396141925, "Deorro & Chris Brown | Five More Hours": 1214121047, "Jason Derulo | Ridin' Solo": 353554373, "Jax Jones | You Don't Know Me": 1478299357, "Taylor Swift | You Need to Calm Down": 1468058704, "Kiesza | Hideaway": 1440852749, "DVBBS & Borgeous | Tsunami": 1350838116, "Sam Smith | Writing's On The Wall": 1445028072, "Rudimental | Waiting All Night": 666989917, "Demi Lovato | Sorry Not Sorry": 1405206203, "Zedd | Stay The Night": 1440818685, "Charlie Puth | One Call Away": 1031416179, "Ed Sheeran | South of the Border": 1464549675, "Carly Rae Jepsen | I Really Like You": 1833371784, "Far East Movement | Like a G6": 1442933060, "Elton John & Britney Spears | Hold Me Closer": 1641082205, "George Ezra | Paradise": 1331589488, "Taylor Swift | We Are Never Ever Getting Back Together": 1440935564, "Ellie Goulding | How Long Will I Love You": 1440861670, "Ella Mai | Boo'd Up": 1436555513, "will.i.am | #thatPOWER": 1443180801, "Christina Perri | A Thousand Years": 467967170, "Avicii | Lonely Together": 1440899202, "One Direction | Live While We're Young": 574406657, "Jason Derulo | Trumpets": 840381892, "Ed Sheeran | Bloodstream": 1050204627, "Andy Grammer | Honey, I'm Good": 1780516397, "Aloe Blacc | I Need A Dollar": 469302953, "Tiësto & Dzeko | Jackie Chan": 1382339701, "Jason Derulo | The Other Side": 840381897, "Tove Lo | Talking Body": 1443219393, "Alessia Cara | Here": 1440845747, "Lizzo | Good as Hell": 1150159755, "Beyoncé | Best Thing I Never Had": 626205875, "Camila Cabello | My Oh My": 1487577497, "CNCO & Little Mix | Reggaetón Lento (Bailemos)": 1353933557, "Christina Perri | Jar of Hearts": 511504020, "Tiësto | Wasted": 1443117439, "Emeli Sandé | Read All About It, Pt. III": 1440860089, "Zara Larsson | I Would Like": 1201058119, "Clean Bandit | I Miss You": 1436738935, "David Guetta | 2U": 1445023444, "Silk City, Dua Lipa | Electricity": 1434745795, "Shawn Mendes | In My Blood": 1376115725, "Lady Gaga | Applause": 1451768063, "Black Eyed Peas and J Balvin | Ritmo (Bad Boys for Life)": 1495128542, "Owl City and Carly Rae Jepsen | Good Time": 1440807030, "Beyoncé | Drunk in Love": 939780999, "Alicia Keys | Girl on Fire": 1635638720, "Ariana Grande | The Way": 1704227298, "Rihanna | Bitch Better Have My Money": 985890936, "Rita Ora | Let You Love Me": 1436290337, "OneRepublic | Love Runs Out": 1440854622, "ZHU | Faded": 918184083, "Klangkarussell | Sonnentanz": 1469577793, "Imagine Dragons | It's Time": 1440873335, "Selena Gomez | Same Old Love": 1440826561, "Lil Nas X | Panini": 1468166328, "Pitbull | International Love": 440733046, "Charli XCX | Boom Clap": 855630942, "Kesha | Your Love Is My Drug": 374879155, "Tom Walker | Just You and I": 1448281737, "Justin Timberlake | Suit & Tie": 1422654146, "Meghan Trainor | NO": 1089260138, "Justin Bieber | As Long As You Love Me": 1440650859, "Anna Kendrick | Cups (Pitch Perfect’s “When I’m Gone”)": 1440796148, "Symphony of Unity, Sebastian Ingrosso, Tommy Trash & John Martin | Reload": 1846342225, "Selena Gomez | Come & Get It": 1440625020, "Jason Derulo | It Girl": 462011871, "Sigala & Bryn Christopher | Sweet Lovin'": 1078996073, "Pitbull | Hey Baby (Drop It to the Floor)": 440733039, "Sia | The Greatest": 1162482639, "Snakehips | All My Friends": 1102852353, "Ed Sheeran | Lego House": 448214023, "Little Mix | Touch": 1581465572, "Lady Gaga | The Edge of Glory": 1440858186, "The Script | For the First Time": 563642184, "Maroon 5 | Daylight": 1440805175, "Ed Sheeran | Cross Me": 1471580174, "Hot Chelle Rae | Tonight Tonight": 473422500, "Kesha | Blow": 529843561, "Ellie Goulding | On My Mind": 1443293593, "Jason Derulo | Wiggle": 840381891, "David Guetta | Dangerous": 924568893, "P!nk | Just Like Fire": 1101931754, "Coldplay & Rihanna | Princess of China": 726373202, "David Guetta | Without You": 693226002, "David Guetta | Turn Me On": 1440900899, "Olly Murs | Up": 952976948, "Naughty Boy | Runnin' (Lose It All)": 1444611080, "Demi Lovato | Give Your Heart a Break": 1440651715, "James Blunt | Bonfire Heart": 698152439, "NEIKED | Sexual": 1444616616, "David Guetta | Shot Me Down": 924568983, "Martin Solveig & Good Times Ahead | Intoxicated": 1772913544, "Jason Derulo | Tip Toe": 1307274225, "Avicii | You Make Me": 1440872944, "Cobra Starship | You Make Me Feel...": 458839819, "Phillip Phillips | Home": 1440862440, "Harry Styles | As It Was": 1615585008, "Lady Gaga & Bruno Mars | Die With A Smile": 1762656732, "Glass Animals | Heat Waves": 1508562516, "Sabrina Carpenter | Espresso": 1752214923, "The Kid LAROI & Justin Bieber | STAY": 1574968888, "Benson Boone | Beautiful Things": 1724488124, "Miley Cyrus | Flowers": 1674691586, "Olivia Rodrigo | drivers license": 1560735480, "Billie Eilish | BIRDS OF A FEATHER": 1739659142, "Elton John & Dua Lipa | Cold Heart": 1652668531, "Olivia Rodrigo | good 4 u": 1582277652, "The Weeknd | Save Your Tears": 1499386369, "Dua Lipa | Levitating": 1538003843, "SZA | Kill Bill": 1657869393, "Teddy Swims | Lose Control": 1691699836, "Adele | Easy On Me": 1590036021, "David Guetta & Bebe Rexha | I'm Good (Blue)": 1678878113, "Doja Cat | Kiss Me More": 1573475847, "Gigi Perez | Sailor Song": 1770187510, "ROSÉ & Bruno Mars | APT.": 1773452221, "Ed Sheeran | Bad Habits": 1571330212, "Alex Warren | Ordinary": 1793663645, "24kGoldn | Mood": 1559066401, "Lil Nas X | MONTERO (Call Me By Your Name)": 1559318719, "Ed Sheeran | Shivers": 1581087034, "Justin Bieber | Ghost": 1556170100, "Hozier | Too Sweet": 1735414394, "Taylor Swift | Anti-Hero": 1649434293, "Olivia Rodrigo | deja vu": 1560735847, "Sabrina Carpenter | Please Please Please": 1752214912, "Jung Kook | Seven": 1709555102, "Sam Smith & Kim Petras | Unholy": 1643168566, "Chappell Roan | Good Luck, Babe!": 1737497080, "Eminem | Godzilla": 1495269629, "Tate McRae | greedy": 1719661252, "Noah Kahan | Stick Season": 1689825330, "Gracie Abrams | That's So True": 1775581103, "Lil Nas X & Jack Harlow | INDUSTRY BABY": 1577414972, "Ariana Grande | we can't be friends (wait for your love)": 1725913689, "SZA | Snooze": 1658650499, "DaBaby | Rockstar": 1508028869, "Rema & Selena Gomez | Calm Down": 1640501238, "Ariana Grande | positions": 1537486846, "Shaboozey | A Bar Song (Tipsy)": 1749591722, "Olivia Rodrigo | vampire": 1736995100, "Taylor Swift | The Fate of Ophelia": 6814997402, "OneRepublic | I Ain't Worried": 1621817894, "Justin Bieber | Peaches": 1556170101, "Metro Boomin, the Weeknd and 21 Savage | Creepin'": 1657584259, "Billie Eilish | What Was I Made For?": 1689239800, "BTS | Dynamite": 1596532400, "Silk Sonic | Leave the Door Open": 1612867242, "Kendrick Lamar & SZA | luther": 1781270323, "Djo | End of Beginning": 1632448108, "Doja Cat | Paint The Town Red": 1699832214, "Doja Cat | Woman": 1573475829, "Imagine Dragons | Enemy": 1591640885, "Sabrina Carpenter | Taste": 1750307079, "Cardi B | WAP": 1822585609, "Internet Money, Gunna & Don Toliver | Lemonade": 1711563495, "Post Malone | I Had Some Help": 1744452425, "Billie Eilish | WILDFLOWER": 1739659144, "Jimin | Who": 1751773093, "Olivia Dean | Man I Need": 1817609509, "Joel Corry | Head & Heart": 1518804165, "Dua Lipa | Dance the Night": 1689238922, "Future | Life Is Good": 1513389478, "RAYE | Escapism.": 1668176885, "Chappell Roan | Pink Pony Club": 1675173768, "Lola Young | Messy": 1746042186, "The Weeknd and Playboi Carti | Timeless": 1793702853, "Lady Gaga & Ariana Grande | Rain On Me": 1500952424, "Olivia Rodrigo | traitor": 1560735421, "Powfu | death bed (coffee for your head)": 1498128769, "Taylor Swift | Fortnight": 1736268216, "Ravyn Lenae | Love Me Not": 1743852427, "Lost Frequencies & Calum Scott | Where Are You Now": 1576395046, "BTS | Butter": 1627575769, "Sabrina Carpenter | Manchild": 1819377511, "Kenya Grace | Strangers": 1704393613, "Coldplay & BTS | My Universe": 1576350174, "Steve Lacy | Bad Habit": 6788150545, "Artemas | I Like the Way You Kiss Me": 1736426869, "Billie Eilish | Happier Than Ever": 1584262469, "Raye | Where Is My Husband!": 1838737598, "Doja Cat | Need to Know": 1573475837, "sombr | back to friends": 1786481197, "Justin Bieber | Intentions": 1496639586, "Justin Bieber | DAISIES": 1825994649, "Harry Styles | Late Night Talking": 1615585006, "Tiësto | The Business": 1532019310, "Lil Nas X | THAT'S WHAT I WANT": 1586182264, "Cassö & Raye | Prada": 1705910871, "Tyla | Water": 1699082734, "Taylor Swift | Opalite": 6814997409, "Lil Mosey | Blueberry Faygo": 1497581631, "Dua Lipa | Houdini": 1714502827, "Olivia Dean | So Easy (To Fall in Love)": 1817609507, "Giveon | Heartbreak Anniversary": 1499127838, "The Kid Laroi | Without You": 1579787427, "Dua Lipa | Physical": 1538003644, "Billie Eilish | No Time To Die": 1498647654, "Billie Eilish | LUNCH": 1739659140, "SZA | Saturn": 1732348414, "Billie Eilish | Therefore I Am": 1564531181, "Taylor Swift | cardigan": 1524801580, "Dua Lipa | Break My Heart": 1538004012, "Ariana Grande | 34+35": 1537486672, "Meghan Trainor | Made You Look": 1630437329, "Lizzo | About Damn Time": 1634655870, "Ariana Grande & Justin Bieber | Stuck with U": 1511562950, "Nicky Youre & dazy | Sunroof": 1689433299, "LF System | Afraid to Feel": 1616903944, "Jvke | Golden Hour": 1640157165, "Taylor Swift | Is It Over Now?": 1708309430, "Calvin Harris & Ellie Goulding | Miracle": 1673798699, "Myles Smith | Stargazing": 1742275653, "Drake | Jimmy Cooks": 1630221907, "Nathan Evans, 220 Kid & Billen Ted | Wellerman": 1644665577, "Joji | Glimpse of Us": 1776748883, "Ariana Grande | yes, and?": 1724584103, "The Marías | No One Noticed": 1733731157, "Riton & Nightcrawlers | Friday": 1544962737, "Adele | Oh My God": 1590036031, "SZA | Good Days": 1658650802, "Tate McRae | Sports car": 1779319634, "Gracie Abrams | I Love You, I'm Sorry": 1770861177, "Ed Sheeran | Eyes Closed": 1766261548, "Stephen Sanchez | Until I Found You": 1581702085, "Chris Brown and Young Thug | Go Crazy": 1512304640, "Taylor Swift | Karma": 1649435543, "Sam Fender | Rein Me In": 1846589938, "Taylor Swift | Lavender Haze": 1649435004, "Lewis Capaldi | Forget Me": 1637088297, "Lady Gaga | Abracadabra": 1837310871, "Eliza Rose & Interplanetary Criminal | B.O.T.A. (Baddest of Them All)": 1639317826, "Dua Lipa | Training Season": 1727526894, "Lewis Capaldi | Wish You the Best": 1649787568, "Beyoncé | CUFF IT": 1636790292, "Olivia Rodrigo | bad idea right?": 1736995097, "WizTheMc & Bees & Honey | Show Me Love": 6766874208, "Ed Sheeran | Afterglow": 1545341251, "Beyoncé | BREAK MY SOUL": 1630005854, "Mitski | My Love Mine All Mine": 1697335814, "Chappell Roan | HOT TO GO!": 1707413105, "Chappell Roan | The Subway": 1831372120, "Doja Cat and the Weeknd | You Right": 1577637135, "Drake | Nokia": 6814098030, "Benson Boone | Slow It Down": 1736051616, "Maroon 5 & Megan Thee Stallion | Beautiful Mistakes": 1570531973, "Becky Hill & David Guetta | Remember": 1570736952, "Little Mix | Sweet Melody": 1531469131, "Taylor Swift | Now That We Don't Talk (Taylor's Version)": 1713846523, "Galantis, David Guetta & Little Mix | Heartbreak Anthem": 1740520900, "Justin Bieber | Anyone": 1544839502, "Teddy Swims | The Door": 1691699849, "Justin Bieber | Holy": 1531508507, "Joel Corry, Raye & David Guetta | Bed": 1552434656, "Sabrina Carpenter | Tears": 1819861157, "Chrystal | The Days": 1771477810, "Taylor Swift | I Can Do It with a Broken Heart": 1742074914, "Justin Bieber | Yummy": 1492502431, "Harry Styles | Music for a Sushi Restaurant": 1615585001, "Olivia Dean | Nice to Each Other": 1814620247, "Ed Sheeran | Azizam": 1803412611, "Leon Thomas | Mutt": 1761678083, "Nicki Minaj and Ice Spice | Barbie World": 1689239206, "PinkPantheress | Boy's a Liar": 1656745398, "Meduza | Paradise": 1536062139, "Calvin Harris & Clementine Douglas | Blessings": 1811333176, "Lauren Spencer-Smith | Fingers Crossed": 1710436008, "Taylor Swift | Down Bad": 1742074195, "Cat Burns | Go": 1618963983, "Taylor Swift | Elizabeth Taylor": 6814995864, "Peggy Gou | (It Goes Like) Nanana": 1689088958, "Sabrina Carpenter | Bed Chem": 1750307088, "George Ezra | Green Green Grass": 1606177914, "Taylor Swift | Snow on the Beach": 1645937258, "Sam Fender | Seventeen Going Under": 1575910316, "Em Beihold | Numb Little Bug": 1633558383, "Bruno Mars, Anderson .Paak & Silk Sonic | Smokin out the Window": 1611638138, "SZA | 30 for 30": 1796270267, "Jazzy | Giving Me": 1674124880, "Bl3ss & CamrinWatsin | Kisses": 1735803279, "Benson Boone | Mystical Magical": 1807490820, "YG Marley | Praise Jah in the Moonlight": 1723309988, "Adele | I Drink Wine": 1590036250, "Ed Sheeran | Overpass Graffiti": 1581087534, "Benson Boone | Sorry I'm Here for Someone Else": 1797895104, "Fred Again & Obongjayar | Adore U": 1700707219, "David Guetta, Becky Hill & Ella Henderson | Crazy What Love Can Do": 1614270485, "SZA | I Hate U": 1658650801, "Jessie Murph and Jelly Roll | Wild Ones": 1727004103, "Luude | Down Under": 1595974668, "Joel Corry | Lonely": 1492481353, "Paul Woolford, Diplo & Kareen Lomax | Looking for Me": 1511808887, "Switch Disco & Ella Henderson | React": 1663845297, "Ed Sheeran | Sapphire": 1811175544, "Sonny Fodera, Jazzy & D.O.D. | Somedays": 1753774219, "Noah Kahan | Homesick": 1644787823, "Chase & Status & Bou | Baddadan": 1698551200};

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
