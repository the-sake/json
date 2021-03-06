import { BrandType } from "./brand";
import { CategoryType } from "./category";

type Volume = '1.8L' | '720ml' | '500ml' | '300ml';

interface VolumePrice {
  volume: Volume;
  price?: number;
  priceKO?: number;
};

interface Sake {
  productName: {
    ja: string;
    fu: string;
    ko: string;
  };
  category: CategoryType;
  brand: BrandType;
  description: string;
  rice: {
    ja: string;
    ko: string;
  };
  ricePolishingRate: number;
  alcoholByVolume: number;
  sakeMeterValue: number;
  acidityLevel: number | string;
  volumePrice: VolumePrice[];
}

const sakeList: Sake[] = [
  {
    "brand": "kubota",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "셋포",
      "ja": "雪峰",
      "fu": "せっぽう"
    },
    "description": "사계절의 자연 속에서 천천히 즐기시기 위한, 특별한 쿠보타입니다. 산 간이 주모이 가져오는 절묘하게 어우러진 사려 깊은 맛이 특징에서 개성적이고 소박 넘치는 아웃도어 요리에도 균형 잘 어울립니다.계절이나 기호에 맞춘 온도에서 즐길 수 있으며 식히면 날카로운 맛으로 끊이 있는 뒷맛이 따뜻하게 하면 순하고 개성적인 향미가 뛰어납니다.",
    // "classificationKO": "준마이다이긴죠 (야마하이지코미)",
    // "classificationJA": "純米大吟醸（山廃仕込）",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 16,
    "sakeMeterValue": 2,
    "acidityLevel": 1.4,
    "volumePrice": [
      {
        "volume": "500ml",
        "price": 2760
      }
    ],
    // "imageURL": "p_kubota_001.png"
  },
  {
    "brand": "kubota",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "준마이다이긴죠",
      "ja": "純米大吟醸",
      "fu": "じゅんまいだいぎんじょう"
    },
    "description": "서양배, 멜론을 생각하는 화려한 향기와 감미와 산미가 어우러진 우아한 맛은 입에 넣으면 향미가 확산되면서 뒷맛이 흐르는 듯한 여운이 기분 좋게 느껴집니다.",
    // "classificationKO": "준마이다이긴죠 6월・10월 한정판매",
    // "classificationJA": "純米大吟醸 6月・10月限定出荷",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 15,
    "sakeMeterValue": 0,
    "acidityLevel": 1.3,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 3400
      },
      {
        "volume": "720ml",
        "price": 1570
      }
    ],
    // "imageURL": "p_kubota_002.png"
  },
  {
    "brand": "kubota",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "만쥬",
      "ja": "萬壽",
      "fu": "まんじゅ"
    },
    "description": "향기로운 맛을 절묘하게 빗어낸 '쿠보타 시리즈'의 최고봉입니다. 조화로운 감칠맛으로 존재감을 어필합니다.",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 15,
    "sakeMeterValue": 2,
    "acidityLevel": 1.2,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 8110
      },
      {
        "volume": "720ml",
        "price": 3640
      }
    ],
    // "imageURL": "p_kubota_003.png"
  },
  {
    "brand": "kubota",
    "category": "Daiginjo",
    "productName": {
      "ko": "수이쥬",
      "ja": "翠寿",
      "fu": "すいじゅ"
    },
    "description": "상큼하고 섬세한 느낌으로 빚어낸 다이긴죠 나마로, 화려한 향과 부드러운 맛이 인상적입니다.",
    // "classificationKO": "다이긴죠 (나마) 4~9월 한정출하",
    // "classificationJA": "大吟醸（生酒）4〜9月限定出荷",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 14,
    "sakeMeterValue": 4,
    "acidityLevel": 0.9,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 2810
      }
    ],
    // "imageURL": "p_kubota_004.png"
  },
  {
    "brand": "kubota",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "헤키쥬",
      "ja": "碧寿",
      "fu": "へきじゅ"
    },
    "description": "야마하이 술밑을 이용함으로써 맛에 깊이가 있으면서도 목넘김이 가벼운 준마이다이긴죠 술입니다.",
    // "classificationKO": "준마이다이긴죠 (야마하이)",
    // "classificationJA": "純米大吟醸（山廃仕込）",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 15,
    "sakeMeterValue": 2,
    "acidityLevel": 1.2,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 5030
      },
      {
        "volume": "720ml",
        "price": 2230
      }
    ],
    // "imageURL": "p_kubota_005.png"
  },
  {
    "brand": "kubota",
    "category": "Junmai Ginjo",
    "productName": {
      "ko": "코우쥬",
      "ja": "紅壽",
      "fu": "こうじゅ"
    },
    "description": "향은 은은하게 퍼지고, 맛은 약간 단맛에서 신맛으로 변해가면서 쌀 본래의 맛을 떠올리게 하는 감칠맛이 느껴집니다.",
    // "classificationKO": "준마이긴죠",
    // "classificationJA": "純米吟醸",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 55,
    "alcoholByVolume": 15,
    "sakeMeterValue": 2,
    "acidityLevel": 1.1,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 3310
      },
      {
        "volume": "720ml",
        "price": 1500
      }
    ],
    // "imageURL": "p_kubota_006.png"
  },
  {
    "brand": "kubota",
    "category": "Ginjo",
    "productName": {
      "ko": "센쥬",
      "ja": "千壽",
      "fu": "せんじゅ"
    },
    "description": "\"식사와 함께 즐기는 긴죠\"를 목표로, 향은 은은하고 느낌이 부드러워 싫증이 나지 않게 빚어냈습니다.",
    // "classificationKO": "긴죠",
    // "classificationJA": "吟醸",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 15,
    "sakeMeterValue": 5,
    "acidityLevel": 1.1,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 2430
      },
      {
        "volume": "720ml",
        "price": 1080
      }
    ],
    // "imageURL": "p_kubota_007.png"
  },
  {
    "brand": "kubota",
    "category": "Tokubetsu Honjozo",
    "productName": {
      "ko": "햐쿠쥬",
      "ja": "百寿",
      "fu": "ひゃくじゅ"
    },
    "description": "향은 줄이고 드라이해서 싫증이 나지 않는 차분한 품질로 빚어낸 \"쿠보타 시리즈\"의 기본형입니다.",
    // "classificationKO": "토쿠베츠혼죠조",
    // "classificationJA": "特別本醸造",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 60,
    "alcoholByVolume": 15,
    "sakeMeterValue": 5,
    "acidityLevel": 1.0,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 2010
      },
      {
        "volume": "720ml",
        "price": 920
      }
    ],
    // "imageURL": "p_kubota_008.png"
  },
  {
    "brand": "kubota",
    "category": "Ginjo",
    "productName": {
      "ko": "나마겐슈",
      "ja": "生原酒",
      "fu": "なまげんしゅ"
    },
    "description": "시보리타테의 전 국술 특유의 젊음과 상큼감, 그리고 원주 특유의 탄탄한 맛이 특징입니다.겨울만 한정 상품입니다.",
    // "classificationKO": "긴죠 (원주・생주) 1월한정출하",
    // "classificationJA": "吟醸（原酒・生酒）1月限定出荷",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 19,
    "sakeMeterValue": 5,
    "acidityLevel": 1.4,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 3120
      },
      {
        "volume": "720ml",
        "price": 1400
      }
    ],
    // "imageURL": "p_kubota_009.png"
  },
  {
    "brand": "koshi_no_kanbai",
    "category": "Daiginjo",
    "productName": {
      "ko": "쵸토쿠센",
      "ja": "超特撰",
      "fu": "ちょうとくせん"
    },
    "description": "정비비율 30%까지 깍은 상위등급의 야마다니시키를 듬뿍 사용해서 주조 장인의 기술과 열정을 담아 빚은 다이긴죠입니다.\n실내온도 1℃의 환경에서 약 2년간 숙성시킴으로서 감칠맛과 깊이를 충분히 끌어낸 후에 출시하고 있습니다.\n품격있는 긴죠향과 섬세하고 깨끗한 맛, 더욱이 마신 후에 감칠맛이 맴도는 여운을 즐길 수 있는게 특징입니다. 차게 해서 마셔도 맛있고, 다이긴죠이면서도 누루깡으로 마셔도 맛있습니다.",
    // "classificationKO": "다이긴죠",
    // "classificationJA": "大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 30,
    "alcoholByVolume": 16,
    "sakeMeterValue": 6,
    "acidityLevel": "비공개",
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 5200
      },
      {
        "volume": "500ml",
        "price": 3670
      }
    ],
    // "imageURL": "p_koshino_001.jpg"
  },
  {
    "brand": "koshi_no_kanbai",
    "category": "Ginjo",
    "productName": {
      "ko": "토쿠센",
      "ja": "特撰",
      "fu": "とくせん"
    },
    "description": "은은한 긴죠향이 느껴지며, 첫맛은 가볍고 매끄러워서 마시기 쉬우며, 뒷맛은 입 안에서 퍼져서 우아하게 마무리됩니다. 긴죠주이지만 상온에서도 누루깡으로 따뜻하게 마셔도 좋습니다. 술이 들어가도 마지막까지 변함 없는 맛을 즐기실 수 있습니다. 石本주조의 자랑입니다.",
    // "classificationKO": "긴죠",
    // "classificationJA": "吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 16,
    "sakeMeterValue": 8,
    "acidityLevel": "비공개",
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 3350
      },
      {
        "volume": "720ml",
        "price": 1675
      }
    ],
    // "imageURL": "p_koshino_002.jpg"
  },
  {
    "brand": "koshi_no_kanbai",
    "category": "Ginjo",
    "productName": {
      "ko": "벳센",
      "ja": "別撰",
      "fu": "べつせん"
    },
    "description": "향기와 맛 모두 경쾌한 특징을 가진 효모와 주적호적미으로만 빚어서, 경쾌하고 깔끔한 맛이 특징입니다.\n[담려가라구치]라고 부르기 걸맞게 상온이나 차게해서 마시면 아주 상쾌하며, 누루깡으로 따뜻하게 마시면 맛의 폭을 넓혀서 다양하게 즐길 수 있습니다.\n뭔가 좋을 일이 있을 때, 조금 분발하고 싶을 때, 그런 곳에 어울리는 술입니다.",
    // "classificationKO": "긴죠",
    // "classificationJA": "吟醸",
    "rice": {
      "ko": "고햐쿠만고쿠, 야마다니시키",
      "ja": "五百万石, 山田錦"
    },
    "ricePolishingRate": 55,
    "alcoholByVolume": 16,
    "sakeMeterValue": 7,
    "acidityLevel": "비공개",
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 2540
      },
      {
        "volume": "720ml",
        "price": 1210
      }
    ],
    // "imageURL": "p_koshino_003.jpg"
  },
  {
    "brand": "koshi_no_kanbai",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "킨무쿠",
      "ja": "金無垢",
      "fu": "きんむく"
    },
    "description": "정미비율 35%로 깍은 야마다니시키를 사용해서 은은한 긴죠향과 깊고 섬세한 입맛이 특징인 준마이다이긴죠입니다.\n숙성이 진행될 수록 맛이 오르는 [야마다니시키]를 최대한 실감할 수 있는 술입니다.\n저온에서 충분히 숙성시켰기 때문에 누루깡으로 향과 맛을 퍼짐을 즐기면서 마시는걸 권해드립니다.",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 35,
    "alcoholByVolume": 16,
    "sakeMeterValue": 3,
    "acidityLevel": "비공개",
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 10000
      },
      {
        "volume": "720ml",
        "price": 4300
      }
    ],
    // "imageURL": "p_koshino_004.jpg"
  },
  {
    "brand": "koshi_no_kanbai",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "무쿠",
      "ja": "無垢",
      "fu": "むく"
    },
    "description": "정미비율 48%로 깍은 야마다니시키를 사용하니다. 쌀 본래의 감칠맛을 제대로 살려낸 코시노칸바이의 준마이다이긴죠입니다. 산미를 억제한 폭과 깊이 있는 맛이 특징입니다. 걸쭉하며 매끄러운 향기 또한 큰 매력으로 천천히 즐길 수 있는 술입니다.",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 48,
    "alcoholByVolume": 16,
    "sakeMeterValue": 4,
    "acidityLevel": "비공개",
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 3800
      },
      {
        "volume": "720ml",
        "price": 1900
      }
    ],
    // "imageURL": "p_koshino_005.jpg"
  },
  {
    "brand": "koshi_no_kanbai",
    "category": "Junmai Ginjo",
    "productName": {
      "ko": "사이",
      "ja": "灑",
      "fu": "さい"
    },
    "description": "정미비율 55%로 깍아낸 고햐쿠만고쿠와 야마다니시키를 사용합니다. 코시노칸빠이의 고품질과 깔끔함은, 오랜시간 동안 이어와 그 특성을 숙지한 주적호적미를 원료에 긴죠방식으로 저온 숙성시킴으로서 표현 가능한 특징입니다.\n니혼슈를 처음 마셔보는 분들도 즐길 수 있도록 쌀의 감칠맛을 쉽게 느낄 수 있는 준마이면서도 가볍게 마쉴 수 있고 질리지 않는 맛을 완성했습니다.\n어떤 온도 범위에서도 즐길 수 있지만 특히 10도 전후를 추천합니다.",
    // "classificationKO": "준마이긴죠",
    // "classificationJA": "純米吟醸",
    "rice": {
      "ko": "고햐쿠만고쿠, 야마다니시키",
      "ja": "五百万石, 山田錦"
    },
    "ricePolishingRate": 55,
    "alcoholByVolume": 15,
    "sakeMeterValue": 2,
    "acidityLevel": "비공개",
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 3000
      },
      {
        "volume": "720ml",
        "price": 1500
      }
    ],
    // "imageURL": "p_koshino_006.jpg"
  },
  {
    "brand": "koshi_no_kanbai",
    "category": "Futsushu",
    "productName": {
      "ko": "시로라벨",
      "ja": "白ラベル",
      "fu": "しろらべる"
    },
    "description": "[저녁 반주술]을 목표로 개발된 술입니다. 어떤 요리와도 어울리고, 질리지 않고 매일 마실 수 있는 술! 다음날 숙취가 없는 술!\n보통주이지만 쌀을 긴죠방식으로 깍아서 저온에서 장시간 걸쳐서 천천히 발효 시켜 정성껏 빚었습니다.",
    // "classificationKO": "후츠슈",
    // "classificationJA": "普通酒",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 58,
    "alcoholByVolume": 15,
    "sakeMeterValue": 6,
    "acidityLevel": "비공개",
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 2030
      },
      {
        "volume": "720ml",
        "price": 960
      }
    ],
    // "imageURL": "p_koshino_007.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Futsushu",
    "productName": {
      "ko": "세이슈",
      "ja": "清酒",
      "fu": "せいしゅ"
    },
    "description": "깔끔하고 드라이한 맛. 40% 깎아낸 긴조급 사케. 요리 맛을 방해하지 않음.",
    // "classificationKO": "후츠슈",
    // "classificationJA": "普通酒",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 60,
    "alcoholByVolume": 15.5,
    "sakeMeterValue": 5,
    "acidityLevel": 1.0,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 1100
      }
    ],
    // "imageURL": "p_hakkaisan_001.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Tokubetsu Honjozo",
    "productName": {
      "ko": "토쿠베츠혼죠조",
      "ja": "特別本醸造",
      "fu": "とくべつほんじょうぞう"
    },
    "description": "사케의 기준이 되는 사케 라고 할만한 술. 질리지 않는 깔끔한 맛",
    // "classificationKO": "토쿠베츠혼죠조",
    // "classificationJA": "特別本醸造",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 55,
    "alcoholByVolume": 15.5,
    "sakeMeterValue": 4,
    "acidityLevel": 1.0,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 1300
      }
    ],
    // "imageURL": "p_hakkaisan_002.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Tokubetsu Junmai",
    "productName": {
      "ko": "토쿠베츠준마이",
      "ja": "特別純米",
      "fu": "とくべつじゅんまい"
    },
    "description": "해외 판매 전용 사케. 볼륨감 있고 기품있는 향과 맛. 다양한 요리에 어울리도록 빚음.",
    // "classificationKO": "토쿠베츠준마이",
    // "classificationJA": "特別純米",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 60,
    "alcoholByVolume": 15.5,
    "sakeMeterValue": -1,
    "acidityLevel": 1.5,
    "volumePrice": [
      {
        "volume": "720ml",
        "priceKO": 39800
      }
    ],
    // "imageURL": "p_hakkaisan_003.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Ginjo",
    "productName": {
      "ko": "긴죠",
      "ja": "吟醸",
      "fu": "ぎんじょう"
    },
    "description": "Our brewery is covered by deep snow in the winter. This sake embodies the spirit of the clean, cold air during the winter season in that region. Experience the alluring aroma and gentle flavor on the palate. Supported by nature and our craftsman, the elegant flavor of Hakkaisan Ginjo enhances your enjoyment of seasonal dishes.",
    // "classificationKO": "긴죠",
    // "classificationJA": "吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 15.5,
    "sakeMeterValue": 5,
    "acidityLevel": 1.0,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 1900
      }
    ],
    // "imageURL": "p_hakkaisan_004.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Junmai Ginjo",
    "productName": {
      "ko": "준마이긴죠",
      "ja": "純米吟醸",
      "fu": "じゅんまいぎんじょう"
    },
    "description": "쌀의 감칠맛. 부드러운 목넘김. 식중주",
    // "classificationKO": "준마이긴죠",
    // "classificationJA": "純米吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 15.5,
    "sakeMeterValue": 4,
    "acidityLevel": 1.2,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 2100
      }
    ],
    // "imageURL": "p_hakkaisan_005.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Daiginjo",
    "productName": {
      "ko": "다이긴죠",
      "ja": "大吟醸",
      "fu": "だいぎんじょう"
    },
    "description": "군더더기가 없는 깔끔한 사케. 엄동설한에만 빚음(수량 한정). 부드럽고 풍부한 맛.",
    // "classificationKO": "다이긴죠",
    // "classificationJA": "大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 40,
    "alcoholByVolume": 15.5,
    "sakeMeterValue": 5,
    "acidityLevel": 1.0,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 4980
      }
    ],
    // "imageURL": "p_hakkaisan_006.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Futsushu",
    "productName": {
      "ko": "에치고데소우로우",
      "ja": "越後で候",
      "fu": "えちごでそうろう"
    },
    "description": "(10월-3월한정) 일본에선 겨울철 한정판매. 갓 짜낸 생 원주. 19%로 느껴지지 않는 부드러움 신선함, 임팩트.",
    // "classificationKO": "후츠슈",
    // "classificationJA": "普通酒",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 60,
    "alcoholByVolume": 19,
    "sakeMeterValue": 4,
    "acidityLevel": 1.7,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 1400
      }
    ],
    // "imageURL": "p_hakkaisan_007.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Junmai Ginjo",
    "productName": {
      "ko": "에치고데소우로우",
      "ja": "越後で候",
      "fu": "えちごでそうろう"
    },
    "description": "(12월한정) 1년에 단 한 번 한정판매. 갓 짜낸 생 원주. 부드러움, 신선함, 임팩트 세련된 감칠맛.",
    // "classificationKO": "준마이긴죠",
    // "classificationJA": "純米吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 17.5,
    "sakeMeterValue": 0,
    "acidityLevel": 1.8,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 2280
      }
    ],
    // "imageURL": "p_hakkaisan_008.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Tokubetsu Junmai",
    "productName": {
      "ko": "토쿠베츠준마이겐슈",
      "ja": "特別純米原酒",
      "fu": "とくべつじゅんまいげんしゅ"
    },
    "description": "A selection of top premium sake rice is used to make this special Junmai Genshu, which has a mild but rich taste without any harsh flavor. Crafted with attention to detail and using a long fermentation period at a low temperature, this sake is best served chilled.",
    // "classificationKO": "토쿠베츠준마이",
    // "classificationJA": "特別純米",
    "rice": {
      "ko": "고햐쿠만고쿠",
      "ja": "五百万石"
    },
    "ricePolishingRate": 55,
    "alcoholByVolume": 17.5,
    "sakeMeterValue": 0,
    "acidityLevel": 1.7,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 1880
      }
    ],
    // "imageURL": "p_hakkaisan_009.jpg"
  },
  {
    "brand": "hakkaisan",
    "category": "Junmai Ginjo",
    "productName": {
      "ko": "유키모로쵸조산넹",
      "ja": "雪室貯蔵三年",
      "fu": "ゆきむろちょぞうさんねん"
    },
    "description": "2013년에 완공한 [핫카이산 눈저장실]의 전용 탱크에서 3년간 순성시킨 준마이긴죠입니다. 눈저장 탱크의 안정적인 환경속에서 3년이라는 긴 시간 동안 저장을 하면 눈저장탱크 특유의 부드러운 맛이 태어납니다.",
    // "classificationKO": "준마이긴죠",
    // "classificationJA": "純米吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 17.0,
    "sakeMeterValue": -1,
    "acidityLevel": 1.5,
    "volumePrice": [
      {
        "volume": "720ml",
        "price": 3980
      }
    ],
    // "imageURL": "p_hakkaisan_010.jpg"
  },
  {
    "brand": "dassai",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "준마이다이긴죠 50",
      "ja": "純米大吟醸 50",
      "fu": "じゅんまいだいぎんじょう 50"
    },
    "description": "정미배합 50%의 준마이다이긴죠. 품질에 타협이란 없음.",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 50,
    "alcoholByVolume": 16.0,
    "sakeMeterValue": 3,
    "acidityLevel": 1.5,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 3078
      },
      {
        "volume": "720ml",
        "price": 1539
      }
    ],
    // "imageURL": "p_dassai_001.png"
  },
  {
    "brand": "dassai",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "미가키산와리큐부",
      "ja": "磨き三割九分",
      "fu": "みがきさんわりくぶ"
    },
    "description": "정미배합 39%의 쥰마이다이긴죠. 향과 맛의 발군의 볼륨감",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 39,
    "alcoholByVolume": 16.0,
    "sakeMeterValue": 4,
    "acidityLevel": 1.1,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 4835
      },
      {
        "volume": "720ml",
        "price": 2418
      }
    ],
    // "imageURL": "p_dassai_002.png"
  },
  {
    "brand": "dassai",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "미가키니와리산부",
      "ja": "磨き二割三分",
      "fu": "みがきにわりさんぶん"
    },
    "description": "야마다니시키를 사용한 쥰마이다이긴죠 밖에 만들지 않는 닷사이 중의 닷사이.",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 23,
    "alcoholByVolume": 15.0,
    "sakeMeterValue": 4,
    "acidityLevel": 1.1,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 10285
      },
      {
        "volume": "720ml",
        "price": 5142
      }
    ],
    // "imageURL": "p_dassai_003.png"
  },
  {
    "brand": "dassai",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "미가키산와리큐부 원심분리",
      "ja": "磨き三割九分 遠心分離",
      "fu": "みがきさんわりくぶ えんしんぶんり"
    },
    "description": "무가압상태에서 술원액에서 술을 분리하기 때문에 쥰마이다이긴죠 원액이 본래 갖고 있는 향과 팽창감 등의 장점이 사라지지 않고 잘 표현되어 있음.",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 39,
    "alcoholByVolume": 16.0,
    "sakeMeterValue": 4,
    "acidityLevel": 1.1,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 7560
      },
      {
        "volume": "720ml",
        "price": 3780
      }
    ],
    // "imageURL": "p_dassai_004.png"
  },
  {
    "brand": "dassai",
    "category": "Junmai Daiginjo",
    "productName": {
      "ko": "미가키 니와리산부 원심분리",
      "ja": "磨き二割三分 遠心分離",
      "fu": "みがきにわりさんぶん えんしんぶんり"
    },
    "description": "이 술은 원심분리 기술을 이용해 압력을 가하지 않고 짜낸 것과 통상의 술의 양조 방법인 압력을 가해서 짜낸 술을 섞은 것입니다. 원심분리의 장점인 잡스러운게 한점도 없는 술의 품질에 통상의 방법으로 짜내서 자극 있는 맛을 갖는 술의 품질을 합쳐서 세련된 화려함과 섬세함을 갖는 동시에 두터움과 복잡함이 나타나는 술입니다.",
    // "classificationKO": "준마이다이긴죠",
    // "classificationJA": "純米大吟醸",
    "rice": {
      "ko": "야마다니시키",
      "ja": "山田錦"
    },
    "ricePolishingRate": 23,
    "alcoholByVolume": 15.0,
    "sakeMeterValue": 4,
    "acidityLevel": 1.1,
    "volumePrice": [
      {
        "volume": "1.8L",
        "price": 16200
      },
      {
        "volume": "720ml",
        "price": 8100
      }
    ],
    // "imageURL": "p_dassai_005.png"
  }
]


export {};
