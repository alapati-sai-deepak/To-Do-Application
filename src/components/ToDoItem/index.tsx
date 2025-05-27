// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import styles from './index.styles';

// type Props = {
//   todo: { id: string; text: string; done: boolean };
//   onToggle: (id: string) => void;
//   onDelete: (id: string) => void;
// };

// export default function TodoItem({ todo, onToggle, onDelete }: Props) {
//   return (
//     <View style={styles.item}>
//       <TouchableOpacity onPress={() => onToggle(todo.id)} style={styles.textWrapper}>
//         <Text style={[styles.text, todo.done && styles.done]}>{todo.text}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => onDelete(todo.id)}>
//         <Text style={styles.delete}>Delete</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


