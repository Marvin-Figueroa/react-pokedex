import { Flex, Skeleton } from 'antd'
import Card from 'antd/es/card/Card'

const PokemonCardSkeleton = () => {
  return (
    <Card
      size='small'
      cover={
        <Skeleton.Image
          style={{ width: '100%', height: '260px' }}
          active={true}
        />
      }>
      <Flex gap='middle' vertical>
        <Skeleton.Input active={true} size={'default'} block={true} />
        <Skeleton.Input active={true} size={'default'} block={true} />
        <Flex justify={'space-between'} align={'center'}>
          <Skeleton.Avatar active={true} size={'small'} shape={'circle'} />
          <Skeleton.Avatar active={true} size={'small'} shape={'circle'} />
          <Skeleton.Avatar active={true} size={'small'} shape={'circle'} />
        </Flex>
      </Flex>
    </Card>
  )
}

export default PokemonCardSkeleton
