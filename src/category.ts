type GroupType = 'junmai' | 'honjozo' | 'futsushu';
type CategoryType =
  'Junmai Daiginjo' | 'Junmai Ginjo' | 'Tokubetsu Junmai' | 'Junmai' |
  'Daiginjo' | 'Ginjo' | 'Tokubetsu Honjozo' | 'Honjozo' |
  'Futsushu';

interface SakeGroup {
  groupType: GroupType;
  groupName: string;
  ingredients: string[];
  categories: SakeCategory[];
}

interface SakeCategory {
  categoryType: CategoryType;
  name: {
    ja: string;
    furigana: string;
    ko: string;
  },
  description: string;
  price: [number, number?];
};

const groupList: SakeGroup[] = [
  {
    groupName: '준마이 타입',
    ingredients: ['쌀, 쌀누룩'],
    groupType: 'junmai',
    categories: [],
  },
  {
    groupName: '혼죠조 타입',
    ingredients: ['쌀, 쌀누룩', '양조알코올'],
    groupType: 'honjozo',
    categories: [],
  },
  {
    groupName: '보통주 타입',
    ingredients: ['쌀, 쌀누룩', '양조알코올', '그 외 원재료'],
    groupType: 'futsushu',
    categories: [],
  },
];

const categoryList: SakeCategory[] = [
  {
    name: {
      ja: '純米大吟醸',
      furigana: 'じゅんまいだいぎんじょう',
      ko: '준마이다이긴죠',
    },
    description: '50% 이하',
    price: [2_500],
    categoryType: 'Junmai Daiginjo',
  },
  {
    name: {
      ja: '純米吟醸',
      furigana: 'じゅんまいぎんじょう',
      ko: '준마이긴죠',
    },
    description: '60% 이하',
    price: [2_200, 5_500],
    categoryType: 'Junmai Ginjo',
  },
  {
    name: {
      ja: '特別純米',
      furigana: 'とくべつじゅんまい',
      ko: '토쿠베츠준마이',
    },
    description: '60% 이하 또는 특별한 제조 방법',
    price: [1_900, 4_000],
    categoryType: 'Tokubetsu Junmai',
  },
  {
    name: {
      ja: '純米',
      furigana: 'じゅんまい',
      ko: '준마이',
    },
    description: '규제없음',
    price: [1_700, 3_600],
    categoryType: 'Junmai',
  },
  {
    name: {
      ja: '大吟醸',
      furigana: 'だいぎんじょう',
      ko: '다이긴죠',
    },
    description: '50% 이하',
    price: [2_500],
    categoryType: 'Daiginjo',
  },
  {
    name: {
      ja: '吟醸',
      furigana: 'ぎんじょう',
      ko: '긴죠',
    },
    description: '60% 이하',
    price: [2_000, 5_000],
    categoryType: 'Ginjo',
  },
  {
    name: {
      ja: '特別本醸造',
      furigana: 'とくべつほんじょうぞう',
      ko: '토쿠베츠혼죠조',
    },
    description: '60% 이하 또는 특별한 제조 방법',
    price: [1_600, 3_500],
    categoryType: 'Tokubetsu Honjozo',
  },
  {
    name: {
      ja: '本醸造',
      furigana: 'ほんじょうぞう',
      ko: '혼죠조',
    },
    description: '70% 이하',
    price: [1_200, 3_500],
    categoryType: 'Honjozo',
  },
  {
    name: {
      ja: '普通酒',
      furigana: 'ふつうしゅ',
      ko: '후츠슈',
    },
    description: '규제없음',
    price: [1_100, 3_000],
    categoryType: 'Futsushu',
  },
];

export {
  GroupType,
  SakeGroup,
  groupList,
  CategoryType,
  SakeCategory,
  categoryList,
};
