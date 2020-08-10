import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { connect } from "react-redux";
import colors from "../config/colors";

import FlipCard from "../components/FlipCard";
import * as scoreactions from "../store/score";
import * as cardsactions from "../store/cards";

// tracks opened cards to compare
let cardsBeingCompared = [];
// num cards left unopened. Determines winning condition
let numStartingCards = 12;
let completedCards = [];

class GameScreen extends Component {
  // Card opening logic
  pressedCard(c) {
    // make sure card is not flipped, and card is not undergoing flipping
    if (!c.getCardState().isFlipped && !c.getCardState().isFlipping) {
      //execute code
      //if first card
      if (cardsBeingCompared.length == 0) {
        c._toggleCard();
        this.props.increaseCounter();
        cardsBeingCompared.push(c);
      }
      // if second card
      else if (cardsBeingCompared.length == 1) {
        // if dont match
        c._toggleCard();
        this.props.increaseCounter();
        cardsBeingCompared.push(c);
        // if not the same,
        if (
          cardsBeingCompared[0].props.cardNumber !=
          cardsBeingCompared[1].props.cardNumber
        ) {
          // flip back after delay
          setTimeout(
            function () {
              cardsBeingCompared[0]._toggleCard();
              cardsBeingCompared[1]._toggleCard();
              // reset list after flip back

              cardsBeingCompared = [];
            }.bind(this),
            1000
          );
        }
        // else - match, clear the cardsBeingCompared = click got in because double click, before flip is over. game thinks it is a match
        else {
          // add the opened cards into arr of completed cards
          completedCards.push(cardsBeingCompared[0]);
          completedCards.push(cardsBeingCompared[1]);
          cardsBeingCompared = [];

          // if complete all cards
          if (completedCards.length == numStartingCards) {
            // END GAME!
            Alert.alert(
              "Congratulations!",
              "You win this game by " + (this.props.counter + 1) + " steps!",
              [
                {
                  text: "Try another round",
                  onPress: () => this.resetGame(),
                },
              ],
              { cancelable: false }
            );
          }
        }
      }
    }
  }

  resetGame() {
    for (let i = 0; i < completedCards.length; i++) {
      //flip all face up cards down
      completedCards[i]._toggleCard();
    }
    //reset counter and regenerate cards
    this.props.resetCounter();
    this.props.resetCards();
    //reset arrays
    completedCards = [];
    cardsBeingCompared = [];
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Top UI */}
        <Text
          style={styles.restart}
          onPress={() => {
            Alert.alert(
              "Restart",
              "Are you sure you want to restart? Progress will not be saved.",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => {
                    console.log("OK Pressed");
                    this.resetGame();
                  },
                },
              ]
            );
          }}
        >
          Restart
        </Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.steps}>STEPS:</Text>
          <Text style={styles.score}>{this.props.counter}</Text>
        </View>

        {/* CARDS */}
        <View style={styles.row}>
          <FlipCard
            ref={(card) => (this.card = card)}
            cardNumber={this.props.cards.value[0]}
            onPress={() => {
              this.pressedCard(this.card);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card2 = card)}
            cardNumber={this.props.cards.value[1]}
            onPress={() => {
              this.pressedCard(this.card2);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card3 = card)}
            cardNumber={this.props.cards.value[2]}
            onPress={() => {
              this.pressedCard(this.card3);
            }}
            style={styles.card}
          ></FlipCard>
        </View>
        <View style={styles.row}>
          <FlipCard
            ref={(card) => (this.card4 = card)}
            cardNumber={this.props.cards.value[3]}
            onPress={() => {
              this.pressedCard(this.card4);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card5 = card)}
            cardNumber={this.props.cards.value[4]}
            onPress={() => {
              this.pressedCard(this.card5);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card6 = card)}
            cardNumber={this.props.cards.value[5]}
            onPress={() => {
              this.pressedCard(this.card6);
            }}
            style={styles.card}
          ></FlipCard>
        </View>
        <View style={styles.row}>
          <FlipCard
            ref={(card) => (this.card7 = card)}
            cardNumber={this.props.cards.value[6]}
            onPress={() => {
              this.pressedCard(this.card7);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card8 = card)}
            cardNumber={this.props.cards.value[7]}
            onPress={() => {
              this.pressedCard(this.card8);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card9 = card)}
            cardNumber={this.props.cards.value[8]}
            onPress={() => {
              this.pressedCard(this.card9);
            }}
            style={styles.card}
          ></FlipCard>
        </View>
        <View style={styles.row}>
          <FlipCard
            ref={(card) => (this.card10 = card)}
            cardNumber={this.props.cards.value[9]}
            onPress={() => {
              this.pressedCard(this.card10);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card11 = card)}
            cardNumber={this.props.cards.value[10]}
            onPress={() => {
              this.pressedCard(this.card11);
            }}
            style={styles.card}
          ></FlipCard>
          <FlipCard
            ref={(card) => (this.card12 = card)}
            cardNumber={this.props.cards.value[11]}
            onPress={() => {
              this.pressedCard(this.card12);
            }}
            style={styles.card}
          ></FlipCard>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 5,
  },
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    padding: 20,
    backgroundColor: colors.dark,
  },
  scoreContainer: {
    top: 40,
    right: 40,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  steps: {
    color: colors.white,
    fontSize: 24,
  },
  score: {
    color: colors.primary,
    fontSize: 38,
  },
  restart: {
    top: 40,
    left: 40,
    position: "absolute",
    color: colors.primary,
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    height: "22%",
    paddingVertical: 5,
  },
});

function mapStateToProps(state) {
  return {
    counter: state.score.counter,
    cards: state.cards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch(scoreactions.increaseCounter()),
    resetCounter: () => dispatch(scoreactions.resetCounter()),
    resetCards: () => dispatch(cardsactions.resetCards()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
