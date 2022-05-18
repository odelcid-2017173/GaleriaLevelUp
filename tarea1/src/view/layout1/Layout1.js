import React from 'react';

import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';

import styles from './Layout.styles';
const Layout1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SnapShot</Text>
        <TextInput placeholder="Search...." style={styles.input} />

        <View style={styles.buttonfalse}>
          <TouchableOpacity style={styles.touch}>
            <Text style={styles.press}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <Text style={styles.press}>Public</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <Text style={styles.press}>Archeological</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch}>
            <Text style={styles.press}>Sanctuaries</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Monument</Text>
        <View style={styles.viewImg}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://viajes.nationalgeographic.com.es/medio/2015/02/22/hemis_1718519_500x330.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn-bogik.nitrocdn.com/JqbMReLOqLGUdfoijLGMzTtycTpAulUE/assets/static/optimized/wp-content/uploads/2017/10/a9063b67abd9b003a87d52cfd16cd938.Cristo_Redentor_Río_de_Janeiro.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn.culturagenial.com/es/imagenes/torre-eiffel-cke.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://blogapi.uber.com/wp-content/uploads/2019/02/6-monumentos-de-Antigua-Guatemala-que-tienen-mucho-que-contar-1024x512.png',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://aprende.guatemala.com/wp-content/uploads/2018/10/Lista-de-monumentos-en-la-Ciudad-de-Guatemala.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://blogapi.uber.com/wp-content/uploads/2018/12/Fuente-Luminosa-del-parque-Central.jpg',
            }}
          />

          
          <Image
            style={styles.img}
            source={{
              uri: 'https://conceptodefinicion.de/wp-content/uploads/2015/03/monumento.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{uri: 'https://static.dw.com/image/53841073_303.jpg'}}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://farm1.staticflickr.com/710/22808832646_81e25f0dd2.jpg',
            }}
          />

          <Image
            style={styles.img}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGm5cFuvlvZiy1ZkeM7LuDsUtYTjQAf5rwqw&usqp=CAU',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://viajes.nationalgeographic.com.es/medio/2015/02/22/hemis_0305229_500x333.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://okdiario.com/img/2022/02/18/todo-lo-que-no-sabes-sobre-los-monumentos-mas-grandes-del-mundo-655x368.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://agn.gt/archivo/wp-content/uploads/2018/02/Marimba2-1.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-Y6GGSWM7lvGXHyVVGdXiEsOo1AF7GwoCmgd5XNWWTfZMcVfdZKgqG7FXXIFFEQBWZ0&usqp=CAU',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://i.ytimg.com/vi/sp6NkJwmBtE/maxresdefault.jpg',
            }}
          />

          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn.forbes.com.mx/2021/04/Palacion-de-Bellas-Artes-1-e1618516343374-640x360.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://viajes.nationalgeographic.com.es/medio/2015/02/22/hemis_1718519_500x330.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2018/01/1140-martin-luther-king-memorials-washington-dc-esp.jpg',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://proxy-republicagt.herokuapp.com/102021/1635403061241.jpg?cw=446',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://cdn.elperiodico.com.gt/wp-content/uploads/2021/10/12165639/Colon.png',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Layout1;
