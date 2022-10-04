import Mock from 'mockjs'
import homeApi from '@/mockServerData'

Mock.mock('http://127.0.0.1:3010/api/home/getData', homeApi.getStatisticalData())
