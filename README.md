# README

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user