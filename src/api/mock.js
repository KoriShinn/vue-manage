import Mock from 'mockjs'
import homeApi from '@/mockServerData'

Mock.mock('/home/getData', homeApi.getStatisticalData())
