
/**
 * @param body request body
 * @param paramName 찾으려고 하는 카카오 플러그인 매개변수
 */
exports.searchBodyParameter = (body, paramName) => {
  console.log(body.action.params);
  const { value } = JSON.parse(body.action.params[paramName]);

  if (!value) {
    throw new Error(`Cannot find parameter name : ${paramName}`);
  }

  return value;
};


/**
 * @param text 메세지 내용
 */
exports.SimpleText = text => {
  const responseFormat = {
    version: '2.0',
    template: {
      outputs: [
        {
          simpleText: {
              text,
          },
      },
      ]
    }
  };

  return responseFormat;
};

/**
 * @param title 카드 제목
 * @param description 카드의 내용
 * @param item 카드에 나올 이미지 주소
 */
exports.BasicCard = (title, description, imageUrl) => {
  const responseFormat = {
    version: '2.0',
    template: {
      outputs: [
        {
          basicCard: {
            title,
            description,
            thumbnail: {
              imageUrl,
            },
          },
        },
      ],
    },
  };

  return responseFormat;
};

/**
 * @param title 리스트 카드 헤더의 제목
 * @param titleImgUrl 리스트 카드 헤더의 이미지
 * @param item 리스트 카드의 내용의 아이템 배열 > BasicCard 포멧
 */
exports.ListCard = (title, titleImgUrl = '', items) => {
  const responseFormat = {
    version: '2.0',
    template: {
      outputs: [
        {
          listCard: {
            header: {
              title,
              imageUrl: titleImgUrl,
            },
            items,
          },
        },
      ],
    },
  };

  return responseFormat; 
};

/**
 * @description 베이스 카드, 급식 케로셀
 * @param item 리스트 카드의 내용의 아이템 배열 > BasicCard 포멧
 */
exports.CarouselMeal = (items) => {
  const responseFormat = {
    version: '2.0',
    template: {
      outputs: [
        {
          carousel: {
            type: "basicCard",
            items,
          },
        },
      ],
      quickReplies: [
        {
          label: '급식 도움말',
          messageText: '급식 도움말',
          action: 'message',
        },
        {
          label: '오늘 급식',
          messageText: '오늘 급식 보여줘',
          action: 'message',
        },
        {
          label: '내일 급식',
          messageText: '내일 급식 보여줘',
          action: 'message',
        },
        {
          label: '요일 급식',
          messageText: '요일 급식 보여줘',
          action: 'message',
        },
      ]
    },
  };

  return responseFormat;
};
