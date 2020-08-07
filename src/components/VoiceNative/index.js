import React, { useState } from 'react';
import { View, Button, Text, TextInput,Alert  } from 'react-native';
import Voice from '@react-native-community/voice';

import styles from './styles';

export default function VoiceNative() {
  const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [detail, setDetail] = useState('');
  
  Voice.onSpeechStart = (e) => {
    console.log('iniciou gravacao');
    setStarted('V');
  };
  Voice.onSpeechRecognized = (e) => {
    console.log('detectou voz');
    setRecognized('V');
  };
  Voice.onSpeechResults = (e) => {
    const resultsSplited = e.value[0].split(' ');
    setResults(resultsSplited);
    setStarted('');
  };
  async function startRecognition(e) {
    try {
      await Voice.start('pt-BR');
    } catch (err) {
      console.error(err);
    }
  }

  function renderResults() {
    if (results.length > 0) {
      return results.map((words, index) => (
        <View key={index} style={styles.bodyText} onStartShouldSetResponder={() => {
          setDetail(`${detail}${words};`);
          setResults(results.filter(result => result != words));
        }}>
          <Text style={styles.text}>{words}</Text>
          <Button color="#139cfe" onPress={() => {
              setResults(results.filter(result => result != words));
          }} title="X" />
        </View>
      ));
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Palavras detectadas</Text>
      <TextInput value={detail} placeholder="Detalhes" style={styles.textInput}/>
      <View style={styles.containerBody}>{renderResults()}</View>
      <View style={styles.containerButton}>
        <Button
          onPress={startRecognition}
          title="Record"
          color={`${started ? 'red':'blue'}`}
          style={styles.recordButton}
        />
      </View>
    </View>
  );
}