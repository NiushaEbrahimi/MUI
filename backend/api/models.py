from django.db import models

class Card(models.Model):
    card_number = models.CharField(max_length=16)
    card_holder = models.CharField(max_length=100)
    cvv = models.CharField(max_length=4)

    def __str__(self):
        return f"{self.cardholder_name} - {self.card_number[-4:]}"
    

class Colors(models.Model):
    card = models.OneToOneField(Card, on_delete=models.CASCADE, related_name="colors")
    firstColor = models.CharField(max_length=20)
    secondColor = models.CharField(max_length=20)
    textColor = models.CharField(max_length=20, default="black")

class Expiration(models.Model):
    card = models.OneToOneField(Card, on_delete=models.CASCADE, related_name="date_expiration")
    month = models.CharField(max_length=5)
    year = models.CharField(max_length=5)
