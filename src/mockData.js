import Mock from 'mockjs'

Mock.mock('/api/getList',{
    "data":[
        {
            "id": 1,
            "title": '成都旅行',
            "price": 3265,
            "date": '2020-02-26',
            "category": {
                "id": 1,
                'name': '旅行',
                "type": 'outcome'
            }
        },
        {
            "id": 2,
            "title": '买iphone11',
            "price": 200,
            "date": '2020-03-26',
            "category": {
                "id": 1,
                'name': '购物',
                "type": 'outcome'
            }
        },
        {
            "id": 3,
            "title": '给富婆按摩',
            "price": 200,
            "date": '2020-02-26',
            "category": {
                "id": 1,
                'name': '打工',
                "type": 'income'
            }
        },
    ]
})
