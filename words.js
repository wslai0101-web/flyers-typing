// 劍橋 Flyers (A2) 完整 15 大主題題庫 (已整合天氣與自然)
const datasets = [
    {
        category: "🦁 動物與自然",
        sentences: [
            { en: "The dangerous dinosaur lived a long time ago and was heavier than an elephant.", zh: "那隻危險的恐龍生活在很久以前，而且比大象還要重。" },
            { en: "An octopus has eight arms and lives deep in the ocean where it is very dark.", zh: "章魚有八隻手臂，生活在非常黑暗的深海中。" }
        ]
    },
    {
        category: "👩‍🚀 職業與工作",
        sentences: [
            { en: "The brave astronaut who went into space is talking to the journalist today.", zh: "那位上太空的勇敢太空人今天正在跟記者說話。" },
            { en: "The mechanic is going to repair the police car which broke down yesterday.", zh: "技工將要修理那輛昨天拋錨的警車。" }
        ]
    },
    {
        category: "⚽ 運動與休閒",
        sentences: [
            { en: "The children were playing volleyball on the beach when the sun went down.", zh: "太陽下山時，孩子們正在沙灘上打排球。" },
            { en: "I am going to buy a new snowboard for my winter holiday in the mountains.", zh: "我打算買一塊新的單板滑雪板，為了在山上的冬季假期。" },
            { en: "He has already scored three goals in this exciting football match.", zh: "他在這場激烈的足球比賽中已經進了三球。" },
            { en: "We should practice throwing and catching the ball to win the game.", zh: "我們應該練習投球和接球以贏得比賽。" }
        ]
    },
    {
        category: "🏥 健康與身體",
        sentences: [
            { en: "The dentist told me that I should brush my teeth twice a day.", zh: "牙醫告訴我應該每天刷兩次牙。" },
            { en: "She went to the hospital because she had a terrible stomachache after dinner.", zh: "她去醫院是因為晚餐後她肚子痛得厲害。" },
            { en: "You must take this medicine and drink plenty of water to get better soon.", zh: "你必須吃這個藥並多喝水才能快點好起來。" },
            { en: "He broke his arm while he was playing volleyball on the beach last weekend.", zh: "上週末他在海灘打排球時摔斷了手臂。" },
            { en: "My grandfather has just bought a new pair of glasses to read the newspaper.", zh: "我爺爺剛買了一副新眼鏡來看報紙。" }
        ]
    },
    {
        category: "🍔 食物與飲料",
        sentences: [
            { en: "My mother has already bought some flour, sugar and butter to bake a cake.", zh: "我媽媽已經買了一些麵粉、糖和奶油來烤蛋糕。" },
            { en: "I would like a bowl of hot soup and a piece of cheese pizza, please.", zh: "請給我一碗熱湯和一塊起司披薩。" },
            { en: "They were eating jam sandwiches and chatting cheerfully in the dining room.", zh: "他們當時正在餐廳裡吃著果醬三明治並開心地聊天。" },
            { en: "Remember to put the strawberries and yogurt in the fridge so they stay fresh.", zh: "記得把草莓和優格放進冰箱裡保鮮。" },
            { en: "The waiter brought us some delicious biscuits and a large bottle of lemonade.", zh: "服務生給我們拿來了一些美味的餅乾和一大瓶檸檬水。" }
        ]
    },
    {
        category: "✈️ 交通與旅行",
        sentences: [
            { en: "The passengers have waited at the airport for three hours because of the fog.", zh: "因為大霧，乘客們已經在機場等了三個小時。" },
            { en: "We are going to buy tickets for the fast train that leaves at half past four.", zh: "我們準備買四點半出發的高鐵車票。" },
            { en: "The traffic was very heavy yesterday, so the bus arrived later than usual.", zh: "昨天交通非常擁擠，所以公車比平常晚到。" },
            { en: "He was riding his new bicycle over the bridge when his hat blew away.", zh: "當他騎著新腳踏車過橋時，他的帽子被吹走了。" },
            { en: "Our family will travel to a beautiful island by ferry next summer.", zh: "我們一家人明年夏天將搭渡輪去一座美麗的島嶼旅行。" }
        ]
    },
    {
        category: "🎒 學校與教室",
        sentences: [
            { en: "Geography is my favorite subject because I enjoy learning about different countries.", zh: "地理是我最喜歡的科目，因為我喜歡學習關於不同的國家。" },
            { en: "The students have just finished their interesting project about environmental protection.", zh: "學生們剛完成了他們關於環境保護的有趣計畫。" },
            { en: "You should always keep your computer password a secret and never lose it.", zh: "你應該永遠保密你的電腦密碼，絕對不要弄丟。" },
            { en: "If you don't understand the difficult word, you can look it up in the dictionary.", zh: "如果你不懂這個困難的單字，你可以在字典裡查閱。" },
            { en: "Our teacher is writing some important sentences on the board for the exam.", zh: "我們的老師正在黑板上寫一些考試用的重要句子。" }
        ]
    },
    {
        category: "🏠 家庭與生活",
        sentences: [
            { en: "Someone is knocking on the front door, but I can't find my keys.", zh: "有人在敲前門，但我找不到我的鑰匙。" },
            { en: "We need to clean the messy balcony and throw away the rubbish today.", zh: "我們今天需要打掃凌亂的陽台並把垃圾丟掉。" },
            { en: "My sister was drying her hair in the bathroom when the telephone rang.", zh: "電話響的時候，我妹妹正在浴室裡吹乾她的頭髮。" },
            { en: "I usually keep my magazines and a small flashlight on the shelf near my bed.", zh: "我通常把雜誌和一個小手電筒放在床邊的架子上。" },
            { en: "Have you turned off the television before you went upstairs to sleep?", zh: "你上樓睡覺前有關掉電視嗎？" }
        ]
    },
    {
        category: "👕 衣服與配件",
        sentences: [
            { en: "She decided to wear a silver necklace and a striped dress for the party.", zh: "她決定戴一條銀項鍊並穿一件條紋洋裝去參加派對。" },
            { en: "It is going to snow tomorrow, so you must wear a warm coat and gloves.", zh: "明天會下雪，所以你必須穿上保暖的外套並戴上手套。" },
            { en: "I have lost one of my favorite socks and my comfortable winter boots.", zh: "我弄丟了其中一隻我最喜歡的襪子和我那雙舒服的冬靴。" },
            { en: "The uniform which I bought last year is too small for me now.", zh: "我去年買的那套制服現在對我來說太小了。" },
            { en: "He put his comb and toothbrush into a blue plastic bag for the trip.", zh: "他把梳子和牙刷放進一個藍色塑膠袋裡準備旅行。" }
        ]
    },
    {
        category: "⛅ 時間、天氣與自然",
        sentences: [
            { en: "We are going to meet at a quarter to seven outside the modern museum.", zh: "我們打算七點差一刻在現代博物館外面碰面。" },
            { en: "It was raining heavily yesterday morning, but now the sun is shining brightly.", zh: "昨天早上雨下得很大，但現在陽光明媚。" },
            { en: "The temperature dropped below zero last night, and the lake is covered in ice.", zh: "昨晚氣溫降到了零度以下，湖面結冰了。" },
            { en: "I have never seen such a beautiful rainbow after a terrible thunderstorm.", zh: "在可怕的雷雨之後，我從沒見過這麼美麗的彩虹。" },
            { en: "Autumn is my favorite season because the leaves turn red and yellow.", zh: "秋天是我最喜歡的季節，因為樹葉會變成紅色和黃色。" },
            { en: "We were watching the dark sky when a terrible storm started yesterday evening.", zh: "昨晚一場可怕的暴風雨開始時，我們正在看著黑暗的天空。" },
            { en: "Have you ever seen a beautiful rainbow in the sky after the heavy rain?", zh: "你曾見過大雨後天空中美麗的彩虹嗎？" },
            { en: "The temperature has dropped below zero, so there is dangerous ice on the road.", zh: "氣溫已經降到了零度以下，所以路上有危險的結冰。" },
            { en: "The boys were exploring a dark cave which was hidden behind the tall trees.", zh: "男孩們當時正在探索一個隱藏在高大樹木後面的黑暗洞穴。" },
            { en: "A camel is an amazing animal which can live in the hot, dry desert.", zh: "駱駝是一種令人驚嘆的動物，牠可以生活在炎熱乾燥的沙漠中。" },
            { en: "We took some photos of the beautiful waterfall which we found in the forest.", zh: "我們拍了一些我們在森林裡找到的美麗瀑布的照片。" },
            { en: "We should protect the environment for the beautiful swans which live by the river.", zh: "我們應該為了生活在河邊的美麗天鵝保護環境。" },
            { en: "I have always loved autumn because the leaves change colour and fall from trees.", zh: "我一直很喜歡秋天，因為樹葉會變色並從樹上掉下來。" },
            { en: "The children have just found a small tortoise which was walking in the garden.", zh: "孩子們剛發現一隻正在花園裡散步的小烏龜。" },
            { en: "A strong wind was blowing while the children were playing outside in the snow.", zh: "孩子們在外面雪地裡玩耍時，正吹著強風。" }
        ]
    },
    {
        category: "🏙️ 城市與地點",
        sentences: [
            { en: "The post office is situated between the police station and the large supermarket.", zh: "郵局位於警察局和大型超市之間。" },
            { en: "We walked straight ahead, crossed the busy street, and turned left at the corner.", zh: "我們直走，穿過繁忙的街道，然後在轉角處左轉。" },
            { en: "There is a famous castle on the top of the hill which attracts many tourists.", zh: "山頂上有一座著名的城堡，吸引了許多遊客。" },
            { en: "I am going to wait for my friends in front of the new cinema.", zh: "我打算在新電影院前面等我的朋友。" },
            { en: "The fire station is just round the corner, opposite the grand hotel.", zh: "消防局就在轉角處，在豪華飯店的對面。" }
        ]
    },
    {
        category: "💥 魔王關卡：不規則動詞",
        sentences: [
            { en: "The naughty monkey stole my yellow banana and hid in the tall tree.", zh: "調皮的猴子偷了我的黃色香蕉並躲在高樹上。" },
            { en: "I forgot to bring my heavy dictionary, so my teacher was a little angry.", zh: "我忘記帶我厚重的字典，所以我的老師有點生氣。" },
            { en: "The brave police officer caught the bad thief who broke the glass window.", zh: "勇敢的警察抓住了打破玻璃窗的壞小偷。" },
            { en: "We drove to the beautiful beach and swam in the sea all afternoon.", zh: "我們開車去美麗的海灘，並在海裡游了一個下午。" },
            { en: "The strange bird flew into my bedroom and woke me up early this morning.", zh: "那隻奇怪的鳥飛進我的臥室，並在今早把我吵醒。" },
            { en: "She chose a beautiful dress and wore it to the amazing birthday party.", zh: "她選了一件美麗的洋裝並穿著它去參加超棒的生日派對。" },
            { en: "The famous player threw the ball so hard that no one could catch it.", zh: "那位著名的球員把球丟得太用力，以至於沒人能接住。" },
            { en: "My father bought me a new camera after I won the spelling competition.", zh: "在我贏得拼字比賽後，我爸爸給我買了一台新相機。" },
            { en: "Have you spoken to the new student who came from another country yesterday?", zh: "你跟昨天那個從別的國家來的新學生說過話了嗎？" },
            { en: "The wind blew very hard and tore my favorite kite into small pieces.", zh: "風吹得非常大，把我最喜歡的風箏撕成了碎片。" }
        ]
    },
    {
        category: "🕵️‍♂️ 挑戰關卡：易混淆形容詞",
        sentences: [
            { en: "The scary movie was so frightening that the little boy couldn't sleep at night.", zh: "那部恐怖電影太嚇人了，讓那個小男孩晚上睡不著覺。" },
            { en: "We are very excited because we are going to a fantastic amusement park tomorrow.", zh: "我們非常興奮，因為我們明天要去一個很棒的遊樂園。" },
            { en: "This history book is really boring, so I feel bored when I read it.", zh: "這本歷史書真的很無聊，所以我讀它的時候覺得很無趣。" },
            { en: "Walking up the high mountain is tiring, but the view is absolutely wonderful.", zh: "爬高山很令人疲倦，但風景絕對是非常美好的。" },
            { en: "She is very interested in learning about strange insects and dangerous wild animals.", zh: "她對學習關於奇怪昆蟲和危險野生動物非常感興趣。" },
            { en: "It is dangerous to walk alone in the dark forest without a bright flashlight.", zh: "沒有明亮的手電筒獨自在黑暗的森林裡行走是很危險的。" },
            { en: "The brave fireman saved the poor cat from the empty and burning building.", zh: "勇敢的消防員從那棟空著且正在燃燒的建築物中救出了可憐的貓。" },
            { en: "I am feeling quite thirsty and hungry after finishing that difficult math test.", zh: "完成那場困難的數學考試後，我覺得非常口渴和飢餓。" },
            { en: "His bedroom is always untidy, with dirty clothes and heavy books everywhere.", zh: "他的臥室總是不整潔，到處都是髒衣服和厚重的書。" },
            { en: "The lovely queen wore a shiny gold crown and a beautiful silver necklace.", zh: "可愛的王后戴著一頂閃亮的金皇冠和一條美麗的銀項鍊。" }
        ]
    },
    {
        category: "🎉 派對與節慶",
        sentences: [
            { en: "We are going to have a fantastic birthday party with lots of balloons tomorrow.", zh: "我們明天將舉辦一場有很多氣球的超棒生日派對。" },
            { en: "The children who wore scary costumes collected lots of sweets on Halloween night.", zh: "萬聖節當晚，穿著恐怖服裝的孩子們收集了許多糖果。" },
            { en: "My grandmother has baked a huge chocolate cake for our special family dinner.", zh: "我奶奶為我們特別的家庭晚餐烤了一個巨大的巧克力蛋糕。" },
            { en: "They were singing happy songs and dancing together when the midnight fireworks started.", zh: "午夜煙火開始時，他們正一起唱著歡樂的歌並跳著舞。" },
            { en: "Everyone brought a lovely present to the party which was held in the garden.", zh: "每個人都帶了一份可愛的禮物來到在花園裡舉辦的派對。" },
            { en: "I have just received a beautiful invitation card from my best friend for her wedding.", zh: "我剛收到我最好朋友寄來的一張美麗的結婚請帖。" },
            { en: "The clever clown did some funny tricks that made all the guests laugh loudly.", zh: "聰明的小丑變了一些有趣的戲法，讓所有的客人都大聲笑了出來。" },
            { en: "We decorated the living room with colorful lights before the visitors arrived.", zh: "在訪客抵達之前，我們用五顏六色的燈飾佈置了客廳。" },
            { en: "Have you ever tried this delicious strawberry juice at a summer festival?", zh: "你曾在夏日祭典上喝過這種美味的草莓汁嗎？" },
            { en: "She was wearing a silver crown and a beautiful purple dress at the festival.", zh: "她在節慶上戴著一頂銀色皇冠，穿著一件美麗的紫色洋裝。" }
        ]
    },
    {
        category: "🎨 嗜好與興趣",
        sentences: [
            { en: "My brother is very good at playing the guitar and writing his own songs.", zh: "我哥哥非常擅長彈吉他和寫自己的歌。" },
            { en: "She has collected more than two hundred old stamps from different countries.", zh: "她已經收集了超過兩百張來自不同國家的舊郵票。" },
            { en: "We were building a huge sandcastle on the beach when the wave washed it away.", zh: "我們正在沙灘上堆一個巨大的沙堡時，海浪把它沖走了。" },
            { en: "Drawing colorful pictures of wild animals is my favorite hobby in my free time.", zh: "在空閒時間畫野生動物的彩色圖片是我最喜歡的嗜好。" },
            { en: "The boy who loves taking photographs bought a new camera yesterday morning.", zh: "那個熱愛攝影的男孩昨天早上買了一台新相機。" },
            { en: "I usually play chess with my clever grandfather after we finish our dinner.", zh: "我們吃完晚餐後，我通常會和我聰明的爺爺下西洋棋。" },
            { en: "Reading exciting comic books is much more interesting than watching television.", zh: "閱讀刺激的漫畫書比看電視有趣多了。" },
            { en: "Have you ever tried to make a model airplane using wood and glue?", zh: "你曾經嘗試過用木頭和膠水做模型飛機嗎？" },
            { en: "My sister enjoys knitting warm sweaters for our family during the cold winter.", zh: "我妹妹喜歡在寒冷的冬天為我們家編織溫暖的毛衣。" },
            { en: "They are going to join a sports club to learn how to play table tennis.", zh: "他們打算加入一個體育俱樂部來學習如何打桌球。" }
        ]
    }
];