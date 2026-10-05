const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.Pin,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{tile_: 0},
	{tile_2: 0},
	{tile_3: 0},
	{tile_4: 0},
	{tile_5: 0},
	{tile_6: 0},
	{Platform: 0},
	{playerhb: 0},
	{tile_8: 0},
	{Pin: 0},
	{playeranimate: 0},
	{Keyboard: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	tile_: class extends self.ISpriteInstance {},
	tile_2: class extends self.ISpriteInstance {},
	tile_3: class extends self.ISpriteInstance {},
	tile_4: class extends self.ISpriteInstance {},
	tile_5: class extends self.ISpriteInstance {},
	tile_6: class extends self.ISpriteInstance {},
	playerhb: class extends self.ISpriteInstance {},
	tile_8: class extends self.ISpriteInstance {},
	playeranimate: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {}
}