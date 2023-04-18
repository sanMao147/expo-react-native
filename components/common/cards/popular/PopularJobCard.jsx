import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image
          source={{
            uri: item.employer_logo
              ? item.employer_logo
              : 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text
        style={styles.companyName}
        numberOfLines={1}
      >
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text
          style={styles.jobName(selectedJob, item)}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          {/* <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text> */}
          <Text style={styles.location}>
            {item.job_country}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard
