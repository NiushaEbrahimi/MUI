# ✅ 1. Model

# → defines the data structure

# ✅ 2. Serializer

# → converts model ↔ JSON

# ✅ 3. View + URL

# → exposes the API publicly so React can call it


from rest_framework import serializers
from .models import Card, Colors, Expiration

class ColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colors
        fields = ["firstColor", "secondColor","textColor"]

class ExpirationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expiration
        fields = ["month", "year"]

class CardSerializer(serializers.ModelSerializer):
    colors = ColorsSerializer()
    date_expiration = ExpirationSerializer()

    class Meta:
        model = Card
        fields = ["id","card_number","card_holder","cvv", "colors", "date_expiration"]

    def create(self, validated_data):
        colors_data = validated_data.pop("colors")
        expiration_data = validated_data.pop("date_expiration")

        card = Card.objects.create(**validated_data)
        Colors.objects.create(card=card, **colors_data)
        Expiration.objects.create(card=card, **expiration_data)

        return card

    def update(self, instance, validated_data):
        colors_data = validated_data.pop("colors", None)
        expiration_data = validated_data.pop("date_expiration", None)

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if colors_data:
            colors = instance.colors
            for attr, value in colors_data.items():
                setattr(colors, attr, value)
            colors.save()

        if expiration_data:
            expiration = instance.date_expiration
            for attr, value in expiration_data.items():
                setattr(expiration, attr, value)
            expiration.save()

        return instance
