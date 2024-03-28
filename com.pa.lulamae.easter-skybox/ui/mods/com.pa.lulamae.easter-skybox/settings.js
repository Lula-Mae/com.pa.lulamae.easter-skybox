try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Easter Skybox by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.easter-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}